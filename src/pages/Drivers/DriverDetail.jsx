import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { 
    ArrowLeft, 
    Calendar, 
    Car, 
    DollarSign, 
    Edit2, 
    Phone, 
    TrendingUp, 
    User, 
    Wallet, 
    Clock, 
    CheckCircle, 
    AlertCircle,
    Loader2
} from 'lucide-react'
import { driverStorage, depositStorage, revenueStorage, paymentStorage } from '../../utils/firebaseStorage'

export default function DriverDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    
    const [driver, setDriver] = useState(null)
    const [deposit, setDeposit] = useState(null)
    const [payments, setPayments] = useState([])
    const [revenues, setRevenues] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadDriverData()
    }, [id])

    const loadDriverData = async () => {
        setLoading(true)
        try {
            const foundDriver = await driverStorage.getById(id)
            if (!foundDriver) {
                navigate('/drivers')
                return
            }
            setDriver(foundDriver)

            const [dep, paymentsList, driverRevenues] = await Promise.all([
                depositStorage.getByDriverId(id),
                paymentStorage.getByDriverId(id),
                revenueStorage.getByVehicleCode(foundDriver.vehicleCode)
            ])

            setDeposit(dep)
            setPayments(paymentsList)

            // Aggregate revenue by month
            const monthlyMap = {}
            driverRevenues.forEach(r => {
                const m = r.month
                if (!monthlyMap[m]) {
                    monthlyMap[m] = { month: m, amount: 0, vehicleCode: r.vehicleCode }
                }
                monthlyMap[m].amount += (Number(r.amount) || 0)
            })
            const sortedRevenues = Object.values(monthlyMap).sort((a, b) => a.month.localeCompare(b.month))
            setRevenues(sortedRevenues)
        } catch (error) {
            console.error('Error loading driver details:', error)
        }
        setLoading(false)
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-taxi-500" />
            </div>
        )
    }

    if (!driver) return null

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(amount || 0)
    }

    const formatMonth = (monthStr) => {
        if (!monthStr) return ''
        const [year, month] = monthStr.split('-')
        return `Tháng ${parseInt(month)}/${year}`
    }

    const formatDate = (dateStr) => {
        if (!dateStr) return ''
        const date = new Date(dateStr)
        return date.toLocaleDateString('vi-VN')
    }

    const getExpiryStatus = (dateStr) => {
        if (!dateStr) return { label: 'Chưa cập nhật', classes: 'text-gray-400 bg-gray-50' }
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const expiry = new Date(dateStr)
        expiry.setHours(0, 0, 0, 0)
        
        const diffTime = expiry - today
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        
        if (diffDays < 0) {
            return { 
                label: `Đã hết hạn (${Math.abs(diffDays)} ngày trước)`, 
                classes: 'text-red-700 bg-red-50 border border-red-200 font-semibold' 
            }
        } else if (diffDays <= 30) {
            return { 
                label: `Sắp hết hạn (Còn ${diffDays} ngày)`, 
                classes: 'text-amber-700 bg-amber-50 border border-amber-200 font-semibold' 
            }
        } else {
            return { 
                label: `Còn hạn (Hết hạn: ${formatDate(dateStr)})`, 
                classes: 'text-emerald-700 bg-emerald-50 border border-emerald-200 font-medium' 
            }
        }
    }

    // Calculate remaining deposit
    const requiredAmount = deposit?.requiredAmount || 0
    const paidAmount = deposit?.paidAmount || 0
    const remainingAmount = Math.max(0, requiredAmount - paidAmount)
    const depositPercent = requiredAmount > 0 ? Math.min(100, Math.round((paidAmount / requiredAmount) * 100)) : 0

    // SVG Chart helper calculations
    const maxRevenue = revenues.length > 0 ? Math.max(...revenues.map(r => r.amount), 5000000) : 10000000
    const chartHeight = 120
    const chartWidth = 400
    const paddingLeft = 60
    const paddingRight = 20
    const paddingTop = 20
    const paddingBottom = 20

    const plotWidth = chartWidth - paddingLeft - paddingRight
    const plotHeight = chartHeight - paddingTop - paddingBottom

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header / Back */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate('/drivers')} 
                        className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                        title="Quay lại danh sách"
                    >
                        <ArrowLeft size={24} className="text-gray-600" />
                    </button>
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Chi tiết tài xế</h1>
                        <p className="text-gray-500 mt-1">Thông tin chi tiết hồ sơ, tài chính và doanh thu</p>
                    </div>
                </div>
                <Link to={`/drivers/edit/${driver.id}`} className="inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30">
                    <Edit2 size={18} />
                    Chỉnh sửa thông tin
                </Link>
            </div>

            {/* Profile Summary Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex-shrink-0 flex items-center justify-center">
                        {driver.avatar ? (
                            <img src={driver.avatar} alt={driver.name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-taxi-100 text-taxi-600 rounded-2xl flex items-center justify-center font-bold text-3xl">
                                {driver.name?.charAt(0)}
                            </div>
                        )}
                    </div>
                    <div className="flex-1 text-center md:text-left space-y-3">
                        <div>
                            <div className="flex flex-col md:flex-row md:items-center gap-3 justify-center md:justify-start">
                                <h2 className="text-2xl font-bold text-gray-900">{driver.name}</h2>
                                <span className={`inline-block w-fit mx-auto md:mx-0 px-3 py-1 rounded-full text-xs font-semibold ${driver.status === 'active' || !driver.status ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                    {driver.status === 'active' || !driver.status ? 'Đang hoạt động' : 'Tạm nghỉ'}
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm mt-1">Mã số xe: <span className="font-semibold text-taxi-600">{driver.vehicleCode}</span></p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 pt-2 border-t border-gray-100">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 text-sm">
                                <Phone size={16} className="text-gray-400" />
                                <span>{driver.phone || 'Chưa cập nhật'}</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 text-sm">
                                <Car size={16} className="text-gray-400" />
                                <span className="font-mono bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{driver.licensePlate}</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 text-sm">
                                <Calendar size={16} className="text-gray-400" />
                                <span>Ngày tham gia: {formatDate(driver.createdAt || driver.joinDate)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Column 1: Vehicle Info & Deposit Progress */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Vehicle Details */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Car className="text-taxi-500" size={20} />
                            Thông tin phương tiện
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                <span className="text-gray-500 text-sm">Loại xe</span>
                                <span className="font-medium text-gray-800">{driver.vehicleType || 'Chưa xác định'}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                <span className="text-gray-500 text-sm">Mã số xe</span>
                                <span className="font-semibold text-taxi-600">{driver.vehicleCode}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                <span className="text-gray-500 text-sm">Biển kiểm soát</span>
                                <span className="font-mono font-medium text-gray-800 bg-gray-50 px-2 py-1 rounded border border-gray-100 font-semibold">
                                    {driver.licensePlate}
                                </span>
                            </div>
                            {/* Hạn đăng kiểm */}
                            <div className="flex flex-col gap-1 py-1 border-b border-gray-50">
                                <span className="text-gray-500 text-sm">Hạn đăng kiểm</span>
                                <span className={`text-xs px-2.5 py-1.5 rounded-lg w-full text-center mt-1 ${getExpiryStatus(driver.registryExpiry).classes}`}>
                                    {getExpiryStatus(driver.registryExpiry).label}
                                </span>
                            </div>
                            {/* Hạn giấy đi đường */}
                            <div className="flex flex-col gap-1 py-1">
                                <span className="text-gray-500 text-sm">Hạn giấy đi đường</span>
                                <span className={`text-xs px-2.5 py-1.5 rounded-lg w-full text-center mt-1 ${getExpiryStatus(driver.roadPermitExpiry).classes}`}>
                                    {getExpiryStatus(driver.roadPermitExpiry).label}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Deposit Summary Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Wallet className="text-purple-500" size={20} />
                            Tổng hợp tiền thế chân
                        </h3>
                        
                        <div className="space-y-4">
                            {/* Progress bar */}
                            <div>
                                <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                                    <span>Tỉ lệ đóng cọc</span>
                                    <span className="text-purple-600">{depositPercent}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-3">
                                    <div 
                                        className="bg-purple-600 h-3 rounded-full transition-all duration-500"
                                        style={{ width: `${depositPercent}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2 pt-2">
                                <div className="flex justify-between py-1.5 border-b border-gray-50 text-sm">
                                    <span className="text-gray-500">Yêu cầu</span>
                                    <span className="font-semibold text-gray-800">{formatCurrency(requiredAmount)}</span>
                                </div>
                                <div className="flex justify-between py-1.5 border-b border-gray-50 text-sm">
                                    <span className="text-gray-500">Đã đóng</span>
                                    <span className="font-bold text-emerald-600">{formatCurrency(paidAmount)}</span>
                                </div>
                                <div className="flex justify-between py-1.5 text-sm">
                                    <span className="text-gray-500">Còn thiếu</span>
                                    <span className={`font-bold ${remainingAmount > 0 ? 'text-red-500' : 'text-gray-400'}`}>
                                        {formatCurrency(remainingAmount)}
                                    </span>
                                </div>
                            </div>

                            <div className="pt-2 flex justify-center">
                                {deposit?.status === 'paid' && (
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 flex items-center gap-1.5 py-1.5 px-4">
                                        <CheckCircle size={14} /> Đóng đủ 100%
                                    </span>
                                )}
                                {deposit?.status === 'partial' && (
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 flex items-center gap-1.5 py-1.5 px-4">
                                        <Clock size={14} /> Còn thiếu cọc
                                    </span>
                                )}
                                {(!deposit || deposit.status === 'unpaid') && (
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 flex items-center gap-1.5 py-1.5 px-4">
                                        <AlertCircle size={14} /> Chưa đóng cọc
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2 & 3: Payment History and Revenue Reports */}
                <div className="lg:col-span-2 space-y-6">
                    
                    {/* Deposit Payment History */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <DollarSign className="text-emerald-500" size={20} />
                            Lịch sử đóng tiền thế chân
                        </h3>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                                    <tr>
                                        <th className="px-4 py-3">Ngày đóng</th>
                                        <th className="px-4 py-3 text-right">Số tiền</th>
                                        <th className="px-4 py-3">Ghi chú</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {payments.length > 0 ? (
                                        payments.map((p) => (
                                            <tr key={p.id} className="text-sm hover:bg-gray-50/50">
                                                <td className="px-4 py-3 text-gray-600">{formatDate(p.date)}</td>
                                                <td className="px-4 py-3 text-right font-medium text-emerald-600">{formatCurrency(p.amount)}</td>
                                                <td className="px-4 py-3 text-gray-500">{p.note || 'N/A'}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="px-4 py-8 text-center text-gray-400">
                                                Chưa có lịch sử giao dịch đóng tiền cọc
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Revenue Section */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <TrendingUp className="text-taxi-500" size={20} />
                                Lịch sử doanh thu
                            </h3>
                            <span className="text-sm text-gray-500">
                                Tổng cộng: <strong className="text-emerald-600 font-bold">{formatCurrency(revenues.reduce((sum, r) => sum + r.amount, 0))}</strong>
                            </span>
                        </div>

                        {/* Revenue Bar Chart (SVG) */}
                        {revenues.length > 0 ? (
                            <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100 flex flex-col items-center">
                                <div className="text-xs text-slate-400 self-start mb-2">Biểu đồ doanh thu các tháng (VNĐ)</div>
                                <div className="w-full overflow-x-auto">
                                    <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="min-w-[360px] mx-auto overflow-visible">
                                        {/* Y-axis Gridlines & Labels */}
                                        {[0, 0.5, 1].map((ratio, index) => {
                                            const val = Math.round(maxRevenue * ratio)
                                            const y = paddingTop + plotHeight * (1 - ratio)
                                            return (
                                                <g key={index} className="text-[10px] fill-gray-400">
                                                    <line 
                                                        x1={paddingLeft} 
                                                        y1={y} 
                                                        x2={chartWidth - paddingRight} 
                                                        y2={y} 
                                                        stroke="#e2e8f0" 
                                                        strokeWidth="1"
                                                        strokeDasharray="4,4" 
                                                    />
                                                    <text x={paddingLeft - 8} y={y + 3} textAnchor="end">
                                                        {ratio === 0 ? '0' : ratio === 0.5 ? `${Math.round(val / 1000000)}Tr` : `${Math.round(val / 1000000)}Tr`}
                                                    </text>
                                                </g>
                                            )
                                        })}
                                        
                                        {/* Bar items */}
                                        {revenues.map((rev, index) => {
                                            const count = revenues.length
                                            const colWidth = plotWidth / count
                                            const barWidth = Math.min(24, colWidth * 0.5)
                                            const x = paddingLeft + colWidth * index + (colWidth - barWidth) / 2
                                            
                                            const height = (rev.amount / maxRevenue) * plotHeight
                                            const y = paddingTop + plotHeight - height
                                            
                                            return (
                                                <g key={rev.month} className="group">
                                                    {/* Bar Gradient Define */}
                                                    <defs>
                                                        <linearGradient id={`grad-${rev.month}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                                            <stop offset="0%" stopColor="#d97706" />
                                                            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
                                                        </linearGradient>
                                                    </defs>
                                                    
                                                    {/* The bar */}
                                                    <rect
                                                        x={x}
                                                        y={y}
                                                        width={barWidth}
                                                        height={Math.max(1, height)}
                                                        rx="4"
                                                        fill={`url(#grad-${rev.month})`}
                                                        className="transition-all duration-300 hover:fill-taxi-500 cursor-pointer"
                                                    />
                                                    
                                                    {/* Tooltip value */}
                                                    <text 
                                                        x={x + barWidth / 2} 
                                                        y={y - 6} 
                                                        textAnchor="middle" 
                                                        className="text-[10px] font-bold fill-taxi-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                    >
                                                        {Math.round(rev.amount / 1000000)}M
                                                    </text>

                                                    {/* X-axis Label */}
                                                    <text
                                                        x={x + barWidth / 2}
                                                        y={chartHeight - paddingBottom + 14}
                                                        textAnchor="middle"
                                                        className="text-[9px] fill-gray-500 font-medium"
                                                    >
                                                        {rev.month.slice(5) + '/' + rev.month.slice(2, 4)}
                                                    </text>
                                                </g>
                                            )
                                        })}
                                        
                                        {/* Bottom Baseline */}
                                        <line 
                                            x1={paddingLeft} 
                                            y1={paddingTop + plotHeight} 
                                            x2={chartWidth - paddingRight} 
                                            y2={paddingTop + plotHeight} 
                                            stroke="#cbd5e1" 
                                            strokeWidth="1.5" 
                                        />
                                    </svg>
                                </div>
                            </div>
                        ) : null}

                        {/* Revenue Table list */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                                    <tr>
                                        <th className="px-4 py-3">Tháng</th>
                                        <th className="px-4 py-3 text-right">Doanh thu</th>
                                        <th className="px-4 py-3 text-center">Mã xe sử dụng</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {revenues.length > 0 ? (
                                        revenues.map((r) => (
                                            <tr key={r.month} className="text-sm hover:bg-gray-50/50">
                                                <td className="px-4 py-3 text-gray-600 font-medium">{formatMonth(r.month)}</td>
                                                <td className="px-4 py-3 text-right font-bold text-taxi-600">{formatCurrency(r.amount)}</td>
                                                <td className="px-4 py-3 text-center">
                                                    <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-xs border border-blue-100">
                                                        {r.vehicleCode}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="px-4 py-8 text-center text-gray-400">
                                                Chưa có dữ liệu doanh thu
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
