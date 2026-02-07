import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Dashboard from './pages/Dashboard'
import DriverList from './pages/Drivers/DriverList'
import DriverForm from './pages/Drivers/DriverForm'
import DepositList from './pages/Finance/DepositList'
import RevenueList from './pages/Revenue/RevenueList'
import RevenueForm from './pages/Revenue/RevenueForm'
import NightShiftCalendar from './pages/NightShift/NightShiftCalendar'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/drivers" element={<DriverList />} />
                    <Route path="/drivers/new" element={<DriverForm />} />
                    <Route path="/drivers/edit/:id" element={<DriverForm />} />
                    <Route path="/finance" element={<DepositList />} />
                    <Route path="/revenue" element={<RevenueList />} />
                    <Route path="/revenue/new" element={<RevenueForm />} />
                    <Route path="/night-shift" element={<NightShiftCalendar />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </MainLayout>
        </Router>
    )
}

export default App
