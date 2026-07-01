import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, TrendingUp, Wallet, Car, Plus, ArrowUpRight, ArrowDownRight, Loader2, AlertTriangle, CheckCircle, Award, Trophy, Crown } from 'lucide-react'
import { driverStorage, depositStorage, revenueStorage, expenseStorage, advanceStorage, vehicleStorage } from '../utils/firebaseStorage'

export default function Dashboard() {
    const [stats, setStats] = useState({
        totalDrivers: 0,
        monthlyRevenue: 0,
        totalDeposits: 0,
        paidDeposits: 0,
        totalCash: 0,
    })
    const [recentDrivers, setRecentDrivers] = useState([])
    const [loading, setLoading] = useState(true)
    const [chartData, setChartData] = useState([])
    const [depositRate, setDepositRate] = useState({ percent: 0, paid: 0, required: 0 })
    const [expiryAlerts, setExpiryAlerts] = useState([])
    const [leaderboard, setLeaderboard] = useState([])
    const [performanceList, setPerformanceList] = useState([])
    const [fleetAverage, setFleetAverage] = useState(0)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        setLoading(true)
        try {
            const [drivers, deposits, revenues, expenses, advances, vehiclesList] = await Promise.all([
                driverStorage.getAll(),
                depositStorage.getAll(),
                revenueStorage.getAll(),
                expenseStorage.getAll(),
                advanceStorage.getAll(),
                vehicleStorage.getAll()
            ])

            const currentMonth = new Date().toISOString().slice(0, 7)
            const monthlyRevenue = revenues
                .filter(r => r.month === currentMonth)
                .reduce((sum, r) => sum + (Number(r.amount) || 0) + (Number(r.airportSubsidy) || 0), 0)

            const totalRevenue = revenues.reduce((sum, r) => sum + (Number(r.amount) || 0), 0)
            const totalAirportSubsidy = revenues.reduce((sum, r) => sum + (Number(r.airportSubsidy) || 0), 0)
            const totalDeposits = deposits.reduce((sum, d) => sum + (Number(d.paidAmount) || 0), 0)
            const totalExpenses = expenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0)
            const totalAdvances = advances.reduce((sum, a) => sum + (Number(a.amount) || 0), 0)

            // Cash = (Total Revenue [without subsidy] + Total Deposits) - Total Advances - Total Expenses - Total Airport Subsidy
            const totalCash = (totalRevenue + totalDeposits) - totalAdvances - totalExpenses - totalAirportSubsidy

            setStats({
                totalDrivers: drivers.length,
                monthlyRevenue,
                totalDeposits,
                paidDeposits: deposits.filter(d => d.status === 'paid').length,
                totalCash,
            })

            setRecentDrivers(drivers.slice(-5).reverse())

            // Calculate past 6 months revenues
            const getPast6Months = () => {
                const months = []
                const now = new Date()
                for (let i = 5; i >= 0; i--) {
                    const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
                    months.push(date.toISOString().slice(0, 7))
                }
                return months
            }

            const last6Months = getPast6Months()
            const monthlyRevenues = last6Months.map(month => {
                const amount = revenues
                    .filter(r => r.month === month)
                    .reduce((sum, r) => sum + (Number(r.amount) || 0) + (Number(r.airportSubsidy) || 0), 0)
                return { month, amount }
            })
            setChartData(monthlyRevenues)

            // Calculate deposit collection rate
            const totalReq = deposits.reduce((sum, d) => sum + (Number(d.requiredAmount) || 0), 0)
            const totalPaid = deposits.reduce((sum, d) => sum + (Number(d.paidAmount) || 0), 0)
            const percent = totalReq > 0 ? Math.round((totalPaid / totalReq) * 100) : 0
            setDepositRate({ percent, paid: totalPaid, required: totalReq })

            // Calculate document expiry alerts from vehicles collection
            const alerts = []
            const today = new Date()
            today.setHours(0, 0, 0, 0)

            vehiclesList.forEach(v => {
                const driver = drivers.find(d => d.vehicleCode?.toUpperCase() === v.vehicleCode?.toUpperCase())
                const driverName = driver ? driver.name : 'Chưa giao xe'
                const driverId = driver ? driver.id : ''

                const checkDocument = (dateStr, docName) => {
                    if (!dateStr) return
                    const expiry = new Date(dateStr)
                    expiry.setHours(0, 0, 0, 0)
                    const diffDays = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24))
                    if (diffDays <= 30) {
                        alerts.push({
                            driverId: driverId,
                            driverName: driverName,
                            vehicleCode: v.vehicleCode,
                            licensePlate: v.licensePlate,
                            docName: docName,
                            expiryDate: dateStr,
                            daysLeft: diffDays
                        })
                    }
                }
                checkDocument(v.registryExpiry, 'Đăng kiểm')
                checkDocument(v.roadPermitExpiry, 'Giấy đi đường')
            })

            alerts.sort((a, b) => a.daysLeft - b.daysLeft)
            setExpiryAlerts(alerts.slice(0, 5))

            // Calculate Driver Performance & Leaderboard
            const currentMonthRevenues = revenues.filter(r => r.month === currentMonth)

            // Group by driverName
            const driverRevenueMap = {}
            currentMonthRevenues.forEach(r => {
                const name = r.driverName || 'Không rõ'
                if (!driverRevenueMap[name]) {
                    driverRevenueMap[name] = {
                        driverName: name,
                        totalRevenue: 0,
                        uniqueDays: new Set()
                    }
                }
                driverRevenueMap[name].totalRevenue += Number(r.amount) || 0
                if (r.date) {
                    driverRevenueMap[name].uniqueDays.add(r.date)
                }
            })

            // Map to driver stats array
            const driverStats = Object.values(driverRevenueMap).map(d => {
                const days = d.uniqueDays.size
                return {
                    driverName: d.driverName,
                    totalRevenue: d.totalRevenue,
                    activeDays: days,
                    avgPerDay: days > 0 ? Math.round(d.totalRevenue / days) : 0
                }
            })

            // Calculate Fleet Stats
            const totalFleetRevenue = driverStats.reduce((sum, d) => sum + d.totalRevenue, 0)
            const totalFleetActiveDays = driverStats.reduce((sum, d) => sum + d.activeDays, 0)
            const calculatedFleetAverage = totalFleetActiveDays > 0 ? Math.round(totalFleetRevenue / totalFleetActiveDays) : 0
            setFleetAverage(calculatedFleetAverage)

            // Calculate Performance Diff %
            const performanceWithDiff = driverStats.map(d => {
                const diff = calculatedFleetAverage > 0 ? ((d.avgPerDay - calculatedFleetAverage) / calculatedFleetAverage) * 100 : 0
                const matchedDriver = drivers.find(drv => drv.name?.toUpperCase() === d.driverName.toUpperCase())
                return {
                    ...d,
                    performanceDiff: Math.round(diff * 10) / 10,
                    driverId: matchedDriver ? matchedDriver.id : null,
                    avatar: matchedDriver ? matchedDriver.avatar : null
                }
            })

            // Leaderboard: Top 3 by total revenue
            const sortedLeaderboard = [...performanceWithDiff]
                .sort((a, b) => b.totalRevenue - a.totalRevenue)
                .slice(0, 3)
            setLeaderboard(sortedLeaderboard)

            // Performance list: sort by average revenue per day descending
            const sortedPerformance = [...performanceWithDiff].sort((a, b) => b.avgPerDay - a.avgPerDay)
            setPerformanceList(sortedPerformance)
        } catch (error) {
            console.error('Error loading dashboard data:', error)
        }
        setLoading(false)
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount)
    }

    const statCards = [
        {
            title: 'Tổng tiền mặt đang có',
            value: formatCurrency(stats.totalCash),
            icon: Wallet,
            color: 'bg-yellow-500',
            change: 'Khớp quỹ',
            changeType: 'neutral',
        },
        {
            title: 'Doanh thu tháng (gồm sân bay)',
            value: formatCurrency(stats.monthlyRevenue),
            icon: TrendingUp,
            color: 'bg-taxi-500',
            change: 'tháng này',
            changeType: 'neutral',
        },
        {
            title: 'Tiền cọc đã thu',
            value: formatCurrency(stats.totalDeposits),
            icon: Wallet,
            color: 'bg-green-500',
            change: `${stats.paidDeposits}/${stats.totalDrivers}`,
            changeType: 'neutral',
        },
        {
            title: 'Xe đang hoạt động',
            value: stats.totalDrivers,
            icon: Car,
            color: 'bg-purple-500',
            change: '100%',
            changeType: 'up',
        },
    ]

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-taxi-500" />
            </div>
        )
    }

    return (
        <div className="animate-fade-in">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 mt-1">Tổng quan hoạt động công ty taxi</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
                {statCards.map((card, index) => {
                    const Icon = card.icon
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`${card.color} p-3 rounded-xl`}>
                                    <Icon className="text-white" size={24} />
                                </div>
                                <div className={`flex items-center gap-1 text-sm ${card.changeType === 'up' ? 'text-green-600' :
                                    card.changeType === 'down' ? 'text-red-600' : 'text-gray-500'
                                    }`}>
                                    {card.changeType === 'up' && <ArrowUpRight size={16} />}
                                    {card.changeType === 'down' && <ArrowDownRight size={16} />}
                                    <span>{card.change}</span>
                                </div>
                            </div>
                            <h3 className="text-gray-500 text-sm font-medium">{card.title}</h3>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
                        </div>
                    )
                })}
            </div>

            {/* Visual Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
                {/* 6-Month Revenue Bar Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Doanh thu hệ thống 6 tháng qua</h2>
                            <p className="text-sm text-gray-400">Tổng hợp doanh thu từ tất cả các đầu xe</p>
                        </div>
                    </div>
                    
                    {/* SVG Bar Chart */}
                    <div className="w-full pt-2">
                        <svg viewBox="0 0 500 180" className="w-full h-44 overflow-visible">
                            {/* Grids and Y labels */}
                            {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
                                const maxVal = chartData.length > 0 ? Math.max(...chartData.map(d => d.amount), 20000000) : 20000000;
                                const val = Math.round(maxVal * ratio);
                                const y = 20 + 120 * (1 - ratio);
                                return (
                                    <g key={index} className="text-[10px] fill-gray-400">
                                        <line 
                                            x1="50" 
                                            y1={y} 
                                            x2="480" 
                                            y2={y} 
                                            stroke="#f1f5f9" 
                                            strokeWidth="1.5" 
                                        />
                                        <text x="40" y={y + 3} textAnchor="end">
                                            {val === 0 ? '0' : `${Math.round(val / 1000000)}Tr`}
                                        </text>
                                    </g>
                                );
                            })}

                            {/* Bars */}
                            {chartData.map((d, index) => {
                                const maxVal = chartData.length > 0 ? Math.max(...chartData.map(item => item.amount), 20000000) : 20000000;
                                const barWidth = 32;
                                const colWidth = (480 - 50) / 6;
                                const x = 50 + colWidth * index + (colWidth - barWidth) / 2;
                                const height = maxVal > 0 ? (d.amount / maxVal) * 120 : 0;
                                const y = 20 + 120 - height;
                                const formattedMonth = () => {
                                    const [year, month] = d.month.split('-');
                                    return `T${parseInt(month)}`;
                                };

                                return (
                                    <g key={d.month} className="group">
                                        <defs>
                                            <linearGradient id={`blue-grad-${d.month}`} x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#f59e0b" />
                                                <stop offset="100%" stopColor="#fde68a" stopOpacity="0.1" />
                                            </linearGradient>
                                        </defs>

                                        {/* Bar */}
                                        <rect
                                            x={x}
                                            y={y}
                                            width={barWidth}
                                            height={Math.max(1, height)}
                                            rx="6"
                                            fill={`url(#blue-grad-${d.month})`}
                                            className="transition-all duration-300 hover:fill-taxi-600 cursor-pointer"
                                        />

                                        {/* Tooltip value */}
                                        <text
                                            x={x + barWidth / 2}
                                            y={y - 6}
                                            textAnchor="middle"
                                            className="text-[10px] font-bold fill-taxi-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        >
                                            {formatCurrency(d.amount).replace(',00 ₫', '').replace(' ₫', '')}
                                        </text>

                                        {/* Month Label */}
                                        <text
                                            x={x + barWidth / 2}
                                            y="156"
                                            textAnchor="middle"
                                            className="text-xs fill-gray-500 font-medium"
                                        >
                                            {formattedMonth()}
                                        </text>
                                    </g>
                                );
                            })}
                            
                            {/* Baseline */}
                            <line x1="50" y1="140" x2="480" y2="140" stroke="#cbd5e1" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>

                {/* Deposit Collection Progress Circular Gauge */}
                <div className="bg-white rounded-2xl p-6 shadow-sm lg:col-span-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Tỷ lệ thu hồi tiền cọc</h2>
                        <p className="text-sm text-gray-400">Tiến độ đóng tiền thế chân của các tài xế</p>
                    </div>

                    <div className="relative flex items-center justify-center my-6">
                        {/* Gauge */}
                        <svg className="w-32 h-32 transform -rotate-90">
                            {/* Background Circle */}
                            <circle
                                cx="64"
                                cy="64"
                                r="52"
                                stroke="#f1f5f9"
                                strokeWidth="10"
                                fill="transparent"
                            />
                            {/* Foreground Progress Circle */}
                            <circle
                                cx="64"
                                cy="64"
                                r="52"
                                stroke="#a855f7" // Purple-500
                                strokeWidth="10"
                                fill="transparent"
                                strokeDasharray={2 * Math.PI * 52}
                                strokeDashoffset={2 * Math.PI * 52 * (1 - depositRate.percent / 100)}
                                strokeLinecap="round"
                                className="transition-all duration-1000 ease-out"
                            />
                        </svg>
                        {/* Percentage Text inside */}
                        <div className="absolute flex flex-col items-center justify-center text-center">
                            <span className="text-2xl font-bold text-gray-800">{depositRate.percent}%</span>
                            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Đã thu</span>
                        </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-gray-50 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Đã đóng:</span>
                            <span className="font-semibold text-emerald-600">{formatCurrency(depositRate.paid)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Tổng yêu cầu:</span>
                            <span className="font-medium text-gray-700">{formatCurrency(depositRate.required)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Thao tác nhanh</h2>
                        <div className="grid grid-cols-1 gap-3">
                            <Link
                                to="/drivers/new"
                                className="flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-r from-taxi-500 to-taxi-600 text-white hover:from-taxi-600 hover:to-taxi-700 transition-all duration-300 group"
                            >
                                <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                                    <Plus size={18} />
                                </div>
                                <span className="font-medium text-sm">Thêm tài xế mới</span>
                            </Link>
                            <Link
                                to="/revenue/new"
                                className="flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group"
                            >
                                <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                                    <TrendingUp size={18} />
                                </div>
                                <span className="font-medium text-sm">Nhập doanh thu ca</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Recent Drivers */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Tài xế mới</h2>
                        <Link to="/drivers" className="text-taxi-600 text-sm font-medium hover:underline">
                            Xem tất cả
                        </Link>
                    </div>
                    <div className="space-y-3">
                        {recentDrivers.map((driver) => (
                            <div
                                key={driver.id}
                                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                <div className="w-10 h-10 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold">
                                    {driver.name?.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 truncate">{driver.name}</p>
                                    <p className="text-sm text-gray-500">{driver.licensePlate}</p>
                                </div>
                                <span className="text-xs text-gray-400 font-mono">{driver.vehicleCode}</span>
                            </div>
                        ))}
                        {recentDrivers.length === 0 && (
                            <p className="text-gray-500 text-center py-4">Chưa có tài xế nào</p>
                        )}
                    </div>
                </div>

                {/* Document Expiry Alerts */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Hạn đăng kiểm & Giấy đi đường</h2>
                        <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full animate-pulse">
                            {expiryAlerts.length} cảnh báo
                        </span>
                    </div>
                    <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                        {expiryAlerts.map((alert, index) => {
                            const isExpired = alert.daysLeft < 0
                            return (
                                <Link
                                    key={index}
                                    to={alert.driverId ? `/drivers/${alert.driverId}` : '/vehicles'}
                                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${isExpired ? 'bg-red-50/40 border-red-100 hover:bg-red-50/70' : 'bg-amber-50/40 border-amber-100 hover:bg-amber-50/70'}`}
                                >
                                    <div className={`p-2 rounded-lg flex-shrink-0 mt-0.5 ${isExpired ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>
                                        <AlertTriangle size={16} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-sm text-gray-800 truncate">{alert.vehicleCode} ({alert.driverName})</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Hạn <strong className={isExpired ? 'text-red-600' : 'text-amber-600'}>{alert.docName}</strong>: {isExpired ? `Đã quá hạn ${Math.abs(alert.daysLeft)} ngày` : `Sắp hết hạn (Còn ${alert.daysLeft} ngày)`}
                                        </p>
                                    </div>
                                </Link>
                            )
                        })}
                        {expiryAlerts.length === 0 && (
                            <div className="flex flex-col items-center justify-center text-center py-8 text-gray-400">
                                <CheckCircle size={32} className="text-emerald-500 mb-2" />
                                <p className="text-sm font-medium text-gray-500">Giấy tờ xe an toàn</p>
                                <p className="text-xs mt-1">Không có xe nào quá hạn hoặc sắp hết hạn</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bảng vinh danh & Phân tích hiệu suất */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* Phân tích hiệu suất tài xế (Colspan 2) */}
                <div className="bg-white rounded-2xl p-6 shadow-sm lg:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <TrendingUp className="text-blue-500" size={20} />
                                Phân tích hiệu suất tài xế trong tháng
                            </h2>
                            <p className="text-xs text-gray-400 mt-0.5">So sánh doanh thu TB/ngày của từng tài xế với TB cả đội</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 text-right">
                            <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider block">TB Cả Đội Xe</span>
                            <span className="text-sm font-extrabold text-blue-700">{formatCurrency(fleetAverage)}/ngày</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase border-b border-gray-100">
                                <tr>
                                    <th className="px-4 py-3">Tài xế</th>
                                    <th className="px-4 py-3 text-right">Doanh thu tháng</th>
                                    <th className="px-4 py-3 text-center">Số ngày chạy</th>
                                    <th className="px-4 py-3 text-right">TB / ngày</th>
                                    <th className="px-4 py-3 text-right">Hiệu suất</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {performanceList.map((perf, index) => {
                                    const isAboveFleet = perf.performanceDiff >= 0
                                    return (
                                        <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    {perf.avatar ? (
                                                        <img src={perf.avatar} alt={perf.driverName} className="w-8 h-8 rounded-full object-cover" />
                                                    ) : (
                                                        <div className="w-8 h-8 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold text-xs">
                                                            {perf.driverName?.charAt(0)}
                                                        </div>
                                                    )}
                                                    {perf.driverId ? (
                                                        <Link to={`/drivers/${perf.driverId}`} className="font-medium text-gray-900 hover:text-taxi-600 hover:underline">
                                                            {perf.driverName}
                                                        </Link>
                                                    ) : (
                                                        <span className="font-medium text-gray-900">{perf.driverName}</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-right font-medium text-gray-700">
                                                {formatCurrency(perf.totalRevenue)}
                                            </td>
                                            <td className="px-4 py-3 text-center font-medium text-gray-500">
                                                {perf.activeDays} ngày
                                            </td>
                                            <td className="px-4 py-3 text-right font-semibold text-gray-800">
                                                {formatCurrency(perf.avgPerDay)}
                                            </td>
                                            <td className="px-4 py-3 text-right">
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${isAboveFleet ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                                                    {isAboveFleet ? '+' : ''}{perf.performanceDiff}%
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })}
                                {performanceList.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="text-center py-8 text-gray-400">
                                            Chưa có dữ liệu hiệu suất của tháng này
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bảng vinh danh Top 3 (Colspan 1) */}
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                            <Award className="text-amber-500" size={22} />
                            Vinh danh Doanh thu Tháng
                        </h2>

                        <div className="space-y-4">
                            {leaderboard.map((item, index) => {
                                const rankColors = [
                                    { bg: 'bg-amber-50 border-amber-200', text: 'text-amber-700', badge: 'bg-amber-500 text-white', icon: Crown, iconColor: 'text-amber-500' },
                                    { bg: 'bg-slate-50 border-slate-200', text: 'text-slate-700', badge: 'bg-slate-400 text-white', icon: Trophy, iconColor: 'text-slate-400' },
                                    { bg: 'bg-orange-50 border-orange-200', text: 'text-orange-700', badge: 'bg-orange-600/70 text-white', icon: Trophy, iconColor: 'text-orange-600/70' }
                                ]
                                const cfg = rankColors[index] || rankColors[2]
                                const RankIcon = cfg.icon

                                return (
                                    <div key={index} className={`flex items-center gap-3 p-3.5 rounded-2xl border ${cfg.bg} transition-all duration-300 hover:-translate-y-0.5`}>
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${cfg.badge} font-bold text-sm shadow-sm`}>
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-1.5">
                                                <span className={`font-extrabold text-sm ${cfg.text} truncate`}>{item.driverName}</span>
                                                <RankIcon size={14} className={cfg.iconColor} />
                                            </div>
                                            <p className="text-xs text-gray-500 font-semibold mt-0.5">{formatCurrency(item.totalRevenue)}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Số ca</span>
                                            <span className="text-xs font-bold text-gray-700">{item.activeDays} ca chạy</span>
                                        </div>
                                    </div>
                                )
                            })}
                            {leaderboard.length === 0 && (
                                <div className="text-center py-12 text-gray-400 flex flex-col items-center">
                                    <Trophy size={40} className="text-gray-300 mb-2" />
                                    <p className="text-sm font-medium">Chưa có bảng vinh danh</p>
                                    <p className="text-xs mt-1">Hãy nhập doanh thu tháng này để hiển thị xếp hạng.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
