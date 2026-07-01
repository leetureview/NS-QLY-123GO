import { useEffect, useState } from 'react'
import { FileText, Calendar, Loader2, Printer } from 'lucide-react'
import { driverStorage, revenueStorage, settingsStorage, expenseStorage } from '../utils/firebaseStorage'

export default function Reports() {
    const [data, setData] = useState([])
    const [selectedMonth, setSelectedMonth] = useState('')
    const [settings, setSettings] = useState({ driverSharePercent: 60 })
    const [loading, setLoading] = useState(true)
    const [allData, setAllData] = useState({ drivers: [], revenues: [], expenses: [] })

    useEffect(() => {
        loadInitialData()
    }, [])

    useEffect(() => {
        if (selectedMonth && allData.drivers.length > 0) {
            generateReport()
        }
    }, [selectedMonth, allData])

    const loadInitialData = async () => {
        setLoading(true)
        try {
            const [settingsData, drivers, revenues, expenses] = await Promise.all([
                settingsStorage.get(),
                driverStorage.getAll(),
                revenueStorage.getAll(),
                expenseStorage.getAll()
            ])
            setSettings(settingsData)
            setAllData({ drivers, revenues, expenses })

            // Set default month
            const months = [...new Set(revenues.map(r => r.month))].sort().reverse()
            const currentMonth = new Date().toISOString().slice(0, 7)
            setSelectedMonth(months[0] || currentMonth)
        } catch (error) {
            console.error('Error loading data:', error)
        }
        setLoading(false)
    }

    const generateReport = async () => {
        const { drivers, revenues, expenses } = allData
        const monthRevenues = revenues.filter(r => r.month === selectedMonth)
        const monthExpenses = expenses.filter(e => e.date && e.date.startsWith(selectedMonth))

        const reportData = await Promise.all(drivers.map(async driver => {
            const vehicleRevenues = monthRevenues.filter(r => r.vehicleCode === driver.vehicleCode)

            const amount = vehicleRevenues.reduce((sum, r) => sum + (Number(r.amount) || 0), 0)
            const bonus = vehicleRevenues.reduce((sum, r) => sum + (Number(r.bonus) || 0), 0)
            const penalty = vehicleRevenues.reduce((sum, r) => sum + (Number(r.penalty) || 0), 0)
            const airportSubsidy = vehicleRevenues.reduce((sum, r) => sum + (Number(r.airportSubsidy) || 0), 0)

            const vehicleExpenses = monthExpenses
                .filter(e => e.vehicleCode === driver.vehicleCode)
                .reduce((sum, e) => sum + (Number(e.amount) || 0), 0)

            const totalAmount = amount + airportSubsidy
            const sharePercent = settings.sharesByVehicleType?.[driver.vehicleType] ?? settings.driverSharePercent ?? 60
            const baseShare = (totalAmount * sharePercent) / 100
            const netSalary = baseShare + bonus - penalty
            const vehicleProfit = totalAmount - netSalary - vehicleExpenses

            return {
                id: driver.id,
                vehicleCode: driver.vehicleCode,
                driverName: driver.name,
                avatar: driver.avatar,
                revenue: amount,
                bonus,
                penalty,
                airportSubsidy,
                vehicleExpenses,
                netSalary,
                vehicleProfit,
            }
        }))

        setData(reportData)
    }

    const formatCurrency = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val)
    const formatMonth = (m) => `Tháng ${parseInt(m.split('-')[1])}/${m.split('-')[0]}`

    const totals = {
        revenue: data.reduce((s, d) => s + d.revenue, 0),
        netSalary: data.reduce((s, d) => s + d.netSalary, 0),
        vehicleExpenses: data.reduce((s, d) => s + d.vehicleExpenses, 0),
        vehicleProfit: data.reduce((s, d) => s + d.vehicleProfit, 0),
    }

    const months = []
    for (let i = 0; i < 6; i++) {
        const d = new Date()
        d.setMonth(d.getMonth() - i)
        months.push(d.toISOString().slice(0, 7))
    }
    const revenueMonths = allData.revenues.map(r => r.month)
    const uniqueMonths = [...new Set([...months, ...revenueMonths])].sort().reverse()

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-taxi-500" />
            </div>
        )
    }

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="animate-fade-in print:bg-white print:p-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <FileText className="text-taxi-500" />Báo cáo tổng kết
                    </h1>
                    <p className="text-gray-500 mt-1">Thống kê chi tiết {selectedMonth ? formatMonth(selectedMonth) : ''}</p>
                </div>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors print:hidden shadow-sm"
                >
                    <Printer size={18} /><span>In báo cáo</span>
                </button>
            </div>

            {/* Month selector */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-6 print:hidden">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Calendar size={16} />Chọn tháng báo cáo
                </label>
                <div className="flex flex-wrap gap-2">
                    {uniqueMonths.map(m => (
                        <button key={m} onClick={() => setSelectedMonth(m)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedMonth === m ? 'bg-taxi-500 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                            {formatMonth(m)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Summary cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Tổng doanh thu</p>
                    <p className="text-xl font-bold text-gray-900">{formatCurrency(totals.revenue)}</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-sm text-blue-600">Tổng lợi nhuận xe</p>
                    <p className="text-xl font-bold text-blue-700">{formatCurrency(totals.vehicleProfit)}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <p className="text-sm text-green-600">Tổng lương thực trả</p>
                    <p className="text-xl font-bold text-green-700">{formatCurrency(totals.netSalary)}</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <p className="text-sm text-red-600">Tổng chi phí xe</p>
                    <p className="text-xl font-bold text-red-700">{formatCurrency(totals.vehicleExpenses)}</p>
                </div>
            </div>

            {/* Report table */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden print:shadow-none print:rounded-none">
                <div className="p-4 border-b bg-gray-50 print:bg-transparent print:border-none print:px-0">
                    <h2 className="font-semibold text-gray-900">Chi tiết {selectedMonth ? formatMonth(selectedMonth) : ''}</h2>
                </div>
                <div className="overflow-x-auto print:overflow-visible">
                    <table className="w-full print:border print:border-gray-200">
                        <thead className="bg-gray-50 border-b print:bg-gray-100">
                            <tr>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">Mã xe</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase">Tài xế</th>
                                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">Doanh thu</th>
                                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">Thưởng/Phạt</th>
                                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">Bù sân bay</th>
                                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">Lương thực trả</th>
                                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">Chi phí xe</th>
                                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase">Lợi nhuận xe</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {data.map(row => (
                                <tr key={row.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <span className="inline-flex px-2 py-1 bg-blue-50 text-blue-700 rounded-lg font-mono text-sm">{row.vehicleCode}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            {row.avatar ? (
                                                <img src={row.avatar} className="w-8 h-8 rounded-full object-cover" />
                                            ) : (
                                                <div className="w-8 h-8 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center text-sm font-semibold">{row.driverName?.charAt(0)}</div>
                                            )}
                                            <span className="font-medium">{row.driverName}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-right font-mono">{formatCurrency(row.revenue)}</td>
                                    <td className="px-4 py-3 text-right">
                                        {row.bonus > 0 && <span className="text-green-600 text-sm">+{formatCurrency(row.bonus)}</span>}
                                        {row.bonus > 0 && row.penalty > 0 && <span className="text-gray-400 mx-1">/</span>}
                                        {row.penalty > 0 && <span className="text-red-600 text-sm">-{formatCurrency(row.penalty)}</span>}
                                        {!row.bonus && !row.penalty && <span className="text-gray-400">-</span>}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        {row.airportSubsidy > 0 ? <span className="text-orange-500 font-medium">+{formatCurrency(row.airportSubsidy)}</span> : <span className="text-gray-400">-</span>}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <span className="font-bold text-lg text-taxi-600">{formatCurrency(row.netSalary)}</span>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        {row.vehicleExpenses > 0 ? (
                                            <span className="text-red-600 font-medium">-{formatCurrency(row.vehicleExpenses)}</span>
                                        ) : (
                                            <span className="text-gray-400">-</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <span className="font-bold text-lg text-blue-600">{formatCurrency(row.vehicleProfit)}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-gray-50 border-t-2">
                            <tr className="font-bold">
                                <td className="px-4 py-3" colSpan={2}>TỔNG CỘNG</td>
                                <td className="px-4 py-3 text-right">{formatCurrency(totals.revenue)}</td>
                                <td className="px-4 py-3"></td>
                                <td className="px-4 py-3"></td>
                                <td className="px-4 py-3 text-right text-green-600">{formatCurrency(totals.netSalary)}</td>
                                <td className="px-4 py-3 text-right text-red-600">{totals.vehicleExpenses > 0 ? `-${formatCurrency(totals.vehicleExpenses)}` : '-'}</td>
                                <td className="px-4 py-3 text-right text-blue-600 text-xl">{formatCurrency(totals.vehicleProfit)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}
