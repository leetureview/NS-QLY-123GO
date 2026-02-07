import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Moon, User, Check, X } from 'lucide-react'
import { nightShiftStorage, driverStorage, initializeData } from '../../utils/storage'
import { mockDrivers, mockDeposits, mockRevenue } from '../../data/mockData'

export default function NightShiftCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [shifts, setShifts] = useState([])
    const [drivers, setDrivers] = useState([])
    const [selectedDate, setSelectedDate] = useState(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        initializeData(mockDrivers, mockDeposits, mockRevenue)
        setDrivers(driverStorage.getAll())
        loadShifts()
    }, [])

    const loadShifts = () => setShifts(nightShiftStorage.getAll())

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const monthStr = `${year}-${String(month + 1).padStart(2, '0')}`

    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const monthNames = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
    const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1))
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1))

    const getDateStr = (day) => `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const getShiftsForDay = (day) => shifts.filter(s => s.date === getDateStr(day))

    const handleDayClick = (day) => {
        setSelectedDate(getDateStr(day))
        setShowModal(true)
    }

    const toggleDriver = (driverId, driverName) => {
        const existing = shifts.find(s => s.date === selectedDate && s.driverId === driverId)
        if (existing) {
            nightShiftStorage.remove(selectedDate, driverId)
        } else {
            nightShiftStorage.add({ date: selectedDate, driverId, driverName })
        }
        loadShifts()
    }

    const isDriverAssigned = (driverId) => shifts.some(s => s.date === selectedDate && s.driverId === driverId)

    const calendarDays = []
    for (let i = 0; i < firstDayOfMonth; i++) calendarDays.push(null)
    for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i)

    return (
        <div className="animate-fade-in">
            <div className="mb-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <Moon className="text-indigo-500" />Lịch trực đêm
                </h1>
                <p className="text-gray-500 mt-1">Phân công ca trực đêm cho tài xế</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-4 lg:p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-xl"><ChevronLeft size={24} /></button>
                    <h2 className="text-xl font-bold text-gray-900">{monthNames[month]} {year}</h2>
                    <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-xl"><ChevronRight size={24} /></button>
                </div>

                {/* Day names */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map(d => <div key={d} className="text-center text-sm font-semibold text-gray-500 py-2">{d}</div>)}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, idx) => {
                        if (!day) return <div key={idx} className="aspect-square" />
                        const dayShifts = getShiftsForDay(day)
                        const isToday = new Date().toDateString() === new Date(year, month, day).toDateString()
                        return (
                            <div
                                key={idx}
                                onClick={() => handleDayClick(day)}
                                className={`aspect-square p-1 rounded-xl cursor-pointer transition-all hover:bg-indigo-50 border-2 ${isToday ? 'border-indigo-500' : 'border-transparent'} ${dayShifts.length > 0 ? 'bg-indigo-50' : 'bg-gray-50'}`}
                            >
                                <div className="text-sm font-medium text-gray-700 mb-1">{day}</div>
                                <div className="space-y-0.5 overflow-hidden max-h-16">
                                    {dayShifts.slice(0, 2).map(s => (
                                        <div key={s.id} className="text-xs bg-indigo-500 text-white px-1 py-0.5 rounded truncate">{s.driverName.split(' ').pop()}</div>
                                    ))}
                                    {dayShifts.length > 2 && <div className="text-xs text-indigo-600 font-medium">+{dayShifts.length - 2}</div>}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Summary */}
                <div className="mt-6 pt-4 border-t">
                    <h3 className="font-semibold text-gray-900 mb-3">Tổng kết tháng</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {drivers.map(d => {
                            const count = nightShiftStorage.countByDriverMonth(d.id, monthStr)
                            return (
                                <div key={d.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-semibold">{d.name.charAt(0)}</div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">{d.name}</p>
                                        <p className="text-xs text-gray-500">{count} ca</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 max-w-md w-full animate-slide-in max-h-[80vh] overflow-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Phân ca ngày {selectedDate}</h3>
                            <button onClick={() => setShowModal(false)} className="p-1 hover:bg-gray-100 rounded-lg"><X size={20} /></button>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Chọn tài xế trực đêm</p>
                        <div className="space-y-2">
                            {drivers.map(d => {
                                const assigned = isDriverAssigned(d.id)
                                return (
                                    <button
                                        key={d.id}
                                        onClick={() => toggleDriver(d.id, d.name)}
                                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${assigned ? 'bg-indigo-500 text-white' : 'bg-gray-50 hover:bg-gray-100'}`}
                                    >
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${assigned ? 'bg-white/20' : 'bg-indigo-100 text-indigo-600'}`}>
                                            {d.avatar ? <img src={d.avatar} className="w-full h-full rounded-full object-cover" /> : d.name.charAt(0)}
                                        </div>
                                        <div className="flex-1 text-left">
                                            <p className="font-medium">{d.name}</p>
                                            <p className={`text-sm ${assigned ? 'text-indigo-200' : 'text-gray-500'}`}>{d.vehicleCode}</p>
                                        </div>
                                        {assigned && <Check size={20} />}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
