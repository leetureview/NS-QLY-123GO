import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Calendar, Trash2, Loader2, Edit, HandCoins, CheckCircle, Clock } from 'lucide-react'
import { advanceStorage } from '../../utils/firebaseStorage'

export default function AdvanceList() {
    const [advances, setAdvances] = useState([])
    const [selectedMonth, setSelectedMonth] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        setLoading(true)
        try {
            const advanceData = await advanceStorage.getAll()
            setAdvances(advanceData)

            if (advanceData.length > 0) {
                const months = [...new Set(advanceData.map(a => a.date ? a.date.substring(0, 7) : ''))].filter(Boolean).sort().reverse()
                setSelectedMonth(months[0] || '')
            }
        } catch (error) {
            console.error('Error loading data:', error)
        }
        setLoading(false)
    }

    const formatCurrency = (amount) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)
    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return new Intl.DateTimeFormat('vi-VN').format(date)
    }

    const handleDelete = async (id) => {
        await advanceStorage.delete(id)
        await loadData()
        setDeleteConfirm(null)
    }

    const handleStatusToggle = async (advance) => {
        const newStatus = advance.status === 'paid' ? 'pending' : 'paid'
        await advanceStorage.update(advance.id, { status: newStatus })
        await loadData()
    }

    const uniqueMonths = [...new Set(advances.map(a => a.date ? a.date.substring(0, 7) : ''))].filter(Boolean).sort().reverse()
    const filteredAdvances = selectedMonth ? advances.filter(a => a.date && a.date.startsWith(selectedMonth)) : advances
    const totalAdvances = filteredAdvances.reduce((sum, a) => sum + (Number(a.amount) || 0), 0)
    const pendingAdvances = filteredAdvances.filter(a => a.status !== 'paid').reduce((sum, a) => sum + (Number(a.amount) || 0), 0)
    const formatMonth = (m) => `Tháng ${parseInt(m.split('-')[1])}/${m.split('-')[0]}`

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
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Tạm ứng tài xế</h1>
                    <p className="text-gray-500 mt-1">Quản lý các khoản tiền đã ứng cho tài xế</p>
                </div>
                <Link to="/advances/new" className="inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30">
                    <Plus size={20} /><span>Cho ứng tiền</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                <div className="lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm">
                    <label className="block text-sm font-medium text-gray-700 mb-2"><Calendar size={16} className="inline mr-2" />Chọn tháng</label>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => setSelectedMonth('')} className={`px-4 py-2 rounded-xl text-sm font-medium ${selectedMonth === '' ? 'bg-taxi-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>Tất cả</button>
                        {uniqueMonths.map(m => <button key={m} onClick={() => setSelectedMonth(m)} className={`px-4 py-2 rounded-xl text-sm font-medium ${selectedMonth === m ? 'bg-taxi-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{formatMonth(m)}</button>)}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:col-span-1">
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-orange-100">
                        <div className="flex items-center gap-2 mb-1 text-orange-600"><Clock size={18} /><span className="text-sm font-medium">Chưa hoàn</span></div>
                        <p className="text-xl font-bold text-gray-900">{formatCurrency(pendingAdvances)}</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-blue-100">
                        <div className="flex items-center gap-2 mb-1 text-blue-600"><HandCoins size={18} /><span className="text-sm font-medium">Tổng ứng</span></div>
                        <p className="text-xl font-bold text-gray-900">{formatCurrency(totalAdvances)}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Ngày</th>
                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Tài xế</th>
                                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">Số tiền</th>
                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Lý do</th>
                                <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">Trạng thái</th>
                                <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {filteredAdvances.map(a => (
                                <tr key={a.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium text-gray-700">{formatDate(a.date)}</td>
                                    <td className="px-4 py-3 font-medium">{a.driverName}</td>
                                    <td className="px-4 py-3 text-right font-bold text-orange-600">{formatCurrency(a.amount || 0)}</td>
                                    <td className="px-4 py-3 text-sm text-gray-600 max-w-[200px] truncate" title={a.reason}>{a.reason || '-'}</td>
                                    <td className="px-4 py-3 text-center">
                                        <button
                                            onClick={() => handleStatusToggle(a)}
                                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${a.status === 'paid' ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-orange-100 text-orange-700 hover:bg-orange-200'}`}
                                        >
                                            {a.status === 'paid' ? <><CheckCircle size={14} /> Đã hoàn</> : <><Clock size={14} /> Chưa hoàn</>}
                                        </button>
                                    </td>
                                    <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                                        <Link to={`/advances/edit/${a.id}`} className="inline-block p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={16} /></Link>
                                        <button onClick={() => setDeleteConfirm(a.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredAdvances.length === 0 && <div className="text-center py-12"><HandCoins className="mx-auto text-gray-300 mb-4" size={48} /><p className="text-gray-500">Chưa có dữ liệu tạm ứng</p></div>}
            </div>

            {deleteConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
                        <h3 className="text-lg font-semibold mb-2">Xác nhận xóa</h3>
                        <p className="text-gray-500 mb-6">Bạn có chắc muốn xóa khoản tạm ứng này?</p>
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
