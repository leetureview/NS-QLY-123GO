import { useEffect, useState } from 'react'
import { Wallet, CheckCircle, XCircle, Clock, Edit2 } from 'lucide-react'
import { depositStorage, initializeData } from '../../utils/storage'
import { mockDrivers, mockDeposits, mockRevenue } from '../../data/mockData'

export default function DepositList() {
    const [deposits, setDeposits] = useState([])
    const [editingId, setEditingId] = useState(null)
    const [editAmount, setEditAmount] = useState('')
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        initializeData(mockDrivers, mockDeposits, mockRevenue)
        loadDeposits()
    }, [])

    const loadDeposits = () => {
        setDeposits(depositStorage.getAll())
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount)
    }

    const handleEdit = (deposit) => {
        setEditingId(deposit.id)
        setEditAmount(deposit.paidAmount.toString())
    }

    const handleSave = (driverId) => {
        const amount = parseInt(editAmount) || 0
        depositStorage.update(driverId, amount)
        loadDeposits()
        setEditingId(null)
        setEditAmount('')
    }

    const handleCancel = () => {
        setEditingId(null)
        setEditAmount('')
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
        totalAmount: deposits.reduce((sum, d) => sum + d.paidAmount, 0),
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
                                        {deposit.driverName.charAt(0)}
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
                                        <div className="text-right">
                                            <p className="text-sm text-gray-500">Đã đóng / Yêu cầu</p>
                                            {editingId === deposit.id ? (
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="number"
                                                        value={editAmount}
                                                        onChange={(e) => setEditAmount(e.target.value)}
                                                        className="w-32 px-3 py-1 border border-gray-200 rounded-lg text-right font-mono"
                                                        autoFocus
                                                    />
                                                    <span className="text-gray-500">/ {formatCurrency(deposit.requiredAmount)}</span>
                                                </div>
                                            ) : (
                                                <p className="font-semibold text-gray-900">
                                                    {formatCurrency(deposit.paidAmount)} / {formatCurrency(deposit.requiredAmount)}
                                                </p>
                                            )}
                                        </div>
                                        {getStatusBadge(deposit.status)}
                                    </div>

                                    {/* Actions */}
                                    {editingId === deposit.id ? (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={handleCancel}
                                                className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm"
                                            >
                                                Hủy
                                            </button>
                                            <button
                                                onClick={() => handleSave(deposit.driverId)}
                                                className="px-3 py-1.5 bg-taxi-500 text-white hover:bg-taxi-600 rounded-lg text-sm font-medium"
                                            >
                                                Lưu
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleEdit(deposit)}
                                            className="p-2 text-gray-500 hover:text-taxi-600 hover:bg-taxi-50 rounded-lg transition-colors"
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
                                        style={{ width: `${Math.min((deposit.paidAmount / deposit.requiredAmount) * 100, 100)}%` }}
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
        </div>
    )
}
