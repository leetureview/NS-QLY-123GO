import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, TrendingUp, Calendar, Car, Trash2, Loader2 } from 'lucide-react'
import { revenueStorage, settingsStorage } from '../../utils/firebaseStorage'

export default function RevenueList() {
    const [revenues, setRevenues] = useState([])
    const [settings, setSettings] = useState({ driverSharePercent: 60 })
    const [selectedMonth, setSelectedMonth] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        setLoading(true)
        try {
            const [revenueData, settingsData] = await Promise.all([
                revenueStorage.getAll(),
                settingsStorage.get()
            ])
            setRevenues(revenueData)
            setSettings(settingsData)

            // Set default month to current or first available
            if (revenueData.length > 0) {
                const months = [...new Set(revenueData.map(r => r.month))].sort().reverse()
                setSelectedMonth(months[0] || '')
            }
        } catch (error) {
            console.error('Error loading data:', error)
        }
        setLoading(false)
    }

    const formatCurrency = (amount) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)

    const handleDelete = async (id) => {
        await revenueStorage.delete(id)
        await loadData()
        setDeleteConfirm(null)
    }

    const months = [...new Set(revenues.map(r => r.month))].sort().reverse()
    const filteredRevenues = selectedMonth ? revenues.filter(r => r.month === selectedMonth) : revenues
    const totalRevenue = filteredRevenues.reduce((sum, r) => sum + (r.amount || 0), 0)
    const formatMonth = (m) => `Tháng ${parseInt(m.split('-')[1])}/${m.split('-')[0]}`

    const calcNet = (r) => {
        const base = ((r.amount || 0) * settings.driverSharePercent) / 100
        return base + (r.bonus || 0) - (r.penalty || 0)
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-taxi-500" />
            </div>
        )
    }

    return (
        <div className="animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Quản lý doanh thu</h1>
                    <p className="text-gray-500 mt-1">Doanh thu và tiền thực nhận của tài xế</p>
                </div>
                <Link to="/revenue/new" className="inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30">
                    <Plus size={20} /><span>Nhập doanh thu</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                <div className="lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm">
                    <label className="block text-sm font-medium text-gray-700 mb-2"><Calendar size={16} className="inline mr-2" />Chọn tháng</label>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => setSelectedMonth('')} className={`px-4 py-2 rounded-xl text-sm font-medium ${selectedMonth === '' ? 'bg-taxi-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>Tất cả</button>
                        {months.map(m => <button key={m} onClick={() => setSelectedMonth(m)} className={`px-4 py-2 rounded-xl text-sm font-medium ${selectedMonth === m ? 'bg-taxi-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{formatMonth(m)}</button>)}
                    </div>
                </div>
                <div className="bg-gradient-to-r from-taxi-500 to-taxi-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-2"><TrendingUp size={24} /><span className="font-medium">{selectedMonth ? formatMonth(selectedMonth) : 'Tổng'}</span></div>
                    <p className="text-3xl font-bold">{formatCurrency(totalRevenue)}</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Xe</th>
                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Tài xế</th>
                                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">Doanh thu</th>
                                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">Thưởng</th>
                                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">Phạt</th>
                                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">Thực nhận ({settings.driverSharePercent}%)</th>
                                <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {filteredRevenues.map(r => (
                                <tr key={r.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3"><span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg font-mono text-sm"><Car size={14} />{r.vehicleCode}</span></td>
                                    <td className="px-4 py-3 font-medium">{r.driverName}</td>
                                    <td className="px-4 py-3 text-right font-mono">{formatCurrency(r.amount || 0)}</td>
                                    <td className="px-4 py-3 text-right font-mono text-green-600">{r.bonus ? `+${formatCurrency(r.bonus)}` : '-'}</td>
                                    <td className="px-4 py-3 text-right font-mono text-red-600">{r.penalty ? `-${formatCurrency(r.penalty)}` : '-'}</td>
                                    <td className="px-4 py-3 text-right font-bold text-taxi-600">{formatCurrency(calcNet(r))}</td>
                                    <td className="px-4 py-3"><button onClick={() => setDeleteConfirm(r.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredRevenues.length === 0 && <div className="text-center py-12"><TrendingUp className="mx-auto text-gray-300 mb-4" size={48} /><p className="text-gray-500">Chưa có dữ liệu</p></div>}
            </div>

            {deleteConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
                        <h3 className="text-lg font-semibold mb-2">Xác nhận xóa</h3>
                        <p className="text-gray-500 mb-6">Bạn có chắc muốn xóa?</p>
                        <div className="flex gap-3">
                            <button onClick={() => setDeleteConfirm(null)} className="flex-1 px-4 py-2.5 border rounded-xl hover:bg-gray-50 font-medium">Hủy</button>
                            <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 font-medium">Xóa</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
