import { useState, useEffect } from 'react'
import { Settings as SettingsIcon, Save, Percent, Building2, User, Loader2 } from 'lucide-react'
import { settingsStorage } from '../utils/firebaseStorage'

export default function Settings() {
    const [settings, setSettings] = useState({ driverSharePercent: 60, companySharePercent: 40 })
    const [saved, setSaved] = useState(false)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        loadSettings()
    }, [])

    const loadSettings = async () => {
        setLoading(true)
        try {
            const data = await settingsStorage.get()
            setSettings(data)
        } catch (error) {
            console.error('Error loading settings:', error)
        }
        setLoading(false)
    }

    const handleDriverChange = (value) => {
        const driver = Math.min(100, Math.max(0, parseInt(value) || 0))
        setSettings({ driverSharePercent: driver, companySharePercent: 100 - driver })
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

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-taxi-500" />
            </div>
        )
    }

    return (
        <div className="animate-fade-in max-w-2xl mx-auto">
            <div className="mb-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <SettingsIcon className="text-gray-500" />Cài đặt
                </h1>
                <p className="text-gray-500 mt-1">Cấu hình hệ thống quản lý taxi</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Percent size={20} className="text-taxi-500" />
                    Tỷ lệ ăn chia
                </h2>
                <p className="text-sm text-gray-500 mb-6">Cài đặt phần trăm chia doanh thu giữa tài xế và công ty</p>

                <div className="space-y-6">
                    {/* Driver share */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <User size={16} className="text-green-500" />
                            Tài xế nhận (%)
                        </label>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            value={settings.driverSharePercent}
                            onChange={(e) => handleDriverChange(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-2xl font-bold text-center"
                        />
                        <div className="mt-2 h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 transition-all" style={{ width: `${settings.driverSharePercent}%` }} />
                        </div>
                    </div>

                    {/* Company share */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <Building2 size={16} className="text-blue-500" />
                            Công ty nhận (%)
                        </label>
                        <div className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-2xl font-bold text-center text-gray-600">
                            {settings.companySharePercent}
                        </div>
                        <div className="mt-2 h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 transition-all" style={{ width: `${settings.companySharePercent}%` }} />
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="p-4 bg-taxi-50 rounded-xl border border-taxi-200">
                        <h3 className="font-semibold text-taxi-800 mb-2">Ví dụ minh họa</h3>
                        <p className="text-sm text-taxi-700">
                            Với doanh thu <strong>10,000,000 VND</strong>:
                        </p>
                        <div className="mt-2 space-y-1 text-sm">
                            <p className="text-green-700">• Tài xế nhận: <strong>{(10000000 * settings.driverSharePercent / 100).toLocaleString('vi-VN')} VND</strong></p>
                            <p className="text-blue-700">• Công ty nhận: <strong>{(10000000 * settings.companySharePercent / 100).toLocaleString('vi-VN')} VND</strong></p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    disabled={saving}
                    className={`w-full mt-6 px-4 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50 ${saved ? 'bg-green-500 text-white' : 'bg-taxi-500 text-white hover:bg-taxi-600'}`}
                >
                    {saving ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
                    {saved ? 'Đã lưu!' : 'Lưu cài đặt'}
                </button>
            </div>
        </div>
    )
}
