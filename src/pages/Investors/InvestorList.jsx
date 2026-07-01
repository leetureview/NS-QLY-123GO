import { useEffect, useState } from 'react'
import { Plus, Search, Edit2, Trash2, Users, Loader2, Phone, CreditCard, FileText } from 'lucide-react'
import { investorStorage } from '../../utils/firebaseStorage'

export default function InvestorList() {
    const [investors, setInvestors] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    
    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingId, setEditingId] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        bankName: '',
        bankAccount: '',
        note: ''
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        loadInvestors()
    }, [])

    const loadInvestors = async () => {
        setLoading(true)
        try {
            const data = await investorStorage.getAll()
            setInvestors(data)
        } catch (error) {
            console.error('Error loading investors:', error)
        }
        setLoading(false)
    }

    const handleOpenModal = (inv = null) => {
        setErrors({})
        if (inv) {
            setEditingId(inv.id)
            setFormData({
                name: inv.name || '',
                phone: inv.phone || '',
                bankName: inv.bankName || '',
                bankAccount: inv.bankAccount || '',
                note: inv.note || ''
            })
        } else {
            setEditingId(null)
            setFormData({
                name: '',
                phone: '',
                bankName: '',
                bankAccount: '',
                note: ''
            })
        }
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setEditingId(null)
        setFormData({ name: '', phone: '', bankName: '', bankAccount: '', note: '' })
    }

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }))
        }
    }

    const validate = () => {
        const tempErrors = {}
        if (!formData.name.trim()) tempErrors.name = 'Vui lòng nhập họ tên nhà đầu tư'
        if (!formData.phone.trim()) tempErrors.phone = 'Vui lòng nhập số điện thoại'
        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return

        setSaving(true)
        try {
            if (editingId) {
                await investorStorage.update(editingId, formData)
            } else {
                await investorStorage.add(formData)
            }
            await loadInvestors()
            handleCloseModal()
        } catch (error) {
            console.error('Error saving investor:', error)
            alert('Có lỗi xảy ra khi lưu thông tin nhà đầu tư!')
        }
        setSaving(false)
    }

    const handleDelete = async (id) => {
        try {
            await investorStorage.delete(id)
            await loadInvestors()
            setDeleteConfirm(null)
        } catch (error) {
            console.error('Error deleting investor:', error)
            alert('Có lỗi xảy ra khi xóa nhà đầu tư!')
        }
    }

    const filteredInvestors = investors.filter(inv =>
        inv.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inv.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inv.bankName?.toLowerCase().includes(searchTerm.toLowerCase())
    )

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
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Quản lý nhà đầu tư</h1>
                    <p className="text-gray-500 mt-1">Danh sách {investors.length} nhà đầu tư góp xe cùng công ty</p>
                </div>
                <button 
                    onClick={() => handleOpenModal()} 
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30 text-sm transition-all"
                >
                    <Plus size={18} /><span>Thêm nhà đầu tư</span>
                </button>
            </div>

            {/* Search Box */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm theo tên nhà đầu tư, số điện thoại, ngân hàng..." 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm" 
                    />
                </div>
            </div>

            {/* Grid of Investors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInvestors.map(inv => (
                    <div key={inv.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                                    {inv.name?.charAt(0).toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-gray-900 text-base truncate">{inv.name}</h3>
                                    <p className="text-xs text-gray-400">Tham gia: {inv.createdAt ? new Date(inv.createdAt).toLocaleDateString('vi-VN') : 'Mới'}</p>
                                </div>
                            </div>

                            <div className="space-y-2.5 pt-4 border-t border-gray-50 text-xs">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Phone size={14} className="text-gray-400" />
                                    <span>{inv.phone}</span>
                                </div>
                                <div className="flex items-start gap-2 text-gray-600">
                                    <CreditCard size={14} className="text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-800">{inv.bankAccount}</p>
                                        <p className="text-[10px] text-gray-500 mt-0.5">{inv.bankName || 'Chưa cập nhật ngân hàng'}</p>
                                    </div>
                                </div>
                                {inv.note && (
                                    <div className="flex items-start gap-2 text-gray-500 bg-gray-50 p-2 rounded-lg">
                                        <FileText size={14} className="text-gray-400 mt-0.5" />
                                        <span className="leading-relaxed">{inv.note}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-2 mt-6 pt-4 border-t border-gray-50">
                            <button 
                                onClick={() => handleOpenModal(inv)}
                                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 font-medium text-xs transition-colors"
                            >
                                <Edit2 size={12} /><span>Sửa</span>
                            </button>
                            <button 
                                onClick={() => setDeleteConfirm(inv.id)}
                                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-red-100 text-red-600 rounded-xl hover:bg-red-50 font-medium text-xs transition-colors"
                            >
                                <Trash2 size={12} /><span>Xóa</span>
                            </button>
                        </div>
                    </div>
                ))}

                {filteredInvestors.length === 0 && (
                    <div className="col-span-full bg-white rounded-2xl p-12 text-center border border-gray-100">
                        <Users className="mx-auto text-gray-300 mb-4" size={48} />
                        <p className="text-gray-500 font-medium">Chưa có thông tin nhà đầu tư nào</p>
                        <p className="text-gray-400 text-xs mt-1">Bấm "Thêm nhà đầu tư" để tạo hồ sơ hợp tác.</p>
                    </div>
                )}
            </div>

            {/* Modal Add/Edit */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">{editingId ? 'Chỉnh sửa nhà đầu tư' : 'Thêm nhà đầu tư mới'}</h3>
                            <p className="text-xs text-gray-500 mt-1">Cập nhật hồ sơ góp vốn và tài khoản chi trả</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Họ và tên</label>
                                <input 
                                    type="text" 
                                    value={formData.name} 
                                    onChange={handleChange('name')} 
                                    placeholder="Nguyễn Văn A" 
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm`} 
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Số điện thoại</label>
                                <input 
                                    type="text" 
                                    value={formData.phone} 
                                    onChange={handleChange('phone')} 
                                    placeholder="0901234567" 
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm`} 
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Số tài khoản</label>
                                    <input 
                                        type="text" 
                                        value={formData.bankAccount} 
                                        onChange={handleChange('bankAccount')} 
                                        placeholder="1234567890" 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm font-mono" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tên ngân hàng</label>
                                    <input 
                                        type="text" 
                                        value={formData.bankName} 
                                        onChange={handleChange('bankName')} 
                                        placeholder="Vietcombank" 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Ghi chú góp vốn</label>
                                <textarea 
                                    value={formData.note} 
                                    onChange={handleChange('note')} 
                                    placeholder="Góp 2 xe dòng Minio Green từ tháng 7/2026..." 
                                    rows={2}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm resize-none" 
                                />
                            </div>

                            <div className="flex gap-3 pt-3 border-t border-gray-50">
                                <button type="button" onClick={handleCloseModal} className="flex-1 px-4 py-2.5 border rounded-xl hover:bg-gray-50 font-semibold text-sm text-gray-700">Hủy</button>
                                <button type="submit" disabled={saving} className="flex-1 px-4 py-2.5 bg-taxi-500 hover:bg-taxi-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-taxi-500/20 flex items-center justify-center gap-1.5 disabled:opacity-50">
                                    {saving && <Loader2 size={16} className="animate-spin" />}
                                    <span>Lưu</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirm */}
            {deleteConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Xác nhận xóa</h3>
                        <p className="text-gray-500 text-sm mb-6">Bạn có chắc chắn muốn xóa hồ sơ nhà đầu tư này? Các xe đang liên kết sẽ được đưa về sở hữu của Công ty.</p>
                        <div className="flex gap-3">
                            <button onClick={() => setDeleteConfirm(null)} className="flex-1 px-4 py-2.5 border rounded-xl hover:bg-gray-50 font-medium text-sm text-gray-700 transition-colors">Hủy</button>
                            <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 font-medium text-sm transition-all shadow-lg shadow-red-500/20">Xóa</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
