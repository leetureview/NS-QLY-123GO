import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, Save, User, Car, Hash, Camera, Loader2, Calendar } from 'lucide-react'
import { driverStorage, depositStorage, vehicleStorage } from '../../utils/firebaseStorage'
import { vehicleTypes } from '../../data/mockData'

export default function DriverForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isEditing = Boolean(id)

    const [formData, setFormData] = useState({ 
        name: '', 
        licensePlate: '', 
        vehicleType: '', 
        vehicleCode: '', 
        avatar: null,
        registryExpiry: '',
        roadPermitExpiry: ''
    })
    const [vehicles, setVehicles] = useState([])
    const [selectedVehicleId, setSelectedVehicleId] = useState('')
    const [isManualVehicle, setIsManualVehicle] = useState(false)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        const initialize = async () => {
            setLoading(true)
            try {
                const vList = await vehicleStorage.getAll()
                setVehicles(vList)

                if (isEditing) {
                    const driver = await driverStorage.getById(id)
                    if (driver) {
                        setFormData({
                            name: driver.name,
                            licensePlate: driver.licensePlate || '',
                            vehicleType: driver.vehicleType || '',
                            vehicleCode: driver.vehicleCode || '',
                            avatar: driver.avatar || null,
                            registryExpiry: driver.registryExpiry || '',
                            roadPermitExpiry: driver.roadPermitExpiry || ''
                        })
                        if (driver.vehicleCode) {
                            const matched = vList.find(v => v.vehicleCode.toUpperCase() === driver.vehicleCode.toUpperCase())
                            if (matched) {
                                setSelectedVehicleId(matched.id)
                            } else {
                                setIsManualVehicle(true)
                            }
                        }
                    } else {
                        navigate('/drivers')
                    }
                }
            } catch (error) {
                console.error('Error initializing form:', error)
            }
            setLoading(false)
        }
        initialize()
    }, [id, isEditing])

    const toggleManualVehicle = () => {
        setIsManualVehicle(prev => {
            const nextVal = !prev
            if (nextVal) {
                setSelectedVehicleId('')
            } else {
                setFormData(prevForm => ({
                    ...prevForm,
                    vehicleCode: '',
                    licensePlate: '',
                    vehicleType: '',
                    registryExpiry: '',
                    roadPermitExpiry: ''
                }))
                setSelectedVehicleId('')
            }
            return nextVal
        })
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên'
        
        if (isManualVehicle) {
            if (!formData.vehicleCode.trim()) newErrors.vehicleCode = 'Vui lòng nhập mã số xe'
            if (!formData.licensePlate.trim()) newErrors.licensePlate = 'Vui lòng nhập biển kiểm soát'
        } else {
            if (!selectedVehicleId) newErrors.vehicleId = 'Vui lòng chọn phương tiện giao cho tài xế'
        }
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return

        setSaving(true)
        try {
            if (isEditing) {
                await driverStorage.update(id, formData)
            } else {
                const newDriver = await driverStorage.add(formData)
                if (newDriver) {
                    await depositStorage.createForDriver(newDriver)
                }
            }
            navigate('/drivers')
        } catch (error) {
            console.error('Error saving driver:', error)
            alert('Có lỗi xảy ra khi lưu dữ liệu!')
        }
        setSaving(false)
    }

    const handleVehicleChange = (e) => {
        const vId = e.target.value
        setSelectedVehicleId(vId)
        if (errors.vehicleId) setErrors(prev => ({ ...prev, vehicleId: null }))
        
        if (!vId) {
            setFormData(prev => ({
                ...prev,
                vehicleCode: '',
                licensePlate: '',
                vehicleType: '',
                registryExpiry: '',
                roadPermitExpiry: ''
            }))
        } else {
            const vehicle = vehicles.find(v => v.id === vId)
            if (vehicle) {
                setFormData(prev => ({
                    ...prev,
                    vehicleCode: vehicle.vehicleCode,
                    licensePlate: vehicle.licensePlate,
                    vehicleType: vehicle.vehicleType,
                    registryExpiry: vehicle.registryExpiry || '',
                    roadPermitExpiry: vehicle.roadPermitExpiry || ''
                }))
            }
        }
    }

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }))
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }))
    }

    const handleAvatarChange = (e) => {
        const file = e.target.files?.[0]
        if (!file) return
        if (file.size > 1024 * 1024) {
            alert('Ảnh phải nhỏ hơn 1MB')
            return
        }
        const reader = new FileReader()
        reader.onload = (e) => setFormData(prev => ({ ...prev, avatar: e.target?.result }))
        reader.readAsDataURL(file)
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-taxi-500" />
            </div>
        )
    }

    return (
        <div className="animate-fade-in max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <Link to="/drivers" className="p-2 hover:bg-gray-100 rounded-xl"><ArrowLeft size={24} className="text-gray-600" /></Link>
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{isEditing ? 'Chỉnh sửa tài xế' : 'Thêm tài xế mới'}</h1>
                    <p className="text-gray-500 mt-1">{isEditing ? 'Cập nhật thông tin' : 'Nhập thông tin tài xế mới'}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm">
                {/* Avatar */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="w-28 h-28 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center overflow-hidden">
                            {formData.avatar ? (
                                <img src={formData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                            ) : formData.name ? (
                                <span className="text-4xl font-bold">{formData.name.charAt(0).toUpperCase()}</span>
                            ) : (
                                <User size={48} />
                            )}
                        </div>
                        <label className="absolute bottom-0 right-0 w-10 h-10 bg-taxi-500 hover:bg-taxi-600 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg transition-colors">
                            <Camera size={20} />
                            <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                        </label>
                    </div>
                </div>
                <p className="text-center text-sm text-gray-500 mb-6">Click vào icon camera để tải ảnh lên (tối đa 1MB)</p>

                <div className="space-y-5">
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"><User size={16} />Họ và tên</label>
                        <input type="text" value={formData.name} onChange={handleChange('name')} placeholder="Nguyễn Văn A" className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none`} />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Chọn xe hoặc Nhập thủ công */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <Car size={16} className="text-taxi-500" />
                                Giao phương tiện
                            </label>
                            <button
                                type="button"
                                onClick={toggleManualVehicle}
                                className="text-xs text-taxi-600 hover:text-taxi-700 font-semibold transition-colors focus:outline-none"
                            >
                                {isManualVehicle ? 'Chọn từ danh sách xe' : 'Nhập xe thủ công'}
                            </button>
                        </div>
                        
                        {isManualVehicle ? (
                            <div className="space-y-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 animate-fade-in">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Mã số xe</label>
                                        <input
                                            type="text"
                                            value={formData.vehicleCode}
                                            onChange={(e) => {
                                                setFormData(prev => ({ ...prev, vehicleCode: e.target.value.toUpperCase() }))
                                                if (errors.vehicleCode) setErrors(prev => ({ ...prev, vehicleCode: null }))
                                            }}
                                            placeholder="TX001"
                                            className={`w-full px-4 py-2.5 rounded-xl border ${errors.vehicleCode ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm font-semibold`}
                                        />
                                        {errors.vehicleCode && <p className="text-red-500 text-xs mt-1">{errors.vehicleCode}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Biển kiểm soát</label>
                                        <input
                                            type="text"
                                            value={formData.licensePlate}
                                            onChange={(e) => {
                                                setFormData(prev => ({ ...prev, licensePlate: e.target.value.toUpperCase() }))
                                                if (errors.licensePlate) setErrors(prev => ({ ...prev, licensePlate: null }))
                                            }}
                                            placeholder="47H-12345"
                                            className={`w-full px-4 py-2.5 rounded-xl border ${errors.licensePlate ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm font-semibold font-mono`}
                                        />
                                        {errors.licensePlate && <p className="text-red-500 text-xs mt-1">{errors.licensePlate}</p>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Dòng xe</label>
                                        <select
                                            value={formData.vehicleType}
                                            onChange={handleChange('vehicleType')}
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none bg-white text-sm"
                                        >
                                            <option value="">-- Chọn dòng xe --</option>
                                            {vehicleTypes.map(t => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Hạn đăng kiểm</label>
                                        <input
                                            type="date"
                                            value={formData.registryExpiry}
                                            onChange={handleChange('registryExpiry')}
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Hạn giấy đi đường</label>
                                        <input
                                            type="date"
                                            value={formData.roadPermitExpiry}
                                            onChange={handleChange('roadPermitExpiry')}
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <select 
                                    value={selectedVehicleId} 
                                    onChange={handleVehicleChange} 
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.vehicleId ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none bg-white text-sm`}
                                >
                                    <option value="">-- Chọn xe giao cho tài xế --</option>
                                    {vehicles.map(v => (
                                        <option key={v.id} value={v.id}>
                                            {v.vehicleCode} ({v.licensePlate} - {v.vehicleType})
                                        </option>
                                    ))}
                                </select>
                                {errors.vehicleId && <p className="text-red-500 text-xs mt-1">{errors.vehicleId}</p>}
                            </div>
                        )}
                    </div>

                    {/* Xem trước thông tin xe được chọn (chỉ khi chọn từ danh sách) */}
                    {!isManualVehicle && selectedVehicleId && (
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 grid grid-cols-2 gap-4 text-xs animate-fade-in">
                            <div>
                                <p className="text-gray-400">Biển kiểm soát</p>
                                <p className="font-semibold text-gray-800 font-mono mt-0.5">{formData.licensePlate}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Dòng xe</p>
                                <p className="font-semibold text-gray-800 mt-0.5">{formData.vehicleType}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Hạn đăng kiểm</p>
                                <p className="font-semibold text-purple-600 mt-0.5">
                                    {formData.registryExpiry ? new Date(formData.registryExpiry).toLocaleDateString('vi-VN') : 'Chưa cập nhật'}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400">Hạn giấy đi đường</p>
                                <p className="font-semibold text-amber-600 mt-0.5">
                                    {formData.roadPermitExpiry ? new Date(formData.roadPermitExpiry).toLocaleDateString('vi-VN') : 'Chưa cập nhật'}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex gap-3 mt-8">
                    <Link to="/drivers" className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-center">Hủy</Link>
                    <button type="submit" disabled={saving} className="flex-1 px-4 py-3 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium flex items-center justify-center gap-2 disabled:opacity-50">
                        {saving ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
                        <span>{isEditing ? 'Cập nhật' : 'Thêm mới'}</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
