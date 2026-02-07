import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, TrendingUp, Wallet, Car, Plus, ArrowUpRight, ArrowDownRight, Loader2 } from 'lucide-react'
import { driverStorage, depositStorage, revenueStorage } from '../utils/firebaseStorage'

export default function Dashboard() {
    const [stats, setStats] = useState({
        totalDrivers: 0,
        monthlyRevenue: 0,
        totalDeposits: 0,
        paidDeposits: 0,
    })
    const [recentDrivers, setRecentDrivers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        setLoading(true)
        try {
            const drivers = await driverStorage.getAll()
            const deposits = await depositStorage.getAll()
            const revenues = await revenueStorage.getAll()
            const currentMonth = new Date().toISOString().slice(0, 7)
            const monthlyRevenue = revenues
                .filter(r => r.month === currentMonth)
                .reduce((sum, r) => sum + (r.amount || 0), 0)

            setStats({
                totalDrivers: drivers.length,
                monthlyRevenue,
                totalDeposits: deposits.reduce((sum, d) => sum + (d.paidAmount || 0), 0),
                paidDeposits: deposits.filter(d => d.status === 'paid').length,
            })

            setRecentDrivers(drivers.slice(-5).reverse())
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
            title: 'Tổng tài xế',
            value: stats.totalDrivers,
            icon: Users,
            color: 'bg-blue-500',
            change: '+2',
            changeType: 'up',
        },
        {
            title: 'Doanh thu tháng',
            value: formatCurrency(stats.monthlyRevenue),
            icon: TrendingUp,
            color: 'bg-taxi-500',
            change: '+12%',
            changeType: 'up',
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

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Thao tác nhanh</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            to="/drivers/new"
                            className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-taxi-500 to-taxi-600 text-white hover:from-taxi-600 hover:to-taxi-700 transition-all duration-300 group"
                        >
                            <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                                <Plus size={20} />
                            </div>
                            <span className="font-medium">Thêm tài xế</span>
                        </Link>
                        <Link
                            to="/revenue/new"
                            className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group"
                        >
                            <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                                <TrendingUp size={20} />
                            </div>
                            <span className="font-medium">Nhập doanh thu</span>
                        </Link>
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
                                <span className="text-xs text-gray-400">{driver.vehicleCode}</span>
                            </div>
                        ))}
                        {recentDrivers.length === 0 && (
                            <p className="text-gray-500 text-center py-4">Chưa có tài xế nào</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
