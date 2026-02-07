import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, Save, User, Car, Hash, Camera } from 'lucide-react'
import { driverStorage, depositStorage } from '../../utils/storage'
import { vehicleTypes } from '../../data/mockData'

export default function DriverForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isEditing = Boolean(id)

    const [formData, setFormData] = useState({ name: '', licensePlate: '', vehicleType: vehicleTypes[0], vehicleCode: '', avatar: null })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (isEditing) {
            const driver = driverStorage.getById(id)
            if (driver) setFormData({ name: driver.name, licensePlate: driver.licensePlate, vehicleType: driver.vehicleType, vehicleCode: driver.vehicleCode, avatar: driver.avatar || null })
            else navigate('/drivers')
        }
    }, [id, isEditing, navigate])

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên'
        if (!formData.licensePlate.trim()) newErrors.licensePlate = 'Vui lòng nhập biển số xe'
        if (!formData.vehicleCode.trim()) newErrors.vehicleCode = 'Vui lòng nhập mã số xe'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return
        if (isEditing) {
            driverStorage.update(id, formData)
        } else {
            const newDriver = driverStorage.add(formData)
            depositStorage.createForDriver(newDriver)
        }
        navigate('/drivers')
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

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"><Car size={16} />Biển số xe</label>
                        <input type="text" value={formData.licensePlate} onChange={handleChange('licensePlate')} placeholder="30A-12345" className={`w-full px-4 py-3 rounded-xl border ${errors.licensePlate ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none font-mono`} />
                        {errors.licensePlate && <p className="text-red-500 text-sm mt-1">{errors.licensePlate}</p>}
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"><Car size={16} />Loại xe</label>
                        <select value={formData.vehicleType} onChange={handleChange('vehicleType')} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none bg-white">
                            {vehicleTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"><Hash size={16} />Mã số xe</label>
                        <input type="text" value={formData.vehicleCode} onChange={handleChange('vehicleCode')} placeholder="TX001" className={`w-full px-4 py-3 rounded-xl border ${errors.vehicleCode ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none font-mono uppercase`} />
                        {errors.vehicleCode && <p className="text-red-500 text-sm mt-1">{errors.vehicleCode}</p>}
                    </div>
                </div>

                <div className="flex gap-3 mt-8">
                    <Link to="/drivers" className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-center">Hủy</Link>
                    <button type="submit" className="flex-1 px-4 py-3 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium flex items-center justify-center gap-2">
                        <Save size={20} /><span>{isEditing ? 'Cập nhật' : 'Thêm mới'}</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
