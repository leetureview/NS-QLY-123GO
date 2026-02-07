import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save, Car, Calendar, DollarSign, Gift, AlertTriangle } from 'lucide-react'
import { revenueStorage, driverStorage, settingsStorage, initializeData } from '../../utils/storage'
import { mockDrivers, mockDeposits, mockRevenue } from '../../data/mockData'

export default function RevenueForm() {
    const navigate = useNavigate()
    const [drivers, setDrivers] = useState([])
    const [settings, setSettings] = useState({ driverSharePercent: 60 })
    const [formData, setFormData] = useState({ vehicleCode: '', driverName: '', month: '', amount: '', bonus: '', penalty: '' })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        initializeData(mockDrivers, mockDeposits, mockRevenue)
        const allDrivers = driverStorage.getAll()
        setDrivers(allDrivers)
        setSettings(settingsStorage.get())
        if (allDrivers.length > 0) {
            setFormData(prev => ({ ...prev, vehicleCode: allDrivers[0].vehicleCode, driverName: allDrivers[0].name }))
        }
        setFormData(prev => ({ ...prev, month: new Date().toISOString().slice(0, 7) }))
    }, [])

    const validate = () => {
        const newErrors = {}
        if (!formData.vehicleCode) newErrors.vehicleCode = 'Vui lòng chọn xe'
        if (!formData.month) newErrors.month = 'Vui lòng chọn tháng'
        if (!formData.amount || parseInt(formData.amount) <= 0) newErrors.amount = 'Vui lòng nhập doanh thu'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return
        revenueStorage.add({
            vehicleCode: formData.vehicleCode,
            driverName: formData.driverName,
            month: formData.month,
            amount: parseInt(formData.amount) || 0,
            bonus: parseInt(formData.bonus) || 0,
            penalty: parseInt(formData.penalty) || 0,
        })
        navigate('/revenue')
    }

    const handleVehicleChange = (e) => {
        const code = e.target.value
        const driver = drivers.find(d => d.vehicleCode === code)
        setFormData(prev => ({ ...prev, vehicleCode: code, driverName: driver?.name || '' }))
    }

    const formatCurrency = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val)

    const amount = parseInt(formData.amount) || 0
    const bonus = parseInt(formData.bonus) || 0
    const penalty = parseInt(formData.penalty) || 0
    const baseShare = (amount * settings.driverSharePercent) / 100
    const netAmount = baseShare + bonus - penalty

    return (
        <div className="animate-fade-in max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <Link to="/revenue" className="p-2 hover:bg-gray-100 rounded-xl"><ArrowLeft size={24} className="text-gray-600" /></Link>
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Nhập doanh thu</h1>
                    <p className="text-gray-500 mt-1">Nhập doanh thu và thưởng/phạt cho xe</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="space-y-5">
                    {/* Vehicle */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"><Car size={16} />Chọn xe</label>
                        <select value={formData.vehicleCode} onChange={handleVehicleChange} className={`w-full px-4 py-3 rounded-xl border ${errors.vehicleCode ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none bg-white`}>
                            {drivers.map(d => <option key={d.id} value={d.vehicleCode}>{d.vehicleCode} - {d.name}</option>)}
                        </select>
                    </div>

                    {/* Month */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"><Calendar size={16} />Tháng</label>
                        <input type="month" value={formData.month} onChange={(e) => setFormData(prev => ({ ...prev, month: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none" />
                    </div>

                    {/* Amount */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"><DollarSign size={16} />Doanh thu (VND)</label>
                        <input type="number" value={formData.amount} onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))} placeholder="15000000" className={`w-full px-4 py-3 rounded-xl border ${errors.amount ? 'border-red-300' : 'border-gray-200'} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none font-mono text-lg`} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Bonus */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-green-700 mb-2"><Gift size={16} />Tiền thưởng</label>
                            <input type="number" value={formData.bonus} onChange={(e) => setFormData(prev => ({ ...prev, bonus: e.target.value }))} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none font-mono bg-green-50" />
                        </div>
                        {/* Penalty */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-red-700 mb-2"><AlertTriangle size={16} />Tiền phạt</label>
                            <input type="number" value={formData.penalty} onChange={(e) => setFormData(prev => ({ ...prev, penalty: e.target.value }))} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none font-mono bg-red-50" />
                        </div>
                    </div>

                    {/* Calculation Preview */}
                    {amount > 0 && (
                        <div className="p-4 bg-gradient-to-r from-taxi-50 to-green-50 rounded-xl border border-taxi-200">
                            <h3 className="font-semibold text-gray-800 mb-3">Công thức tính lương</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between"><span>Doanh thu gốc:</span><span className="font-mono">{formatCurrency(amount)}</span></div>
                                <div className="flex justify-between text-taxi-700"><span>× {settings.driverSharePercent}% (phần tài xế):</span><span className="font-mono">{formatCurrency(baseShare)}</span></div>
                                {bonus > 0 && <div className="flex justify-between text-green-700"><span>+ Thưởng:</span><span className="font-mono">+{formatCurrency(bonus)}</span></div>}
                                {penalty > 0 && <div className="flex justify-between text-red-700"><span>- Phạt:</span><span className="font-mono">-{formatCurrency(penalty)}</span></div>}
                                <div className="flex justify-between pt-2 border-t border-taxi-200 text-lg font-bold">
                                    <span>= Thực nhận:</span>
                                    <span className={netAmount >= 0 ? 'text-green-600' : 'text-red-600'}>{formatCurrency(netAmount)}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex gap-3 mt-6">
                    <Link to="/revenue" className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-center">Hủy</Link>
                    <button type="submit" className="flex-1 px-4 py-3 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium flex items-center justify-center gap-2">
                        <Save size={20} /><span>Lưu</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
