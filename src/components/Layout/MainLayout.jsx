import Sidebar from './Sidebar'

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />

            {/* Main content */}
            <main className="lg:ml-64 min-h-screen">
                <div className="p-4 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
