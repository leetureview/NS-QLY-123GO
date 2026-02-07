// Firebase Firestore utilities for data persistence
import { db } from '../firebase'
import {
    collection,
    getDocs,
    getDoc,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    setDoc,
    orderBy
} from 'firebase/firestore'

// Collection names
const COLLECTIONS = {
    DRIVERS: 'drivers',
    DEPOSITS: 'deposits',
    REVENUE: 'revenue',
    NIGHT_SHIFTS: 'nightShifts',
    SETTINGS: 'settings',
}

// Default settings
const DEFAULT_SETTINGS = {
    driverSharePercent: 60,
    companySharePercent: 40,
}

// Settings operations
export const settingsStorage = {
    get: async () => {
        try {
            const docRef = doc(db, COLLECTIONS.SETTINGS, 'config')
            const docSnap = await getDoc(docRef)
            return docSnap.exists() ? docSnap.data() : DEFAULT_SETTINGS
        } catch (error) {
            console.error('Error getting settings:', error)
            return DEFAULT_SETTINGS
        }
    },
    save: async (settings) => {
        try {
            const docRef = doc(db, COLLECTIONS.SETTINGS, 'config')
            await setDoc(docRef, settings)
            return true
        } catch (error) {
            console.error('Error saving settings:', error)
            return false
        }
    },
}

// Driver operations
export const driverStorage = {
    getAll: async () => {
        try {
            const querySnapshot = await getDocs(collection(db, COLLECTIONS.DRIVERS))
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        } catch (error) {
            console.error('Error getting drivers:', error)
            return []
        }
    },
    getById: async (id) => {
        try {
            const docRef = doc(db, COLLECTIONS.DRIVERS, id)
            const docSnap = await getDoc(docRef)
            return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null
        } catch (error) {
            console.error('Error getting driver:', error)
            return null
        }
    },
    add: async (driver) => {
        try {
            const newDriver = {
                ...driver,
                createdAt: new Date().toISOString().split('T')[0]
            }
            const docRef = await addDoc(collection(db, COLLECTIONS.DRIVERS), newDriver)
            return { id: docRef.id, ...newDriver }
        } catch (error) {
            console.error('Error adding driver:', error)
            return null
        }
    },
    update: async (id, updates) => {
        try {
            const docRef = doc(db, COLLECTIONS.DRIVERS, id)
            await updateDoc(docRef, updates)
            return { id, ...updates }
        } catch (error) {
            console.error('Error updating driver:', error)
            return null
        }
    },
    delete: async (id) => {
        try {
            await deleteDoc(doc(db, COLLECTIONS.DRIVERS, id))
            return true
        } catch (error) {
            console.error('Error deleting driver:', error)
            return false
        }
    },
}

// Deposit operations
export const depositStorage = {
    getAll: async () => {
        try {
            const querySnapshot = await getDocs(collection(db, COLLECTIONS.DEPOSITS))
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        } catch (error) {
            console.error('Error getting deposits:', error)
            return []
        }
    },
    getByDriverId: async (driverId) => {
        try {
            const q = query(collection(db, COLLECTIONS.DEPOSITS), where('driverId', '==', driverId))
            const querySnapshot = await getDocs(q)
            return querySnapshot.docs.length > 0
                ? { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() }
                : null
        } catch (error) {
            console.error('Error getting deposit:', error)
            return null
        }
    },
    update: async (driverId, paidAmount) => {
        try {
            const deposit = await depositStorage.getByDriverId(driverId)
            if (deposit) {
                const status = paidAmount >= deposit.requiredAmount ? 'paid' : paidAmount > 0 ? 'partial' : 'unpaid'
                const updates = {
                    paidAmount,
                    status,
                    lastPaymentDate: new Date().toISOString().split('T')[0]
                }
                await updateDoc(doc(db, COLLECTIONS.DEPOSITS, deposit.id), updates)
                return { ...deposit, ...updates }
            }
            return null
        } catch (error) {
            console.error('Error updating deposit:', error)
            return null
        }
    },
    createForDriver: async (driver) => {
        try {
            const newDeposit = {
                driverId: driver.id,
                driverName: driver.name,
                requiredAmount: 5000000,
                paidAmount: 0,
                status: 'unpaid',
                lastPaymentDate: null
            }
            const docRef = await addDoc(collection(db, COLLECTIONS.DEPOSITS), newDeposit)
            return { id: docRef.id, ...newDeposit }
        } catch (error) {
            console.error('Error creating deposit:', error)
            return null
        }
    },
}

// Revenue operations
export const revenueStorage = {
    getAll: async () => {
        try {
            const querySnapshot = await getDocs(collection(db, COLLECTIONS.REVENUE))
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        } catch (error) {
            console.error('Error getting revenue:', error)
            return []
        }
    },
    getByVehicleCode: async (vehicleCode) => {
        try {
            const q = query(collection(db, COLLECTIONS.REVENUE), where('vehicleCode', '==', vehicleCode))
            const querySnapshot = await getDocs(q)
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        } catch (error) {
            console.error('Error getting revenue by vehicle:', error)
            return []
        }
    },
    getByMonth: async (month) => {
        try {
            const q = query(collection(db, COLLECTIONS.REVENUE), where('month', '==', month))
            const querySnapshot = await getDocs(q)
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        } catch (error) {
            console.error('Error getting revenue by month:', error)
            return []
        }
    },
    add: async (revenue) => {
        try {
            // Check if exists
            const q = query(
                collection(db, COLLECTIONS.REVENUE),
                where('vehicleCode', '==', revenue.vehicleCode),
                where('month', '==', revenue.month)
            )
            const existing = await getDocs(q)

            if (existing.docs.length > 0) {
                // Update existing
                const docRef = doc(db, COLLECTIONS.REVENUE, existing.docs[0].id)
                await updateDoc(docRef, revenue)
                return { id: existing.docs[0].id, ...revenue }
            }

            // Add new
            const newRevenue = {
                ...revenue,
                bonus: revenue.bonus || 0,
                penalty: revenue.penalty || 0
            }
            const docRef = await addDoc(collection(db, COLLECTIONS.REVENUE), newRevenue)
            return { id: docRef.id, ...newRevenue }
        } catch (error) {
            console.error('Error adding revenue:', error)
            return null
        }
    },
    update: async (id, updates) => {
        try {
            const docRef = doc(db, COLLECTIONS.REVENUE, id)
            await updateDoc(docRef, updates)
            return { id, ...updates }
        } catch (error) {
            console.error('Error updating revenue:', error)
            return null
        }
    },
    delete: async (id) => {
        try {
            await deleteDoc(doc(db, COLLECTIONS.REVENUE, id))
            return true
        } catch (error) {
            console.error('Error deleting revenue:', error)
            return false
        }
    },
    calculateNet: async (revenue) => {
        const settings = await settingsStorage.get()
        const base = (revenue.amount * settings.driverSharePercent) / 100
        return base + (revenue.bonus || 0) - (revenue.penalty || 0)
    },
}

// Night Shift operations
export const nightShiftStorage = {
    getAll: async () => {
        try {
            const querySnapshot = await getDocs(collection(db, COLLECTIONS.NIGHT_SHIFTS))
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        } catch (error) {
            console.error('Error getting night shifts:', error)
            return []
        }
    },
    getByDate: async (date) => {
        try {
            const q = query(collection(db, COLLECTIONS.NIGHT_SHIFTS), where('date', '==', date))
            const querySnapshot = await getDocs(q)
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        } catch (error) {
            console.error('Error getting shifts by date:', error)
            return []
        }
    },
    getByMonth: async (month) => {
        try {
            const allShifts = await nightShiftStorage.getAll()
            return allShifts.filter(s => s.date.startsWith(month))
        } catch (error) {
            console.error('Error getting shifts by month:', error)
            return []
        }
    },
    getByDriver: async (driverId) => {
        try {
            const q = query(collection(db, COLLECTIONS.NIGHT_SHIFTS), where('driverId', '==', driverId))
            const querySnapshot = await getDocs(q)
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        } catch (error) {
            console.error('Error getting shifts by driver:', error)
            return []
        }
    },
    add: async (shift) => {
        try {
            // Check if already assigned
            const q = query(
                collection(db, COLLECTIONS.NIGHT_SHIFTS),
                where('date', '==', shift.date),
                where('driverId', '==', shift.driverId)
            )
            const existing = await getDocs(q)
            if (existing.docs.length > 0) {
                return { id: existing.docs[0].id, ...existing.docs[0].data() }
            }

            const newShift = { ...shift, status: 'scheduled' }
            const docRef = await addDoc(collection(db, COLLECTIONS.NIGHT_SHIFTS), newShift)
            return { id: docRef.id, ...newShift }
        } catch (error) {
            console.error('Error adding shift:', error)
            return null
        }
    },
    remove: async (date, driverId) => {
        try {
            const q = query(
                collection(db, COLLECTIONS.NIGHT_SHIFTS),
                where('date', '==', date),
                where('driverId', '==', driverId)
            )
            const querySnapshot = await getDocs(q)
            for (const docSnap of querySnapshot.docs) {
                await deleteDoc(doc(db, COLLECTIONS.NIGHT_SHIFTS, docSnap.id))
            }
            return true
        } catch (error) {
            console.error('Error removing shift:', error)
            return false
        }
    },
    updateStatus: async (id, status) => {
        try {
            const docRef = doc(db, COLLECTIONS.NIGHT_SHIFTS, id)
            await updateDoc(docRef, { status })
            return { id, status }
        } catch (error) {
            console.error('Error updating shift status:', error)
            return null
        }
    },
    countByDriverMonth: async (driverId, month) => {
        const shifts = await nightShiftStorage.getByMonth(month)
        return shifts.filter(s => s.driverId === driverId).length
    },
}
