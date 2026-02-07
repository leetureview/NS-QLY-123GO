// LocalStorage utilities for data persistence

const STORAGE_KEYS = {
    DRIVERS: 'taxi_drivers',
    DEPOSITS: 'taxi_deposits',
    REVENUE: 'taxi_revenue',
    NIGHT_SHIFTS: 'taxi_night_shifts',
    SETTINGS: 'taxi_settings',
}

// Default settings
const DEFAULT_SETTINGS = {
    driverSharePercent: 60,
    companySharePercent: 40,
}

// Generic CRUD operations
export const storage = {
    get: (key) => {
        try {
            const data = localStorage.getItem(key)
            return data ? JSON.parse(data) : null
        } catch (error) {
            console.error(`Error reading from localStorage: ${key}`, error)
            return null
        }
    },
    set: (key, data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data))
            return true
        } catch (error) {
            console.error(`Error writing to localStorage: ${key}`, error)
            return false
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key)
            return true
        } catch (error) {
            console.error(`Error removing from localStorage: ${key}`, error)
            return false
        }
    },
}

// Settings operations
export const settingsStorage = {
    get: () => storage.get(STORAGE_KEYS.SETTINGS) || DEFAULT_SETTINGS,
    save: (settings) => storage.set(STORAGE_KEYS.SETTINGS, settings),
}

// Driver operations
export const driverStorage = {
    getAll: () => storage.get(STORAGE_KEYS.DRIVERS) || [],
    getById: (id) => driverStorage.getAll().find(d => d.id === id),
    add: (driver) => {
        const drivers = driverStorage.getAll()
        const newDriver = { ...driver, id: Date.now().toString(), createdAt: new Date().toISOString().split('T')[0] }
        drivers.push(newDriver)
        storage.set(STORAGE_KEYS.DRIVERS, drivers)
        return newDriver
    },
    update: (id, updates) => {
        const drivers = driverStorage.getAll()
        const index = drivers.findIndex(d => d.id === id)
        if (index !== -1) {
            drivers[index] = { ...drivers[index], ...updates }
            storage.set(STORAGE_KEYS.DRIVERS, drivers)
            return drivers[index]
        }
        return null
    },
    delete: (id) => {
        const drivers = driverStorage.getAll()
        storage.set(STORAGE_KEYS.DRIVERS, drivers.filter(d => d.id !== id))
        return true
    },
    seed: (data) => storage.set(STORAGE_KEYS.DRIVERS, data),
}

// Deposit operations
export const depositStorage = {
    getAll: () => storage.get(STORAGE_KEYS.DEPOSITS) || [],
    getByDriverId: (driverId) => depositStorage.getAll().find(d => d.driverId === driverId),
    update: (driverId, paidAmount) => {
        const deposits = depositStorage.getAll()
        const index = deposits.findIndex(d => d.driverId === driverId)
        if (index !== -1) {
            const deposit = deposits[index]
            deposit.paidAmount = paidAmount
            deposit.status = paidAmount >= deposit.requiredAmount ? 'paid' : paidAmount > 0 ? 'partial' : 'unpaid'
            deposit.lastPaymentDate = new Date().toISOString().split('T')[0]
            storage.set(STORAGE_KEYS.DEPOSITS, deposits)
            return deposit
        }
        return null
    },
    createForDriver: (driver) => {
        const deposits = depositStorage.getAll()
        const newDeposit = { id: Date.now().toString(), driverId: driver.id, driverName: driver.name, requiredAmount: 5000000, paidAmount: 0, status: 'unpaid', lastPaymentDate: null }
        deposits.push(newDeposit)
        storage.set(STORAGE_KEYS.DEPOSITS, deposits)
        return newDeposit
    },
    seed: (data) => storage.set(STORAGE_KEYS.DEPOSITS, data),
}

// Revenue operations (updated with bonus/penalty)
export const revenueStorage = {
    getAll: () => storage.get(STORAGE_KEYS.REVENUE) || [],
    getByVehicleCode: (vehicleCode) => revenueStorage.getAll().filter(r => r.vehicleCode === vehicleCode),
    getByMonth: (month) => revenueStorage.getAll().filter(r => r.month === month),
    add: (revenue) => {
        const revenues = revenueStorage.getAll()
        const existing = revenues.find(r => r.vehicleCode === revenue.vehicleCode && r.month === revenue.month)
        if (existing) {
            Object.assign(existing, revenue)
            storage.set(STORAGE_KEYS.REVENUE, revenues)
            return existing
        }
        const newRevenue = { ...revenue, id: Date.now().toString(), bonus: revenue.bonus || 0, penalty: revenue.penalty || 0 }
        revenues.push(newRevenue)
        storage.set(STORAGE_KEYS.REVENUE, revenues)
        return newRevenue
    },
    update: (id, updates) => {
        const revenues = revenueStorage.getAll()
        const index = revenues.findIndex(r => r.id === id)
        if (index !== -1) {
            revenues[index] = { ...revenues[index], ...updates }
            storage.set(STORAGE_KEYS.REVENUE, revenues)
            return revenues[index]
        }
        return null
    },
    delete: (id) => {
        storage.set(STORAGE_KEYS.REVENUE, revenueStorage.getAll().filter(r => r.id !== id))
        return true
    },
    getTotalByMonth: (month) => revenueStorage.getByMonth(month).reduce((sum, r) => sum + r.amount, 0),
    seed: (data) => storage.set(STORAGE_KEYS.REVENUE, data),
    // Calculate net amount with settings
    calculateNet: (revenue) => {
        const settings = settingsStorage.get()
        const base = (revenue.amount * settings.driverSharePercent) / 100
        return base + (revenue.bonus || 0) - (revenue.penalty || 0)
    },
}

// Night Shift operations
export const nightShiftStorage = {
    getAll: () => storage.get(STORAGE_KEYS.NIGHT_SHIFTS) || [],
    getByDate: (date) => nightShiftStorage.getAll().filter(s => s.date === date),
    getByMonth: (month) => nightShiftStorage.getAll().filter(s => s.date.startsWith(month)),
    getByDriver: (driverId) => nightShiftStorage.getAll().filter(s => s.driverId === driverId),
    add: (shift) => {
        const shifts = nightShiftStorage.getAll()
        // Check if already assigned
        const existing = shifts.find(s => s.date === shift.date && s.driverId === shift.driverId)
        if (existing) return existing
        const newShift = { ...shift, id: Date.now().toString(), status: 'scheduled' }
        shifts.push(newShift)
        storage.set(STORAGE_KEYS.NIGHT_SHIFTS, shifts)
        return newShift
    },
    remove: (date, driverId) => {
        const shifts = nightShiftStorage.getAll()
        storage.set(STORAGE_KEYS.NIGHT_SHIFTS, shifts.filter(s => !(s.date === date && s.driverId === driverId)))
        return true
    },
    updateStatus: (id, status) => {
        const shifts = nightShiftStorage.getAll()
        const shift = shifts.find(s => s.id === id)
        if (shift) {
            shift.status = status
            storage.set(STORAGE_KEYS.NIGHT_SHIFTS, shifts)
            return shift
        }
        return null
    },
    countByDriverMonth: (driverId, month) => nightShiftStorage.getByMonth(month).filter(s => s.driverId === driverId).length,
}

// Initialize with mock data if empty
export const initializeData = (mockDrivers, mockDeposits, mockRevenue) => {
    if (driverStorage.getAll().length === 0) driverStorage.seed(mockDrivers)
    if (depositStorage.getAll().length === 0) depositStorage.seed(mockDeposits)
    if (revenueStorage.getAll().length === 0) revenueStorage.seed(mockRevenue)
}
