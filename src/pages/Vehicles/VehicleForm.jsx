import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, Save, Car, Hash, Calendar, Loader2, CheckCircle2, Users } from 'lucide-react'
import { vehicleStorage, investorStorage } from '../../utils/firebaseStorage'
import { vehicleTypes } from '../../data/mockData'

export default function VehicleForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isEditing = Boolean(id)

    const [formData, setFormData] = useState({
        vehicleCode: '',
        licensePlate: '',
        vehicleType: vehicleTypes[0] || 'VF5',
        registryExpiry: '',
        roadPermitExpiry: '',
        status: 'active',
        investorId: ''
    })
    const [investors, setInvestors] = useState([])
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        loadInvestors()
        if (isEditing) {
            loadVehicle()
        }
    }, [id, isEditing])

    const loadInvestors = async () => {
        try {
            const list = await investorStorage.getAll()
            setInvestors(list)
        } catch (error) {
            console.error('Error loading investors:', error)
        }
    }

    const loadVehicle = async () => {
        setLoading(true)
        try {
            const vehicle = await vehicleStorage.getById(id)
            if (vehicle) {
                setFormData({
                    vehicleCode: vehicle.vehicleCode,
                    licensePlate: vehicle.licensePlate,
                    vehicleType: vehicle.vehicleType || vehicleTypes[0],
                    registryExpiry: vehicle.registryExpiry || '',
                    roadPermitExpiry: vehicle.roadPermitExpiry || '',
                    status: vehicle.status || 'active',
                    investorId: vehicle.investorId || ''
                })
            } else {
                navigate('/vehicles')
            }
        } catch (error) {
            console.error('Error loading vehicle:', error)
        }
        setLoading(false)
    }

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }))
        }
    }

    const validate = async () => {
        const tempErrors = {}
        if (!formData.vehicleCode.trim()) {
            tempErrors.vehicleCode = 'Mã số xe không được để trống'
        }
        if (!formData.licensePlate.trim()) {
            tempErrors.licensePlate = 'Biển kiểm soát không được để trống'
        }

        // Only check duplicates if creating a new vehicle
        if (!isEditing && formData.vehicleCode.trim()) {
            try {
                const existing = await vehicleStorage.getByVehicleCode(formData.vehicleCode.trim().toUpperCase())
                if (existing) {
                    tempErrors.vehicleCode = 'Mã số xe này đã tồn tại trên hệ thống!'
                }
            } catch (error) {
                console.error('Duplication check failed:', error)
            }
        }

        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = await validate()
        if (!isValid) return

        setSaving(true)
        try {
            const dataToSave = {
                ...formData,
                vehicleCode: formData.vehicleCode.trim().toUpperCase(),
                licensePlate: formData.licensePlate.trim().toUpperCase()
            }

            if (isEditing) {
                await vehicleStorage.update(id, dataToSave)
            } else {
                await vehicleStorage.create(dataToSave)
            }
            navigate('/vehicles')
        } catch (error) {
            console.error('Error saving vehicle:', error)
            alert(error.message || 'Có lỗi xảy ra khi lưu thông tin phương tiện!')
        }
        setSaving(false)
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-taxi-500" />
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto animate-fade-in space-y-6">
            <div className="flex items-center gap-4">
                <Link to="/vehicles" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    <ArrowLeft size={24} className="text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{isEditing ? 'Chỉnh sửa phương tiện' : 'Thêm phương tiện mới'}</h1>
                    <p className="text-sm text-gray-500">{isEditing ? 'Cập nhật thông tin chi tiết xe' : 'Thêm đầu xe mới vào danh mục phương tiện'}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Vehicle Code */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <Hash size={16} className="text-gray-400" />
                            Mã số xe
                        </label>
                        <input 
                            type="text" 
                            value={formData.vehicleCode} 
                            onChange={handleChange('vehicleCode')} 
                            placeholder="TX001" 
                            disabled={isEditing}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.vehicleCode ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none font-mono uppercase text-sm disabled:bg-gray-50 disabled:text-gray-400`} 
                        />
                        {errors.vehicleCode && <p className="text-red-500 text-xs mt-1">{errors.vehicleCode}</p>}
                    </div>

                    {/* License Plate */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <Car size={16} className="text-gray-400" />
                            Biển kiểm soát
                        </label>
                        <input 
                            type="text" 
                            value={formData.licensePlate} 
                            onChange={handleChange('licensePlate')} 
                            placeholder="30A-12345" 
                            className={`w-full px-4 py-3 rounded-xl border ${errors.licensePlate ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none font-mono uppercase text-sm`} 
                        />
                        {errors.licensePlate && <p className="text-red-500 text-xs mt-1">{errors.licensePlate}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Vehicle Type */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <Car size={16} className="text-gray-400" />
                            Dòng xe
                        </label>
                        <select 
                            value={formData.vehicleType} 
                            onChange={handleChange('vehicleType')} 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none bg-white text-sm"
                        >
                            {vehicleTypes.map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <CheckCircle2 size={16} className="text-gray-400" />
                            Trạng thái xe
                        </label>
                        <select 
                            value={formData.status} 
                            onChange={handleChange('status')} 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none bg-white text-sm"
                        >
                            <option value="active">Đang hoạt động</option>
                            <option value="maintenance">Bảo dưỡng / Sửa chữa</option>
                            <option value="inactive">Tạm ngưng</option>
                        </select>
                    </div>
                </div>

                {/* Investor Owner */}
                <div className="grid grid-cols-1 gap-4 border-t border-gray-50 pt-4">
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <Users size={16} className="text-taxi-500" />
                            Nhà đầu tư sở hữu xe
                        </label>
                        <select 
                            value={formData.investorId} 
                            onChange={handleChange('investorId')} 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none bg-white text-sm"
                        >
                            <option value="">-- Xe của Công ty (Không gán nhà đầu tư) --</option>
                            {investors.map(inv => (
                                <option key={inv.id} value={inv.id}>{inv.name} ({inv.phone})</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-50 pt-4">
                    {/* Registry Expiry */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <Calendar size={16} className="text-purple-500" />
                            Hạn đăng kiểm
                        </label>
                        <input 
                            type="date" 
                            value={formData.registryExpiry} 
                            onChange={handleChange('registryExpiry')} 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm" 
                        />
                    </div>

                    {/* Road Permit Expiry */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <Calendar size={16} className="text-amber-500" />
                            Hạn giấy đi đường
                        </label>
                        <input 
                            type="date" 
                            value={formData.roadPermitExpiry} 
                            onChange={handleChange('roadPermitExpiry')} 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm" 
                        />
                    </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-50">
                    <Link to="/vehicles" className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-center text-sm">Hủy</Link>
                    <button 
                        type="submit" 
                        disabled={saving} 
                        className="flex-1 px-4 py-3 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium flex items-center justify-center gap-2 disabled:opacity-50 text-sm shadow-lg shadow-taxi-500/20"
                    >
                        {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                        <span>{isEditing ? 'Cập nhật' : 'Thêm mới'}</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
