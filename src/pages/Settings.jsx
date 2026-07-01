import { useState, useEffect } from 'react'
import { Settings as SettingsIcon, Save, Percent, Building2, User, Loader2, Car, Plus, Trash2, Database, RefreshCw } from 'lucide-react'
import { settingsStorage, depositStorage } from '../utils/firebaseStorage'
import { vehicleTypes } from '../data/mockData'

export default function Settings() {
    const [settings, setSettings] = useState({ 
        driverSharePercent: 60, 
        companySharePercent: 40,
        sharesByVehicleType: {}
    })
    const [saved, setSaved] = useState(false)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [migrating, setMigrating] = useState(false)
    const [selectedNewVehicle, setSelectedNewVehicle] = useState('')

    useEffect(() => {
        loadSettings()
    }, [])

    const loadSettings = async () => {
        setLoading(true)
        try {
            const data = await settingsStorage.get()
            const updatedData = { ...data }
            if (!updatedData.sharesByVehicleType) {
                updatedData.sharesByVehicleType = {
                    'VF5': 60,
                    'Minio Green': 50
                }
            }
            setSettings(updatedData)
        } catch (error) {
            console.error('Error loading settings:', error)
        }
        setLoading(false)
    }

    const handleDriverChange = (value) => {
        const driver = Math.min(100, Math.max(0, parseInt(value) || 0))
        setSettings(prev => ({
            ...prev,
            driverSharePercent: driver,
            companySharePercent: 100 - driver
        }))
        setSaved(false)
    }

    const handleVehicleShareChange = (vehicleType, value) => {
        const val = Math.min(100, Math.max(0, parseInt(value) || 0))
        setSettings(prev => ({
            ...prev,
            sharesByVehicleType: {
                ...prev.sharesByVehicleType,
                [vehicleType]: val
            }
        }))
        setSaved(false)
    }

    const handleAddVehicleShare = () => {
        if (!selectedNewVehicle || settings.sharesByVehicleType[selectedNewVehicle] !== undefined) return
        setSettings(prev => ({
            ...prev,
            sharesByVehicleType: {
                ...prev.sharesByVehicleType,
                [selectedNewVehicle]: prev.driverSharePercent // default to global setting
            }
        }))
        setSelectedNewVehicle('')
        setSaved(false)
    }

    const handleRemoveVehicleShare = (vehicleType) => {
        setSettings(prev => {
            const updated = { ...prev.sharesByVehicleType }
            delete updated[vehicleType]
            return {
                ...prev,
                sharesByVehicleType: updated
            }
        })
        setSaved(false)
    }

    const handleSave = async () => {
        setSaving(true)
        try {
            await settingsStorage.save(settings)
            setSaved(true)
            setTimeout(() => setSaved(false), 2000)
        } catch (error) {
            console.error('Error saving settings:', error)
            alert('Có lỗi xảy ra khi lưu cài đặt!')
        }
        setSaving(false)
    }

    const handleMigrateDeposits = async () => {
        setMigrating(true)
        try {
            const count = await depositStorage.migrateLegacyDeposits()
            alert(`Đồng bộ thành công! Đã tạo lịch sử đóng cọc cho ${count} tài xế.`);
        } catch (error) {
            console.error('Migration failed:', error)
            alert('Có lỗi xảy ra trong quá trình đồng bộ!');
        }
        setMigrating(false)
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-taxi-500" />
            </div>
        )
    }

    // Filter out vehicle types that are already configured to populate the "add dropdown"
    const availableVehicleTypes = vehicleTypes.filter(
        t => settings.sharesByVehicleType[t] === undefined
    )

    return (
        <div className="animate-fade-in max-w-3xl mx-auto space-y-6">
            <div className="mb-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <SettingsIcon className="text-gray-500" />Cài đặt hệ thống
                </h1>
                <p className="text-gray-500 mt-1">Cấu hình tỷ lệ chia sẻ doanh thu mặc định và theo loại xe</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Global Settings Column */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Percent size={20} className="text-taxi-500" />
                            Ăn chia mặc định
                        </h2>
                        <p className="text-xs text-gray-400 mb-4">Áp dụng cho các dòng xe không cấu hình riêng biệt</p>

                        <div className="space-y-4">
                            {/* Driver share */}
                            <div>
                                <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2">
                                    <User size={14} className="text-green-500" />
                                    Tài xế mặc định (%)
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={settings.driverSharePercent}
                                    onChange={(e) => handleDriverChange(e.target.value)}
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-xl font-bold text-center"
                                />
                                <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 transition-all" style={{ width: `${settings.driverSharePercent}%` }} />
                                </div>
                            </div>

                            {/* Company share */}
                            <div>
                                <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2">
                                    <Building2 size={14} className="text-blue-500" />
                                    Công ty mặc định (%)
                                </label>
                                <div className="w-full px-3 py-2 bg-gray-50 rounded-xl border border-gray-200 text-xl font-bold text-center text-gray-500">
                                    {settings.companySharePercent}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview Info Box */}
                    <div className="p-4 bg-taxi-50 rounded-2xl border border-taxi-100 space-y-2">
                        <h3 className="font-semibold text-taxi-800 text-sm">Doanh thu 10,000,000 VND:</h3>
                        <div className="text-xs space-y-1">
                            <p className="text-green-700 font-medium">• Tài xế nhận: {(10000000 * settings.driverSharePercent / 100).toLocaleString('vi-VN')} VND</p>
                            <p className="text-blue-700 font-medium">• Công ty nhận: {(10000000 * settings.companySharePercent / 100).toLocaleString('vi-VN')} VND</p>
                        </div>
                    </div>

                    {/* Migration Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 space-y-4">
                        <div>
                            <h2 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                <Database size={16} className="text-amber-500" />
                                Đồng bộ tiền cọc cũ
                            </h2>
                            <p className="text-[11px] text-gray-400 mt-1">
                                Tự động chuyển đổi dữ liệu cọc đã đóng cũ sang bảng lịch sử thanh toán chi tiết. Chỉ chạy một lần sau khi deploy.
                            </p>
                        </div>
                        <button
                            onClick={handleMigrateDeposits}
                            disabled={migrating}
                            className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-sm"
                        >
                            {migrating ? <Loader2 size={14} className="animate-spin" /> : <RefreshCw size={14} />}
                            Đồng bộ ngay
                        </button>
                    </div>
                </div>

                {/* Vehicle-Specific Settings Column */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-3">
                            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <Car size={20} className="text-purple-500" />
                                Ăn chia theo loại xe
                            </h2>
                            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                                {Object.keys(settings.sharesByVehicleType || {}).length} dòng xe
                            </span>
                        </div>

                        {/* Add new vehicle share form */}
                        {availableVehicleTypes.length > 0 && (
                            <div className="flex gap-2 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <select 
                                    value={selectedNewVehicle} 
                                    onChange={(e) => setSelectedNewVehicle(e.target.value)}
                                    className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white outline-none focus:border-taxi-500"
                                >
                                    <option value="">-- Chọn loại xe cần cấu hình --</option>
                                    {availableVehicleTypes.map(t => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                                <button 
                                    onClick={handleAddVehicleShare}
                                    disabled={!selectedNewVehicle}
                                    className="px-4 py-2 bg-taxi-500 hover:bg-taxi-600 text-white rounded-lg font-medium text-sm flex items-center gap-1.5 disabled:opacity-50 transition-all shadow-sm"
                                >
                                    <Plus size={16} /> Thiết lập
                                </button>
                            </div>
                        )}

                        {/* List of Custom Vehicle Shares */}
                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
                            {Object.entries(settings.sharesByVehicleType || {}).map(([vehicle, percent]) => (
                                <div key={vehicle} className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3 relative group">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 bg-taxi-100 text-taxi-700 rounded-lg">
                                                <Car size={16} />
                                            </span>
                                            <span className="font-bold text-gray-800 text-sm">{vehicle}</span>
                                        </div>
                                        <button 
                                            onClick={() => handleRemoveVehicleShare(vehicle)}
                                            className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                            title="Xóa cấu hình riêng"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Driver Share */}
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Tài xế (%)</label>
                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                value={percent}
                                                onChange={(e) => handleVehicleShareChange(vehicle, e.target.value)}
                                                className="w-full px-3 py-1.5 rounded-lg border border-gray-200 focus:border-taxi-500 outline-none text-sm font-bold text-center"
                                            />
                                        </div>
                                        {/* Company Share (read-only) */}
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Công ty (%)</label>
                                            <div className="w-full px-3 py-1.5 bg-gray-200 border border-gray-300 text-gray-500 rounded-lg text-sm font-bold text-center">
                                                {100 - percent}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bars */}
                                    <div className="flex h-1.5 rounded-full overflow-hidden mt-1 bg-gray-200">
                                        <div className="bg-green-500 transition-all duration-300" style={{ width: `${percent}%` }} />
                                        <div className="bg-blue-500 transition-all duration-300" style={{ width: `${100 - percent}%` }} />
                                    </div>
                                </div>
                            ))}

                            {Object.keys(settings.sharesByVehicleType || {}).length === 0 && (
                                <div className="text-center py-8 text-gray-400 text-sm">
                                    Tất cả loại xe đều đang áp dụng tỷ lệ mặc định.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-md ${saved ? 'bg-green-500 text-white' : 'bg-taxi-500 text-white hover:bg-taxi-600 active:bg-taxi-700 shadow-taxi-500/20'}`}
                >
                    {saving ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
                    {saved ? 'Lưu thành công!' : 'Lưu tất cả thay đổi'}
                </button>
            </div>
        </div>
    )
}
