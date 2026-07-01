import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Edit2, Trash2, Car, Loader2, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react'
import { vehicleStorage, driverStorage } from '../../utils/firebaseStorage'
import { vehicleTypes } from '../../data/mockData'

export default function VehicleList() {
    const [vehicles, setVehicles] = useState([])
    const [drivers, setDrivers] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [loading, setLoading] = useState(true)
    const [migrating, setMigrating] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        setLoading(true)
        try {
            await vehicleStorage.deduplicateVehicles()
            const [vData, dData] = await Promise.all([
                vehicleStorage.getAll(),
                driverStorage.getAll()
            ])
            
            // If vehicles are empty, attempt auto-migration from drivers
            if (vData.length === 0 && dData.length > 0) {
                setMigrating(true)
                const count = await vehicleStorage.migrateFromDrivers()
                if (count > 0) {
                    const freshVehicles = await vehicleStorage.getAll()
                    setVehicles(freshVehicles)
                }
                setMigrating(false)
            } else {
                setVehicles(vData)
            }
            setDrivers(dData)
        } catch (error) {
            console.error('Error loading vehicles:', error)
        }
        setLoading(false)
    }

    const handleDelete = async (id) => {
        await vehicleStorage.delete(id)
        await loadData()
        setDeleteConfirm(null)
    }

    const handleManualMigrate = async () => {
        setMigrating(true)
        try {
            const count = await vehicleStorage.migrateFromDrivers()
            alert(`Đã di trú thành công ${count} đầu xe mới từ danh sách tài xế!`)
            await loadData()
        } catch (error) {
            console.error('Migration failed:', error)
            alert('Có lỗi xảy ra khi di trú dữ liệu!')
        }
        setMigrating(false)
    }

    const getAssignedDriver = (vehicleCode) => {
        if (!vehicleCode) return null
        return drivers.find(d => d.vehicleCode?.toUpperCase() === vehicleCode.toUpperCase())
    }

    const getExpiryStatus = (dateStr) => {
        if (!dateStr) return { label: 'Chưa cập nhật', classes: 'text-gray-400 bg-gray-50' }
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const expiry = new Date(dateStr)
        expiry.setHours(0, 0, 0, 0)
        
        const diffTime = expiry - today
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        
        if (diffDays < 0) {
            return { 
                label: `Hết hạn ${Math.abs(diffDays)} ngày`, 
                classes: 'text-red-700 bg-red-50 border border-red-100 font-semibold' 
            }
        } else if (diffDays <= 30) {
            return { 
                label: `Còn ${diffDays} ngày`, 
                classes: 'text-amber-700 bg-amber-50 border border-amber-100 font-semibold' 
            }
        } else {
            return { 
                label: new Date(dateStr).toLocaleDateString('vi-VN'), 
                classes: 'text-emerald-700 bg-emerald-50 border border-emerald-100 font-medium' 
            }
        }
    }

    const getDocumentWarningDot = (v) => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        let hasExpired = false
        let hasExpiringSoon = false

        const checkExpiry = (dateStr) => {
            if (!dateStr) return
            const expiry = new Date(dateStr)
            expiry.setHours(0, 0, 0, 0)
            const diffDays = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24))
            if (diffDays < 0) hasExpired = true
            else if (diffDays <= 30) hasExpiringSoon = true
        }

        checkExpiry(v.registryExpiry)
        checkExpiry(v.roadPermitExpiry)

        if (hasExpired) {
            return (
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full inline-block animate-pulse ml-2" title="Giấy tờ xe ĐÃ HẾT HẠN!" />
            )
        }
        if (hasExpiringSoon) {
            return (
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-full inline-block ml-2" title="Giấy tờ xe SẮP HẾT HẠN (< 30 ngày)" />
            )
        }
        return null
    }

    const filteredVehicles = vehicles.filter(v =>
        v.vehicleCode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.licensePlate?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.vehicleType?.toLowerCase().includes(searchTerm.toLowerCase())
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
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Quản lý xe</h1>
                    <p className="text-gray-500 mt-1">Danh sách {vehicles.length} phương tiện trong hệ thống</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button 
                        onClick={handleManualMigrate}
                        disabled={migrating}
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 bg-white text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-sm transition-all disabled:opacity-50"
                        title="Đồng bộ các mã xe hiện có từ thông tin tài xế"
                    >
                        {migrating ? <Loader2 size={16} className="animate-spin" /> : <RefreshCw size={16} />}
                        <span>Đồng bộ xe từ Tài xế</span>
                    </button>
                    <Link to="/vehicles/new" className="inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30 text-sm transition-all">
                        <Plus size={18} /><span>Thêm xe mới</span>
                    </Link>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm theo mã xe, biển kiểm soát, dòng xe..." 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm" 
                    />
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                {/* Desktop view */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase">
                            <tr>
                                <th className="px-6 py-4">Mã xe</th>
                                <th className="px-6 py-4">Biển kiểm soát</th>
                                <th className="px-6 py-4">Dòng xe</th>
                                <th className="px-6 py-4">Tài xế nhận xe</th>
                                <th className="px-6 py-4">Hạn đăng kiểm</th>
                                <th className="px-6 py-4">Hạn giấy đi đường</th>
                                <th className="px-6 py-4 text-center">Trạng thái</th>
                                <th className="px-6 py-4 text-right">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredVehicles.map(v => {
                                const driver = getAssignedDriver(v.vehicleCode)
                                return (
                                    <tr key={v.id} className="hover:bg-gray-50/50 transition-colors text-sm">
                                        <td className="px-6 py-4 font-bold text-taxi-600 flex items-center">
                                            {v.vehicleCode}
                                            {getDocumentWarningDot(v)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-mono bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-100 font-semibold">
                                                {v.licensePlate}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-700">{v.vehicleType}</td>
                                        <td className="px-6 py-4">
                                            {driver ? (
                                                <Link to={`/drivers/${driver.id}`} className="text-gray-900 font-medium hover:text-taxi-600 hover:underline">
                                                    {driver.name}
                                                </Link>
                                            ) : (
                                                <span className="text-gray-400 italic">Chưa giao tài xế</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs px-2.5 py-1 rounded-lg inline-block ${getExpiryStatus(v.registryExpiry).classes}`}>
                                                {getExpiryStatus(v.registryExpiry).label}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs px-2.5 py-1 rounded-lg inline-block ${getExpiryStatus(v.roadPermitExpiry).classes}`}>
                                                {getExpiryStatus(v.roadPermitExpiry).label}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                                                v.status === 'active' || !v.status ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                                                v.status === 'maintenance' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                                                'bg-red-50 text-red-700 border border-red-100'
                                            }`}>
                                                {v.status === 'active' || !v.status ? 'Đang hoạt động' :
                                                 v.status === 'maintenance' ? 'Bảo dưỡng' :
                                                 'Tạm ngưng'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <Link to={`/vehicles/edit/${v.id}`} className="p-2 text-gray-500 hover:text-taxi-600 hover:bg-taxi-50 rounded-lg transition-colors" title="Chỉnh sửa"><Edit2 size={16} /></Link>
                                                <button onClick={() => setDeleteConfirm(v.id)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Xóa"><Trash2 size={16} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Mobile view */}
                <div className="lg:hidden divide-y divide-gray-100">
                    {filteredVehicles.map(v => {
                        const driver = getAssignedDriver(v.vehicleCode)
                        return (
                            <div key={v.id} className="p-4 space-y-3 hover:bg-gray-50/50">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center">
                                            <span className="font-bold text-taxi-600 text-lg">{v.vehicleCode}</span>
                                            {getDocumentWarningDot(v)}
                                            <span className={`ml-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                                v.status === 'active' || !v.status ? 'bg-emerald-50 text-emerald-700' :
                                                v.status === 'maintenance' ? 'bg-amber-50 text-amber-700' :
                                                'bg-red-50 text-red-700'
                                            }`}>
                                                {v.status === 'active' || !v.status ? 'Đang chạy' :
                                                 v.status === 'maintenance' ? 'Bảo dưỡng' :
                                                 'Tạm ngưng'}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-mono font-semibold">{v.licensePlate}</span>
                                            <span className="text-xs text-gray-500">{v.vehicleType}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <Link to={`/vehicles/edit/${v.id}`} className="p-2 text-gray-500 hover:text-taxi-600 rounded-lg"><Edit2 size={16} /></Link>
                                        <button onClick={() => setDeleteConfirm(v.id)} className="p-2 text-gray-500 hover:text-red-600 rounded-lg"><Trash2 size={16} /></button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-gray-50">
                                    <div>
                                        <p className="text-gray-400">Tài xế hiện tại</p>
                                        <p className="font-medium text-gray-700 mt-0.5">
                                            {driver ? driver.name : <span className="text-gray-400 italic">Chưa giao</span>}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Thời hạn giấy tờ</p>
                                        <div className="space-y-1 mt-1">
                                            <p className="flex items-center justify-between text-[11px]">
                                                <span className="text-gray-500">Đăng kiểm:</span>
                                                <span className={`px-1.5 py-0.5 rounded font-medium ${getExpiryStatus(v.registryExpiry).classes}`}>
                                                    {getExpiryStatus(v.registryExpiry).label}
                                                </span>
                                            </p>
                                            <p className="flex items-center justify-between text-[11px]">
                                                <span className="text-gray-500">Giấy đi đường:</span>
                                                <span className={`px-1.5 py-0.5 rounded font-medium ${getExpiryStatus(v.roadPermitExpiry).classes}`}>
                                                    {getExpiryStatus(v.roadPermitExpiry).label}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {filteredVehicles.length === 0 && (
                    <div className="text-center py-12">
                        <Car className="mx-auto text-gray-300 mb-4" size={48} />
                        <p className="text-gray-500 font-medium">Chưa có phương tiện nào trên hệ thống</p>
                        <p className="text-gray-400 text-xs mt-1">Nhấp vào "Thêm xe mới" hoặc "Đồng bộ xe từ Tài xế" để bắt đầu.</p>
                    </div>
                )}
            </div>

            {deleteConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">Xác nhận xóa xe</h3>
                        <p className="text-gray-500 text-sm mb-6">Bạn có chắc chắn muốn xóa phương tiện này khỏi hệ thống? Dữ liệu tài xế liên kết sẽ tự động cập nhật.</p>
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
