import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Calendar, Trash2, Loader2, Edit, Receipt } from 'lucide-react'
import { expenseStorage } from '../../utils/firebaseStorage'

export default function ExpenseList() {
    const [expenses, setExpenses] = useState([])
    const [selectedMonth, setSelectedMonth] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState('company')

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        setLoading(true)
        try {
            const expenseData = await expenseStorage.getAll()
            setExpenses(expenseData)

            if (expenseData.length > 0) {
                // Extract unique months "YYYY-MM"
                const months = [...new Set(expenseData.map(e => e.date ? e.date.substring(0, 7) : ''))].filter(Boolean).sort().reverse()
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
        await expenseStorage.delete(id)
        await loadData()
        setDeleteConfirm(null)
    }

    const filteredByTab = expenses.filter(e => activeTab === 'company' ? !e.vehicleCode : !!e.vehicleCode)
    const uniqueMonths = [...new Set(filteredByTab.map(e => e.date ? e.date.substring(0, 7) : ''))].filter(Boolean).sort().reverse()
    const filteredExpenses = selectedMonth && uniqueMonths.includes(selectedMonth) ? filteredByTab.filter(e => e.date && e.date.startsWith(selectedMonth)) : filteredByTab
    const totalExpenses = filteredExpenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0)
    const formatMonth = (m) => `Tháng ${parseInt(m.split('-')[1])}/${m.split('-')[0]}`

    // Ensure selected month is valid for current tab
    useEffect(() => {
        if (selectedMonth && !uniqueMonths.includes(selectedMonth)) {
            setSelectedMonth(uniqueMonths[0] || '')
        }
    }, [activeTab, selectedMonth, uniqueMonths])

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
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Quản lý chi phí</h1>
                    <p className="text-gray-500 mt-1">Quản lý các khoản chi phí công ty và từng đầu xe</p>
                </div>
                <Link to="/expenses/new" className="inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30">
                    <Plus size={20} /><span>Nhập chi phí</span>
                </Link>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 mb-6 border-b border-gray-100">
                <button
                    onClick={() => setActiveTab('company')}
                    className={`pb-3 font-medium text-sm transition-colors relative ${activeTab === 'company' ? 'text-taxi-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Chi phí doanh nghiệp
                    {activeTab === 'company' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-taxi-500 rounded-t-full"></span>}
                </button>
                <button
                    onClick={() => setActiveTab('vehicle')}
                    className={`pb-3 font-medium text-sm transition-colors relative ${activeTab === 'vehicle' ? 'text-taxi-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Chi phí cho xe
                    {activeTab === 'vehicle' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-taxi-500 rounded-t-full"></span>}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                <div className="lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm">
                    <label className="block text-sm font-medium text-gray-700 mb-2"><Calendar size={16} className="inline mr-2" />Chọn tháng</label>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => setSelectedMonth('')} className={`px-4 py-2 rounded-xl text-sm font-medium ${selectedMonth === '' ? 'bg-taxi-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>Tất cả</button>
                        {uniqueMonths.map(m => <button key={m} onClick={() => setSelectedMonth(m)} className={`px-4 py-2 rounded-xl text-sm font-medium ${selectedMonth === m ? 'bg-taxi-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{formatMonth(m)}</button>)}
                    </div>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-2"><Receipt size={24} /><span className="font-medium">{selectedMonth ? formatMonth(selectedMonth) : 'Tổng chi phí'}</span></div>
                    <p className="text-3xl font-bold">{formatCurrency(totalExpenses)}</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Ngày</th>
                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Tên chi phí</th>
                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Danh mục</th>
                                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">Số tiền</th>
                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Ghi chú</th>
                                <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {filteredExpenses.map(e => (
                                <tr key={e.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium">{formatDate(e.date)}</td>
                                    <td className="px-4 py-3">{e.title}</td>
                                    <td className="px-4 py-3">
                                        <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                                            {e.category === 'rent' ? 'Thuê VP' :
                                                e.category === 'utilities' ? 'Điện/Nước/Mạng' :
                                                    e.category === 'maintenance' ? 'Bảo dưỡng' :
                                                        e.category === 'office' ? 'Văn phòng phẩm' :
                                                            e.category === 'salary' ? 'Lương nhân viên' : e.category}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-right font-bold text-red-600">{formatCurrency(e.amount || 0)}</td>
                                    <td className="px-4 py-3 text-sm text-gray-500 max-w-xs truncate" title={e.description}>
                                        {e.vehicleCode && (
                                            <span className="mr-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                                Xe: {e.vehicleCode}
                                            </span>
                                        )}
                                        {e.description || '-'}
                                    </td>
                                    <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                                        <Link to={`/expenses/edit/${e.id}`} className="inline-block p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={16} /></Link>
                                        <button onClick={() => setDeleteConfirm(e.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredExpenses.length === 0 && <div className="text-center py-12"><Receipt className="mx-auto text-gray-300 mb-4" size={48} /><p className="text-gray-500">Chưa có dữ liệu</p></div>}
            </div>

            {deleteConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
                        <h3 className="text-lg font-semibold mb-2">Xác nhận xóa</h3>
                        <p className="text-gray-500 mb-6">Bạn có chắc muốn xóa khoản chi phí này?</p>
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
