import { useEffect, useState } from 'react'
import { Calendar, DollarSign, Loader2, Users, FileText, Settings, ShieldAlert } from 'lucide-react'
import { vehicleStorage, investorStorage, revenueStorage } from '../../utils/firebaseStorage'

export default function InvestorReport() {
    const [selectedMonth, setSelectedMonth] = useState(() => new Date().toISOString().slice(0, 7))
    const [loading, setLoading] = useState(true)
    
    // Core database collections
    const [investors, setInvestors] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [revenues, setRevenues] = useState([])
    
    // Configurations
    const [dispatchFee, setDispatchFee] = useState(2000000) // Default 2,000,000 VND
    const [sharePercentages, setSharePercentages] = useState({
        'VF5': 40,            // Driver 40%, Investor 60%
        'Minio Green': 40,    // Driver 40%, Investor 60%
        'VinFast Fadil': 40,  // Driver 40%, Investor 60%
    })
    
    // Calculated Report Results
    const [uniqueVehicleTypes, setUniqueVehicleTypes] = useState([])
    const [typeStats, setTypeStats] = useState({})
    const [reportRows, setReportRows] = useState([])
    const [activeTab, setActiveTab] = useState(null) // For viewing detail breakdown

    useEffect(() => {
        loadData()
    }, [selectedMonth])

    useEffect(() => {
        calculateReport()
    }, [revenues, vehicles, investors, dispatchFee, sharePercentages])

    const loadData = async () => {
        setLoading(true)
        try {
            const [invList, vList, revList] = await Promise.all([
                investorStorage.getAll(),
                vehicleStorage.getAll(),
                revenueStorage.getByMonth(selectedMonth)
            ])
            setInvestors(invList)
            setVehicles(vList)
            setRevenues(revList)
            
            // Extract unique vehicle types from both vehicles list and investor configured shares
            const typesSet = new Set(vList.map(v => v.vehicleType).filter(Boolean))
            invList.forEach(inv => {
                if (inv.shares && Array.isArray(inv.shares)) {
                    inv.shares.forEach(sh => {
                        if (sh.vehicleType) typesSet.add(sh.vehicleType)
                    })
                }
            })
            const types = [...typesSet]
            setUniqueVehicleTypes(types)
            
            // Initialize share percentages for any new types dynamically
            setSharePercentages(prev => {
                const updated = { ...prev }
                types.forEach(t => {
                    if (updated[t] === undefined) {
                        updated[t] = 40 // Default to 40% if not configured
                    }
                })
                return updated
            })
        } catch (error) {
            console.error('Error loading report data:', error)
        }
        setLoading(false)
    }

    const calculateReport = () => {
        if (investors.length === 0) return

        // 1. Group investor shares by vehicleType
        const investorSharesByType = {}
        investors.forEach(inv => {
            if (inv.shares && Array.isArray(inv.shares)) {
                inv.shares.forEach(sh => {
                    const type = sh.vehicleType || 'Không rõ'
                    investorSharesByType[type] = (investorSharesByType[type] || 0) + (Number(sh.count) || 0)
                })
            }
        })

        // 2. Count total vehicles in DB by type
        const dbVehiclesByType = {}
        vehicles.forEach(v => {
            const type = v.vehicleType || 'Không rõ'
            dbVehiclesByType[type] = (dbVehiclesByType[type] || 0) + 1
        })

        // 3. Group monthly revenues by vehicleCode
        const revenueMapByCode = {}
        revenues.forEach(r => {
            if (r.vehicleCode) {
                const code = r.vehicleCode.toUpperCase()
                revenueMapByCode[code] = (revenueMapByCode[code] || 0) + (Number(r.amount) || 0)
            }
        })

        // 4. Calculate stats for each vehicle type
        const stats = {}
        const allTypes = [...new Set([
            ...Object.keys(investorSharesByType),
            ...Object.keys(dbVehiclesByType)
        ])].filter(t => t !== 'Không rõ')

        allTypes.forEach(type => {
            const vehicleCount = investorSharesByType[type] || 0
            const totalVehiclesInDb = dbVehiclesByType[type] || 0
            
            // Sum revenues for all vehicles of this type
            let totalRevenue = 0
            vehicles.forEach(v => {
                if (v.vehicleType === type) {
                    totalRevenue += (revenueMapByCode[v.vehicleCode.toUpperCase()] || 0)
                }
            })

            const avgRevenue = totalVehiclesInDb > 0 ? totalRevenue / totalVehiclesInDb : 0
            const driverPct = sharePercentages[type] !== undefined ? sharePercentages[type] : 40
            const investorPct = 100 - driverPct
            const remainOne = (avgRevenue * investorPct) / 100
            const payoutOne = Math.max(0, remainOne - dispatchFee)

            stats[type] = {
                type,
                vehicleCount,
                totalRevenue,
                avgRevenue,
                driverPct,
                investorPct,
                remainOne,
                payoutOne
            }
        })
        setTypeStats(stats)

        // 5. Generate rows for each investor
        const rows = investors.map(inv => {
            let totalPayout = 0
            const breakdown = []
            let vehiclesCount = 0

            if (inv.shares && Array.isArray(inv.shares)) {
                inv.shares.forEach(sh => {
                    const type = sh.vehicleType
                    const count = Number(sh.count) || 0
                    vehiclesCount += count
                    
                    const typeStat = stats[type]
                    const payoutForType = typeStat ? typeStat.payoutOne * count : 0
                    totalPayout += payoutForType

                    breakdown.push({
                        type,
                        count,
                        avgRevenue: typeStat?.avgRevenue || 0,
                        investorPct: typeStat?.investorPct || 60,
                        payoutOne: typeStat?.payoutOne || 0,
                        payoutForType
                    })
                })
            }

            return {
                investor: inv,
                vehiclesCount,
                vehiclesListStr: inv.shares?.map(sh => `${sh.count}x ${sh.vehicleType}`).join(', ') || 'Chưa góp xe',
                totalContributedRevenue: 0,
                totalPayout,
                breakdown
            }
        })

        setReportRows(rows)
    }

    const handlePercentChange = (type, val) => {
        const pct = Math.max(0, Math.min(100, Number(val) || 0))
        setSharePercentages(prev => ({
            ...prev,
            [type]: pct
        }))
    }

    const formatCurrency = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val)

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-taxi-500" />
            </div>
        )
    }

    return (
        <div className="animate-fade-in space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Báo cáo phân chia Nhà đầu tư</h1>
                    <p className="text-gray-500 mt-1">Phân chia lợi nhuận và tiền đài theo dòng xe chung trong tháng</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 border rounded-xl shadow-sm">
                    <Calendar size={18} className="text-gray-400" />
                    <input 
                        type="month" 
                        value={selectedMonth} 
                        onChange={(e) => setSelectedMonth(e.target.value)} 
                        className="outline-none text-sm font-medium text-gray-700 bg-transparent"
                    />
                </div>
            </div>

            {/* Config Box */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Settings size={16} className="text-taxi-500" />
                        Cấu hình tỉ lệ chia tài xế (%) theo Dòng xe
                    </h3>
                    <div className="space-y-3.5">
                        {uniqueVehicleTypes.length === 0 ? (
                            <p className="text-xs text-gray-400 italic">Chưa có dòng xe góp vốn nào được gán cho nhà đầu tư.</p>
                        ) : (
                            uniqueVehicleTypes.map(type => (
                                <div key={type} className="flex items-center justify-between gap-4 text-sm">
                                    <span className="font-semibold text-gray-700">{type}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-400">Tài xế nhận:</span>
                                        <input 
                                            type="number" 
                                            value={sharePercentages[type] ?? 40}
                                            onChange={(e) => handlePercentChange(type, e.target.value)}
                                            className="w-16 px-2.5 py-1 rounded-lg border border-gray-200 focus:border-taxi-500 outline-none text-center font-bold text-sm bg-gray-50"
                                            min="0"
                                            max="100"
                                        />
                                        <span className="font-bold text-gray-500">%</span>
                                        <span className="text-[10px] text-purple-600 bg-purple-50 px-2 py-0.5 rounded font-semibold ml-2">
                                            NĐT hưởng {100 - (sharePercentages[type] ?? 40)}%
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <DollarSign size={16} className="text-taxi-500" />
                        Tiền đài khấu trừ Công ty
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">Tiền đài hàng tháng / xe</label>
                            <div className="relative">
                                <input 
                                    type="number" 
                                    value={dispatchFee} 
                                    onChange={(e) => setDispatchFee(Math.max(0, Number(e.target.value) || 0))}
                                    className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-gray-200 focus:border-taxi-500 outline-none text-sm font-bold bg-gray-50"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">VND</span>
                            </div>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            <ShieldAlert size={12} className="inline mr-1 -mt-0.5 text-amber-500" />
                            Tiền đài sẽ được tự động nhân với số lượng xe thuộc dòng đóng góp của mỗi nhà đầu tư và khấu trừ trực tiếp vào doanh thu 60% còn lại.
                        </p>
                    </div>
                </div>
            </div>

            {/* Type Summary Pool Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(typeStats).map(stat => (
                    <div key={stat.type} className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl p-5 border border-blue-100 shadow-sm space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-blue-800 text-sm">{stat.type}</span>
                            <span className="text-[10px] font-bold bg-blue-200/60 text-blue-700 px-2 py-0.5 rounded-full">{stat.vehicleCount} xe góp vốn</span>
                        </div>
                        <div className="pt-2 border-t border-blue-200/50 grid grid-cols-2 gap-3 text-xs">
                            <div>
                                <p className="text-gray-500">Doanh thu gộp</p>
                                <p className="font-bold text-gray-800 mt-0.5">{formatCurrency(stat.totalRevenue)}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Doanh thu TB/xe</p>
                                <p className="font-bold text-gray-800 mt-0.5">{formatCurrency(stat.avgRevenue)}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">NĐT hưởng ({stat.investorPct}%)</p>
                                <p className="font-semibold text-purple-700 mt-0.5">{formatCurrency(stat.remainOne)}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Thực chia / xe (-đài)</p>
                                <p className="font-bold text-emerald-700 mt-0.5">{formatCurrency(stat.payoutOne)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Payout Report Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                        <Users className="text-taxi-500" size={18} />
                        Bảng phân phối lợi nhuận Nhà đầu tư
                    </h2>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4">Nhà đầu tư</th>
                                <th className="px-6 py-4">Xe đóng góp</th>
                                <th className="px-6 py-4 text-right">Tổng doanh thu xe</th>
                                <th className="px-6 py-4 text-right">Số tiền thực nhận</th>
                                <th className="px-6 py-4">Tài khoản chi trả</th>
                                <th className="px-6 py-4 text-right">Breakdown</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {reportRows.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-bold text-gray-900">{row.investor.name}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">{row.investor.phone}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-semibold text-gray-700 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded text-xs">
                                            {row.vehiclesCount} xe
                                        </span>
                                        <p className="text-[10px] text-gray-400 font-mono mt-1 max-w-[200px] truncate" title={row.vehiclesListStr}>
                                            {row.vehiclesListStr || 'Chưa gán xe'}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-right font-medium text-gray-700">
                                        {formatCurrency(row.totalContributedRevenue)}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-xl">
                                            {formatCurrency(row.totalPayout)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-xs">
                                        <p className="font-semibold text-gray-800 font-mono">{row.investor.bankAccount}</p>
                                        <p className="text-[10px] text-gray-500 mt-0.5">{row.investor.bankName}</p>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button 
                                            onClick={() => setActiveTab(activeTab === idx ? null : idx)}
                                            className="text-taxi-600 hover:text-taxi-700 font-medium text-xs hover:underline"
                                        >
                                            {activeTab === idx ? 'Đóng chi tiết' : 'Xem chi tiết'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {reportRows.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="text-center py-12 text-gray-400">
                                        <FileText className="mx-auto text-gray-300 mb-3" size={40} />
                                        <p className="text-sm font-medium">Chưa có thông tin tính toán phân chia</p>
                                        <p className="text-xs mt-1">Vui lòng đăng ký nhà đầu tư và liên kết xe để xuất báo cáo.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Breakdown Detail Modal / Slide */}
            {activeTab !== null && reportRows[activeTab] && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-2xl space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Chi tiết phân chia lợi nhuận</h3>
                                <p className="text-xs text-gray-500 mt-0.5">Nhà đầu tư: <strong className="text-gray-800">{reportRows[activeTab].investor.name}</strong> ({selectedMonth})</p>
                            </div>
                            <button onClick={() => setActiveTab(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm">Đóng [x]</button>
                        </div>

                        <div className="border rounded-xl overflow-hidden">
                            <table className="w-full text-left text-xs">
                                <thead className="bg-gray-50 font-semibold text-gray-500 uppercase border-b">
                                    <tr>
                                        <th className="p-3">Dòng xe</th>
                                        <th className="p-3 text-center">Số xe góp</th>
                                        <th className="p-3 text-right">Doanh thu TB/xe</th>
                                        <th className="p-3 text-right">Còn lại ({100 - (sharePercentages[reportRows[activeTab].breakdown[0]?.type] ?? 40)}%)</th>
                                        <th className="p-3 text-right">Trừ tiền đài</th>
                                        <th className="p-3 text-right">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {reportRows[activeTab].breakdown.map((b, i) => (
                                        <tr key={i} className="hover:bg-gray-50">
                                            <td className="p-3 font-bold text-blue-800">{b.type}</td>
                                            <td className="p-3 text-center font-semibold text-gray-800">{b.count} xe</td>
                                            <td className="p-3 text-right font-medium text-gray-700">{formatCurrency(b.avgRevenue)}</td>
                                            <td className="p-3 text-right font-semibold text-purple-700">{formatCurrency(b.avgRevenue * b.investorPct / 100)}</td>
                                            <td className="p-3 text-right text-red-600 font-semibold">-{formatCurrency(dispatchFee)}</td>
                                            <td className="p-3 text-right font-extrabold text-gray-900">{formatCurrency(b.payoutForType)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl text-sm">
                            <span className="font-semibold text-gray-600">TỔNG SỐ TIỀN CHI TRẢ:</span>
                            <span className="font-extrabold text-lg text-emerald-700">{formatCurrency(reportRows[activeTab].totalPayout)}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
