import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Edit2, Trash2, Car, Loader2 } from 'lucide-react'
import { driverStorage } from '../../utils/firebaseStorage'

export default function DriverList() {
    const [drivers, setDrivers] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadDrivers()
    }, [])

    const loadDrivers = async () => {
        setLoading(true)
        const data = await driverStorage.getAll()
        setDrivers(data)
        setLoading(false)
    }

    const handleDelete = async (id) => {
        await driverStorage.delete(id)
        await loadDrivers()
        setDeleteConfirm(null)
    }

    const filteredDrivers = drivers.filter(d =>
        d.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.licensePlate?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.vehicleCode?.toLowerCase().includes(searchTerm.toLowerCase())
    )

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
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Quản lý tài xế</h1>
                    <p className="text-gray-500 mt-1">Danh sách {drivers.length} tài xế</p>
                </div>
                <Link to="/drivers/new" className="inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30">
                    <Plus size={20} /><span>Thêm tài xế</span>
                </Link>
            </div>

            <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type="text" placeholder="Tìm kiếm..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none" />
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Tài xế</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Biển số</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Loại xe</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Mã xe</th>
                                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {filteredDrivers.map(d => (
                                <tr key={d.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {d.avatar ? (
                                                <img src={d.avatar} alt={d.name} className="w-10 h-10 rounded-full object-cover" />
                                            ) : (
                                                <div className="w-10 h-10 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold">{d.name?.charAt(0)}</div>
                                            )}
                                            <span className="font-medium text-gray-900">{d.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg font-mono text-sm">
                                            <Car size={14} />{d.licensePlate}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{d.vehicleType}</td>
                                    <td className="px-6 py-4 font-mono text-sm text-gray-600">{d.vehicleCode}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link to={`/drivers/edit/${d.id}`} className="p-2 text-gray-500 hover:text-taxi-600 hover:bg-taxi-50 rounded-lg"><Edit2 size={18} /></Link>
                                            <button onClick={() => setDeleteConfirm(d.id)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="lg:hidden divide-y">
                    {filteredDrivers.map(d => (
                        <div key={d.id} className="p-4 flex items-start gap-3">
                            {d.avatar ? (
                                <img src={d.avatar} alt={d.name} className="w-12 h-12 rounded-full object-cover" />
                            ) : (
                                <div className="w-12 h-12 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold text-lg">{d.name?.charAt(0)}</div>
                            )}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-900">{d.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-mono">{d.licensePlate}</span>
                                    <span className="text-xs text-gray-500">{d.vehicleCode}</span>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <Link to={`/drivers/edit/${d.id}`} className="p-2 text-gray-500 hover:text-taxi-600 rounded-lg"><Edit2 size={18} /></Link>
                                <button onClick={() => setDeleteConfirm(d.id)} className="p-2 text-gray-500 hover:text-red-600 rounded-lg"><Trash2 size={18} /></button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredDrivers.length === 0 && <div className="text-center py-12"><Car className="mx-auto text-gray-300 mb-4" size={48} /><p className="text-gray-500">Không tìm thấy tài xế</p></div>}
            </div>

            {deleteConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
                        <h3 className="text-lg font-semibold mb-2">Xác nhận xóa</h3>
                        <p className="text-gray-500 mb-6">Bạn có chắc muốn xóa tài xế này?</p>
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
