import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, TrendingUp, Calendar, Car, Trash2, Loader2, ChevronDown, ChevronRight, Edit2, Check, X } from 'lucide-react'
import { revenueStorage, settingsStorage, advanceStorage, driverStorage } from '../../utils/firebaseStorage'

export default function RevenueList() {
    const [revenues, setRevenues] = useState([])
    const [advances, setAdvances] = useState([])
    const [drivers, setDrivers] = useState([])
    const [settings, setSettings] = useState({ driverSharePercent: 60, sharesByVehicleType: {} })
    const [selectedMonth, setSelectedMonth] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [loading, setLoading] = useState(true)
    const [expandedRows, setExpandedRows] = useState(new Set())
    const [editingId, setEditingId] = useState(null)
    const [editForm, setEditForm] = useState({})

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        setLoading(true)
        try {
            const [revenueData, settingsData, advanceData, driverData] = await Promise.all([
                revenueStorage.getAll(),
                settingsStorage.get(),
                advanceStorage.getAll(),
                driverStorage.getAll()
            ])
            setRevenues(revenueData)
            setSettings(settingsData)
            setAdvances(advanceData)
            setDrivers(driverData)

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

    const toggleRow = (id) => {
        const newExpanded = new Set(expandedRows)
        if (newExpanded.has(id)) {
            newExpanded.delete(id)
        } else {
            newExpanded.add(id)
        }
        setExpandedRows(newExpanded)
    }

    const formatCurrency = (amount) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)

    const handleDelete = async (ids) => {
        setLoading(true)
        if (Array.isArray(ids)) {
            for (const id of ids) {
                await revenueStorage.delete(id)
            }
        } else {
            await revenueStorage.delete(ids)
        }
        await loadData()
        setDeleteConfirm(null)
    }

    const handleEditClick = (record) => {
        setEditingId(record.id)
        setEditForm({ ...record })
    }

    const handleCancelEdit = () => {
        setEditingId(null)
        setEditForm({})
    }

    const handleSaveEdit = async () => {
        setLoading(true)
        await revenueStorage.update(editingId, {
            amount: Number(editForm.amount) || 0,
            bonus: Number(editForm.bonus) || 0,
            airportSubsidy: Number(editForm.airportSubsidy) || 0,
            penalty: Number(editForm.penalty) || 0,
        })
        setEditingId(null)
        await loadData()
    }

    const months = [...new Set(revenues.map(r => r.month))].sort().reverse()
    const filteredRevenues = selectedMonth ? revenues.filter(r => r.month === selectedMonth) : revenues

    const aggregatedRevenues = Object.values(filteredRevenues.reduce((acc, r) => {
        const key = `${r.vehicleCode}-${r.month}`
        if (!acc[key]) {
            acc[key] = {
                id: key,
                ids: [],
                vehicleCode: r.vehicleCode,
                driverName: r.driverName,
                month: r.month,
                amount: 0,
                bonus: 0,
                penalty: 0,
                airportSubsidy: 0
            }
        }
        acc[key].ids.push(r.id)
        acc[key].amount += (Number(r.amount) || 0)
        acc[key].bonus += (Number(r.bonus) || 0)
        acc[key].penalty += (Number(r.penalty) || 0)
        acc[key].airportSubsidy += (Number(r.airportSubsidy) || 0)

        // Store children
        if (!acc[key].records) acc[key].records = []
        acc[key].records.push(r)

        return acc
    }, {})).sort((a, b) => {
        if (a.month !== b.month) return b.month.localeCompare(a.month)
        return a.vehicleCode.localeCompare(b.vehicleCode)
    })

    const totalRevenue = aggregatedRevenues.reduce((sum, r) => sum + r.amount, 0)
    const formatMonth = (m) => `Tháng ${parseInt(m.split('-')[1])}/${m.split('-')[0]}`

    const getAdvanceAmount = (r) => {
        return advances
            .filter(a => a.driverName === r.driverName && a.date && a.date.startsWith(r.month))
            .reduce((sum, a) => sum + (Number(a.amount) || 0), 0)
    }

    const getDriverVehicleType = (driverName, vehicleCode) => {
        const foundDriver = drivers.find(d => d.name === driverName || d.vehicleCode === vehicleCode)
        return foundDriver ? foundDriver.vehicleType : null
    }

    const getDriverSharePercent = (driverName, vehicleCode) => {
        const vehicleType = getDriverVehicleType(driverName, vehicleCode)
        return settings.sharesByVehicleType?.[vehicleType] ?? settings.driverSharePercent ?? 60
    }

    const calcNet = (r) => {
        const totalAmount = (r.amount || 0) + (r.airportSubsidy || 0)
        const sharePercent = getDriverSharePercent(r.driverName, r.vehicleCode)
        const base = (totalAmount * sharePercent) / 100
        const advanceAmount = getAdvanceAmount(r)
        return base + (r.bonus || 0) - (r.penalty || 0) - advanceAmount
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
                                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">Bù sân bay</th>
                                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">Phạt</th>
                                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">Tạm ứng</th>
                                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">Thực nhận</th>
                                <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {aggregatedRevenues.map(r => (
                                <React.Fragment key={r.id}>
                                    <tr className={`hover:bg-gray-50 transition-colors ${expandedRows.has(r.id) ? 'bg-blue-50/30' : ''}`}>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <button onClick={() => toggleRow(r.id)} className="p-1 hover:bg-gray-200 rounded text-gray-500">
                                                    {expandedRows.has(r.id) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                                </button>
                                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg font-mono text-sm"><Car size={14} />{r.vehicleCode}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 font-medium">
                                            {r.driverName}
                                            {!selectedMonth && <div className="text-xs text-gray-500 mt-0.5">{formatMonth(r.month)}</div>}
                                        </td>
                                        <td className="px-4 py-3 text-right font-mono font-medium">{formatCurrency(r.amount || 0)}</td>
                                        <td className="px-4 py-3 text-right font-mono text-green-600 font-medium">{r.bonus > 0 ? `+${formatCurrency(r.bonus)}` : '-'}</td>
                                        <td className="px-4 py-3 text-right font-mono text-orange-500 font-medium">{r.airportSubsidy > 0 ? `+${formatCurrency(r.airportSubsidy)}` : '-'}</td>
                                        <td className="px-4 py-3 text-right font-mono text-red-600 font-medium">{r.penalty > 0 ? `-${formatCurrency(r.penalty)}` : '-'}</td>
                                        <td className="px-4 py-3 text-right font-mono text-orange-600 font-medium">
                                            {getAdvanceAmount(r) > 0 ? `-${formatCurrency(getAdvanceAmount(r))}` : '-'}
                                        </td>
                                        <td className="px-4 py-3 text-right shadow-sm bg-taxi-50/50">
                                            <div className="font-bold text-taxi-600 text-lg">{formatCurrency(calcNet(r))}</div>
                                            <div className="text-[10px] text-gray-400 font-medium">Ăn chia {getDriverSharePercent(r.driverName, r.vehicleCode)}%</div>
                                        </td>
                                        <td className="px-4 py-3"><button onClick={() => setDeleteConfirm(r.ids)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg" title="Xóa toàn bộ doanh thu tháng này của xe"><Trash2 size={16} /></button></td>
                                    </tr>

                                    {/* Expanded Records */}
                                    {expandedRows.has(r.id) && (
                                        <tr>
                                            <td colSpan="9" className="p-0 bg-gray-50 border-b">
                                                <div className="px-8 py-3 animate-fade-in">
                                                    <table className="w-full text-sm">
                                                        <thead>
                                                            <tr className="text-gray-500">
                                                                <th className="text-left font-medium py-2 w-32 pb-2 border-b">Ngày nhật trình</th>
                                                                <th className="text-right font-medium py-2 pb-2 border-b">Doanh thu</th>
                                                                <th className="text-right font-medium py-2 pb-2 border-b">Thưởng</th>
                                                                <th className="text-right font-medium py-2 pb-2 border-b">Bù sân bay</th>
                                                                <th className="text-right font-medium py-2 pb-2 border-b">Phạt</th>
                                                                <th className="text-right font-medium py-2 w-16 pb-2 border-b"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {r.records?.sort((a, b) => (b.date || '').localeCompare(a.date || '')).map(record => (
                                                                <tr key={record.id} className="hover:bg-white transition-colors">
                                                                    <td className="py-2.5 font-mono text-gray-600 border-b border-gray-100">{record.date ? record.date.split('-').reverse().join('/') : 'N/A'}</td>

                                                                    {editingId === record.id ? (
                                                                        <>
                                                                            <td className="py-2.5 text-right font-mono border-b border-gray-100">
                                                                                <input type="number" value={editForm.amount} onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })} className="w-24 px-2 py-1 border rounded text-right outline-none focus:border-taxi-500" />
                                                                            </td>
                                                                            <td className="py-2.5 text-right font-mono border-b border-gray-100">
                                                                                <input type="number" value={editForm.bonus} onChange={(e) => setEditForm({ ...editForm, bonus: e.target.value })} className="w-20 px-2 py-1 border border-green-200 bg-green-50 rounded text-right text-green-700 outline-none focus:border-green-500" />
                                                                            </td>
                                                                            <td className="py-2.5 text-right font-mono border-b border-gray-100">
                                                                                <input type="number" value={editForm.airportSubsidy} onChange={(e) => setEditForm({ ...editForm, airportSubsidy: e.target.value })} className="w-20 px-2 py-1 border border-orange-200 bg-orange-50 rounded text-right text-orange-600 outline-none focus:border-orange-500" />
                                                                            </td>
                                                                            <td className="py-2.5 text-right font-mono border-b border-gray-100">
                                                                                <input type="number" value={editForm.penalty} onChange={(e) => setEditForm({ ...editForm, penalty: e.target.value })} className="w-20 px-2 py-1 border border-red-200 bg-red-50 rounded text-right text-red-600 outline-none focus:border-red-500" />
                                                                            </td>
                                                                            <td className="py-2.5 text-right border-b border-gray-100">
                                                                                <div className="flex justify-end gap-1">
                                                                                    <button onClick={handleSaveEdit} className="p-1.5 text-green-600 hover:bg-green-50 rounded" title="Lưu"><Check size={14} /></button>
                                                                                    <button onClick={handleCancelEdit} className="p-1.5 text-gray-400 hover:bg-gray-100 rounded" title="Hủy"><X size={14} /></button>
                                                                                </div>
                                                                            </td>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <td className="py-2.5 text-right font-mono border-b border-gray-100">{formatCurrency(record.amount || 0)}</td>
                                                                            <td className="py-2.5 text-right font-mono text-green-600 border-b border-gray-100">{record.bonus > 0 ? `+${formatCurrency(record.bonus)}` : '-'}</td>
                                                                            <td className="py-2.5 text-right font-mono text-orange-500 border-b border-gray-100">{record.airportSubsidy > 0 ? `+${formatCurrency(record.airportSubsidy)}` : '-'}</td>
                                                                            <td className="py-2.5 text-right font-mono text-red-600 border-b border-gray-100">{record.penalty > 0 ? `-${formatCurrency(record.penalty)}` : '-'}</td>
                                                                            <td className="py-2.5 text-right border-b border-gray-100">
                                                                                <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 hover-show items-center transition-opacity" style={{ opacity: 1 }}>
                                                                                    <button onClick={() => handleEditClick(record)} className="p-1.5 text-blue-500 hover:bg-blue-50 rounded" title="Sửa bản ghi này"><Edit2 size={14} /></button>
                                                                                    <button onClick={() => setDeleteConfirm(record.id)} className="p-1.5 text-red-400 hover:bg-red-50 rounded" title="Xóa bản ghi này"><Trash2 size={14} /></button>
                                                                                </div>
                                                                            </td>
                                                                        </>
                                                                    )}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
                {aggregatedRevenues.length === 0 && <div className="text-center py-12"><TrendingUp className="mx-auto text-gray-300 mb-4" size={48} /><p className="text-gray-500">Chưa có dữ liệu</p></div>}
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
