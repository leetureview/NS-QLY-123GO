import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save, Loader2 } from 'lucide-react'
import { advanceStorage, driverStorage } from '../../utils/firebaseStorage'

export default function AdvanceForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isEditing = !!id

    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState(null)
    const [drivers, setDrivers] = useState([])

    const [formData, setFormData] = useState({
        driverId: '',
        driverName: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        reason: '',
        status: 'pending',
    })

    useEffect(() => {
        const initForm = async () => {
            try {
                // Load drivers for select dropdown
                const loadedDrivers = await driverStorage.getAll()
                setDrivers(loadedDrivers)

                if (isEditing) {
                    const advances = await advanceStorage.getAll()
                    const advance = advances.find(a => a.id === id)
                    if (advance) {
                        setFormData({
                            driverId: advance.driverId || '',
                            driverName: advance.driverName || '',
                            amount: advance.amount || '',
                            date: advance.date || new Date().toISOString().split('T')[0],
                            reason: advance.reason || '',
                            status: advance.status || 'pending',
                        })
                    } else {
                        setError('Không tìm thấy khoản tạm ứng')
                    }
                } else if (loadedDrivers.length > 0) {
                    // Default to first driver if none selected
                    setFormData(prev => ({
                        ...prev,
                        driverId: loadedDrivers[0].id,
                        driverName: loadedDrivers[0].name
                    }))
                }
            } catch (err) {
                setError('Có lỗi xảy ra khi tải dữ liệu')
                console.error(err)
            }
            setLoading(false)
        }

        initForm()
    }, [id, isEditing])

    const handleDriverChange = (e) => {
        const selectedId = e.target.value
        const selectedDriver = drivers.find(d => d.id === selectedId)
        setFormData(prev => ({
            ...prev,
            driverId: selectedId,
            driverName: selectedDriver ? selectedDriver.name : ''
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSaving(true)
        setError(null)

        try {
            const advanceData = {
                ...formData,
                amount: Number(formData.amount),
            }

            if (isEditing) {
                await advanceStorage.update(id, advanceData)
            } else {
                await advanceStorage.add(advanceData)
            }
            navigate('/advances')
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
                <Link to="/advances" className="p-2 -ml-2 text-gray-400 hover:text-gray-900 rounded-xl hover:bg-white transition-colors">
                    <ArrowLeft size={24} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{isEditing ? 'Sửa khoản tạm ứng' : 'Thêm khoản tạm ứng mới'}</h1>
                    <p className="text-gray-500 mt-1">Ghi nhận thông tin ứng tiền của tài xế</p>
                </div>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tài xế <span className="text-red-500">*</span></label>
                        <select
                            required
                            value={formData.driverId}
                            onChange={handleDriverChange}
                            className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors"
                        >
                            <option value="" disabled>-- Chọn tài xế --</option>
                            {drivers.map(d => (
                                <option key={d.id} value={d.id}>{d.name} ({d.vehicleCode})</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ngày ứng <span className="text-red-500">*</span></label>
                        <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                                className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors pr-16 text-orange-600 font-semibold"
                                placeholder="0"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">VNĐ</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Trạng thái hoàn trả <span className="text-red-500">*</span></label>
                        <select
                            required
                            value={formData.status}
                            onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors"
                        >
                            <option value="pending">Chưa hoàn (Đang nợ)</option>
                            <option value="paid">Đã hoàn (Đã trừ)</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lý do ứng tiền</label>
                    <textarea
                        rows="3"
                        required
                        value={formData.reason}
                        onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors"
                        placeholder="Ví dụ: Đóng phạt, Khám bệnh, Chế đệm..."
                    />
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100">
                    <Link
                        to="/advances"
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
                            <><Save size={20} /><span>{isEditing ? 'Cập nhật' : 'Lưu khoản nhận'}</span></>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}
