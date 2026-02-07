import { NavLink, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, Wallet, TrendingUp, Car, Menu, X, Moon, FileText, Settings } from 'lucide-react'
import { useState } from 'react'

const menuItems = [
    { path: '/', name: 'Dashboard', icon: LayoutDashboard },
    { path: '/drivers', name: 'Quản lý tài xế', icon: Users },
    { path: '/night-shift', name: 'Lịch trực đêm', icon: Moon },
    { path: '/finance', name: 'Tiền thế chân', icon: Wallet },
    { path: '/revenue', name: 'Quản lý doanh thu', icon: TrendingUp },
    { path: '/reports', name: 'Báo cáo', icon: FileText },
    { path: '/settings', name: 'Cài đặt', icon: Settings },
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-sidebar text-white shadow-lg">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)} />}

            <aside className={`fixed top-0 left-0 h-full w-64 bg-sidebar text-white z-40 transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
                    <div className="w-10 h-10 bg-taxi-500 rounded-xl flex items-center justify-center"><Car size={24} className="text-white" /></div>
                    <div><h1 className="text-lg font-bold">NS-QLY</h1><p className="text-xs text-gray-400">Quản lý Taxi</p></div>
                </div>

                <nav className="mt-6 px-3">
                    <ul className="space-y-1">
                        {menuItems.map(item => {
                            const Icon = item.icon
                            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))
                            return (
                                <li key={item.path}>
                                    <NavLink to={item.path} onClick={() => setIsOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${isActive ? 'bg-taxi-500 text-white shadow-lg shadow-taxi-500/30' : 'text-gray-300 hover:bg-sidebar-hover hover:text-white'}`}>
                                        <Icon size={20} className={`transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-taxi-400'}`} />
                                        <span className="font-medium">{item.name}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-8 h-8 bg-taxi-600 rounded-full flex items-center justify-center text-sm font-semibold">A</div>
                        <div className="flex-1 min-w-0"><p className="text-sm font-medium truncate">Admin</p><p className="text-xs text-gray-400 truncate">admin@taxi.vn</p></div>
                    </div>
                </div>
            </aside>
        </>
    )
}
