import { useEffect, useState } from 'react'
import { Wallet, CheckCircle, XCircle, Clock, Edit2, Loader2, Calendar, MessageSquare, Plus, Trash2 } from 'lucide-react'
import { depositStorage, paymentStorage } from '../../utils/firebaseStorage'

export default function DepositList() {
    const [deposits, setDeposits] = useState([])
    const [editingRequiredId, setEditingRequiredId] = useState(null)
    const [editRequiredAmount, setEditRequiredAmount] = useState('')
    const [filter, setFilter] = useState('all')
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    // Payments modal states
    const [paymentsModal, setPaymentsModal] = useState({ show: false, deposit: null })
    const [driverPayments, setDriverPayments] = useState([])
    const [newPayment, setNewPayment] = useState({
        amount: '',
        date: new Date().toISOString().split('T')[0],
        note: ''
    })

    useEffect(() => {
        loadDeposits()
    }, [])

    const loadDeposits = async () => {
        setLoading(true)
        // Load both deposits and active drivers
        const [depositData, driverData] = await Promise.all([
            depositStorage.getAll(),
            import('../../utils/firebaseStorage').then(m => m.driverStorage.getAll())
        ])

        // Filter deposits to only include those whose driverId is in the active driver list
        const activeDriverIds = new Set(driverData.map(d => d.id))
        const activeDeposits = depositData.filter(d => activeDriverIds.has(d.driverId))

        setDeposits(activeDeposits)
        setLoading(false)
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount)
    }

    const handleEditRequired = (deposit) => {
        setEditingRequiredId(deposit.id)
        setEditRequiredAmount(deposit.requiredAmount.toString())
    }

    const handleSaveRequired = async (driverId) => {
        setSaving(true)
        const amount = parseInt(editRequiredAmount) || 0
        await depositStorage.updateRequiredAmount(driverId, amount)
        await loadDeposits()
        setEditingRequiredId(null)
        setEditRequiredAmount('')
        setSaving(false)
    }

    const handleCancel = () => {
        setEditingRequiredId(null)
        setEditRequiredAmount('')
    }

    const handleOpenPayments = async (deposit) => {
        setPaymentsModal({ show: true, deposit })
        setNewPayment({
            amount: '',
            date: new Date().toISOString().split('T')[0],
            note: ''
        })
        const list = await paymentStorage.getByDriverId(deposit.driverId)
        setDriverPayments(list)
    }

    const handleAddPayment = async (e) => {
        e.preventDefault()
        const amt = parseInt(newPayment.amount) || 0
        if (amt <= 0) return

        setSaving(true)
        await paymentStorage.add({
            driverId: paymentsModal.deposit.driverId,
            driverName: paymentsModal.deposit.driverName,
            amount: amt,
            date: newPayment.date || new Date().toISOString().split('T')[0],
            note: newPayment.note
        })

        await loadDeposits()
        const list = await paymentStorage.getByDriverId(paymentsModal.deposit.driverId)
        setDriverPayments(list)
        setNewPayment({
            amount: '',
            date: new Date().toISOString().split('T')[0],
            note: ''
        })
        setSaving(false)
    }

    const handleDeletePayment = async (paymentId) => {
        setSaving(true)
        await paymentStorage.delete(paymentId)
        await loadDeposits()
        const list = await paymentStorage.getByDriverId(paymentsModal.deposit.driverId)
        setDriverPayments(list)
        setSaving(false)
    }

    const getStatusBadge = (status) => {
        switch (status) {
            case 'paid':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        <CheckCircle size={14} />
                        Đã đóng đủ
                    </span>
                )
            case 'partial':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        <Clock size={14} />
                        Đóng một phần
                    </span>
                )
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        <XCircle size={14} />
                        Chưa đóng
                    </span>
                )
        }
    }

    const filteredDeposits = deposits.filter(deposit => {
        if (filter === 'all') return true
        return deposit.status === filter
    })

    const stats = {
        total: deposits.length,
        paid: deposits.filter(d => d.status === 'paid').length,
        partial: deposits.filter(d => d.status === 'partial').length,
        unpaid: deposits.filter(d => d.status === 'unpaid').length,
        totalAmount: deposits.reduce((sum, d) => sum + (d.paidAmount || 0), 0),
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
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Quản lý tiền thế chân</h1>
                <p className="text-gray-500 mt-1">Theo dõi tiền cọc của tài xế</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Tổng thu</p>
                    <p className="text-xl font-bold text-gray-900">{formatCurrency(stats.totalAmount)}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <p className="text-sm text-green-600">Đã đóng đủ</p>
                    <p className="text-xl font-bold text-green-700">{stats.paid} tài xế</p>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
                    <p className="text-sm text-yellow-600">Đóng một phần</p>
                    <p className="text-xl font-bold text-yellow-700">{stats.partial} tài xế</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <p className="text-sm text-red-600">Chưa đóng</p>
                    <p className="text-xl font-bold text-red-700">{stats.unpaid} tài xế</p>
                </div>
            </div>

            {/* Filter */}
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
                <div className="flex flex-wrap gap-2">
                    {[
                        { value: 'all', label: 'Tất cả' },
                        { value: 'paid', label: 'Đã đóng đủ' },
                        { value: 'partial', label: 'Đóng một phần' },
                        { value: 'unpaid', label: 'Chưa đóng' },
                    ].map((option) => (
                        <button
                            key={option.value}
                            onClick={() => setFilter(option.value)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${filter === option.value
                                ? 'bg-taxi-500 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Deposit List */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {filteredDeposits.map((deposit) => (
                        <div key={deposit.id} className="p-4 lg:p-6 hover:bg-gray-50 transition-colors">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                {/* Driver Info */}
                                <div className="flex items-center gap-3 flex-1">
                                    <div className="w-12 h-12 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold text-lg">
                                        {deposit.driverName?.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{deposit.driverName}</h3>
                                        {deposit.lastPaymentDate && (
                                            <p className="text-sm text-gray-500">
                                                Thanh toán lần cuối: {deposit.lastPaymentDate}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Amount Info */}
                                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="text-right flex items-center gap-2">
                                            <div className="flex flex-col items-end">
                                                <p className="text-sm text-gray-500">Đã đóng / Yêu cầu</p>
                                                {editingRequiredId === deposit.id ? (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-gray-500">{formatCurrency(deposit.paidAmount || 0)} / </span>
                                                        <input
                                                            type="number"
                                                            value={editRequiredAmount}
                                                            onChange={(e) => setEditRequiredAmount(e.target.value)}
                                                            className="w-32 px-3 py-1 border border-gray-200 rounded-lg text-right font-mono"
                                                            autoFocus
                                                        />
                                                    </div>
                                                ) : (
                                                    <p className="font-semibold text-gray-900 flex items-center gap-2">
                                                        {formatCurrency(deposit.paidAmount || 0)} / {formatCurrency(deposit.requiredAmount)}
                                                    </p>
                                                )}
                                            </div>
                                            {editingRequiredId !== deposit.id && (
                                                <button
                                                    onClick={() => handleEditRequired(deposit)}
                                                    className="p-1 text-gray-400 hover:text-taxi-600 hover:bg-taxi-50 rounded transition-colors"
                                                    title="Sửa mức yêu cầu thế chân"
                                                >
                                                    <Edit2 size={14} />
                                                </button>
                                            )}
                                        </div>
                                        {getStatusBadge(deposit.status)}
                                    </div>

                                    {/* Actions */}
                                    {editingRequiredId === deposit.id ? (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={handleCancel}
                                                className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm"
                                            >
                                                Hủy
                                            </button>
                                            <button
                                                onClick={() => handleSaveRequired(deposit.driverId)}
                                                disabled={saving}
                                                className="px-3 py-1.5 bg-taxi-500 text-white hover:bg-taxi-600 rounded-lg text-sm font-medium flex items-center gap-1"
                                            >
                                                {saving && <Loader2 size={14} className="animate-spin" />}
                                                Lưu
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleOpenPayments(deposit)}
                                            className="p-2 text-gray-500 hover:text-taxi-600 hover:bg-taxi-50 rounded-lg transition-colors"
                                            title="Chi tiết đóng tiền thế chân"
                                        >
                                            <Edit2 size={18} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-4">
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all duration-500 ${deposit.status === 'paid'
                                            ? 'bg-green-500'
                                            : deposit.status === 'partial'
                                                ? 'bg-yellow-500'
                                                : 'bg-gray-300'
                                            }`}
                                        style={{ width: `${Math.min(((deposit.paidAmount || 0) / deposit.requiredAmount) * 100, 100)}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredDeposits.length === 0 && (
                    <div className="text-center py-12">
                        <Wallet className="mx-auto text-gray-300 mb-4" size={48} />
                        <p className="text-gray-500">Không có dữ liệu</p>
                    </div>
                )}
            </div>

            {/* Payments Modal */}
            {paymentsModal.show && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 animate-slide-in flex flex-col max-h-[90vh]">
                        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Chi tiết đóng tiền thế chân</h3>
                                <p className="text-gray-500 text-sm mt-0.5">
                                    Tài xế: <strong>{paymentsModal.deposit?.driverName}</strong>
                                </p>
                            </div>
                            <button
                                onClick={() => setPaymentsModal({ show: false, deposit: null })}
                                className="text-gray-400 hover:text-gray-600 text-xl font-semibold outline-none"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Modal Body: Split view */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 overflow-y-auto flex-1">
                            {/* Left column: Payments History */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-800 text-sm flex items-center gap-1.5">
                                    <Clock size={16} className="text-gray-400" />
                                    Lịch sử đóng tiền cọc
                                </h4>
                                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                                    {driverPayments.length > 0 ? (
                                        driverPayments.map(p => (
                                            <div key={p.id} className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex justify-between items-start">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                                        <Calendar size={12} />
                                                        <span>{new Date(p.date).toLocaleDateString('vi-VN')}</span>
                                                    </div>
                                                    <div className="font-bold text-emerald-600 text-sm">
                                                        {formatCurrency(p.amount)}
                                                    </div>
                                                    {p.note && (
                                                        <p className="text-xs text-gray-500 italic max-w-[180px] break-words">
                                                            "{p.note}"
                                                        </p>
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => handleDeletePayment(p.id)}
                                                    className="p-1 text-gray-400 hover:text-red-500 rounded transition-colors"
                                                    title="Xóa đợt đóng này"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-400 text-center py-8">
                                            Chưa có giao dịch đóng tiền nào.
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Right column: Add new Payment Form */}
                            <form onSubmit={handleAddPayment} className="space-y-4 border-t md:border-t-0 md:border-l border-gray-100 md:pl-6 pt-4 md:pt-0">
                                <h4 className="font-semibold text-gray-800 text-sm flex items-center gap-1.5">
                                    <Plus size={16} className="text-taxi-500" />
                                    Ghi nhận đóng tiền cọc
                                </h4>
                                
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                                            Số tiền đóng (VNĐ) <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            value={newPayment.amount}
                                            onChange={(e) => setNewPayment(prev => ({ ...prev, amount: e.target.value }))}
                                            placeholder="Ví dụ: 1000000"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm transition-all"
                                            min="1"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                                            Ngày đóng
                                        </label>
                                        <input
                                            type="date"
                                            value={newPayment.date}
                                            onChange={(e) => setNewPayment(prev => ({ ...prev, date: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm transition-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                                            Ghi chú
                                        </label>
                                        <textarea
                                            value={newPayment.note}
                                            onChange={(e) => setNewPayment(prev => ({ ...prev, note: e.target.value }))}
                                            placeholder="Nhập ghi chú (nếu có)"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm h-20 resize-none transition-all"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="w-full py-2.5 bg-taxi-500 text-white hover:bg-taxi-600 rounded-xl font-medium flex items-center justify-center gap-1.5 transition-colors text-sm"
                                >
                                    {saving && <Loader2 size={14} className="animate-spin" />}
                                    Xác nhận đóng tiền
                                </button>
                            </form>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end pt-4 border-t border-gray-100">
                            <button
                                onClick={() => setPaymentsModal({ show: false, deposit: null })}
                                className="px-5 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 rounded-xl text-sm font-medium transition-colors"
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
