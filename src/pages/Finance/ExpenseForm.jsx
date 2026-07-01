import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save, Loader2 } from 'lucide-react'
import { expenseStorage, driverStorage } from '../../utils/firebaseStorage'

export default function ExpenseForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isEditing = !!id

    const [loading, setLoading] = useState(isEditing)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        title: '',
        category: 'rent',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        description: '',
        vehicleCode: '',
    })
    const [drivers, setDrivers] = useState([])

    useEffect(() => {
        const initData = async () => {
            try {
                const loadedDrivers = await driverStorage.getAll()
                setDrivers(loadedDrivers)

                if (isEditing) {
                    const expenses = await expenseStorage.getAll()
                    const expense = expenses.find(e => e.id === id)
                    if (expense) {
                        setFormData({
                            title: expense.title || '',
                            category: expense.category || 'rent',
                            amount: expense.amount || '',
                            date: expense.date || new Date().toISOString().split('T')[0],
                            description: expense.description || '',
                            vehicleCode: expense.vehicleCode || '',
                        })
                    } else {
                        setError('Không tìm thấy chi phí')
                    }
                }
            } catch (err) {
                setError('Có lỗi xảy ra khi tải dữ liệu')
                console.error(err)
            }
            setLoading(false)
        }
        initData()
    }, [id, isEditing])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSaving(true)
        setError(null)

        try {
            const expenseData = {
                ...formData,
                amount: Number(formData.amount),
            }

            if (isEditing) {
                await expenseStorage.update(id, expenseData)
            } else {
                await expenseStorage.add(expenseData)
            }
            navigate('/expenses')
        } catch (err) {
            setError('Có lỗi xảy ra khi lưu dữ liệu')
            console.error(err)
            setSaving(false)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-taxi-500" />
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="mb-6 flex items-center gap-4">
                <Link to="/expenses" className="p-2 -ml-2 text-gray-400 hover:text-gray-900 rounded-xl hover:bg-white transition-colors">
                    <ArrowLeft size={24} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{isEditing ? 'Sửa chi phí' : 'Thêm chi phí mới'}</h1>
                    <p className="text-gray-500 mt-1">Nhập thông tin chi tiết khoản chi</p>
                </div>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tên chi phí <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors"
                        placeholder="VD: Tiền điện tháng 3, Thuê VP..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gắn với xe (Tùy chọn)</label>
                    <select
                        value={formData.vehicleCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, vehicleCode: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors"
                    >
                        <option value="">-- Không gắn với xe nào (Chi phí chung) --</option>
                        {drivers.map(d => (
                            <option key={d.id} value={d.vehicleCode}>{d.vehicleCode} - {d.name}</option>
                        ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Nếu chọn, khoản phí này sẽ được tính vào báo cáo của xe tương ứng.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Danh mục <span className="text-red-500">*</span></label>
                        <select
                            required
                            value={formData.category}
                            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors"
                        >
                            <option value="rent">Tiền thuê văn phòng</option>
                            <option value="utilities">Điện/Nước/Mạng</option>
                            <option value="salary">Lương nhân viên</option>
                            <option value="maintenance">Sửa chữa/Bảo dưỡng</option>
                            <option value="office">Văn phòng phẩm</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ngày chi <span className="text-red-500">*</span></label>
                        <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Số tiền (VNĐ) <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <input
                            type="number"
                            required
                            min="0"
                            step="1000"
                            value={formData.amount}
                            onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors pr-16"
                            placeholder="0"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">VNĐ</span>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ghi chú</label>
                    <textarea
                        rows="3"
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors"
                        placeholder="Thêm thông tin chi tiết..."
                    />
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100">
                    <Link
                        to="/expenses"
                        className="flex-1 px-4 py-3 text-center rounded-xl bg-gray-50 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                    >
                        Hủy bỏ
                    </Link>
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex-1 px-4 py-3 rounded-xl bg-taxi-500 text-white font-medium hover:bg-taxi-600 focus:ring-4 focus:ring-taxi-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                        {saving ? (
                            <><Loader2 size={20} className="animate-spin" /><span>Đang lưu...</span></>
                        ) : (
                            <><Save size={20} /><span>{isEditing ? 'Cập nhật' : 'Lưu chi phí'}</span></>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}
