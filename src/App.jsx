import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Dashboard from './pages/Dashboard'
import DriverList from './pages/Drivers/DriverList'
import DriverForm from './pages/Drivers/DriverForm'
import DriverDetail from './pages/Drivers/DriverDetail'
import DepositList from './pages/Finance/DepositList'
import RevenueList from './pages/Revenue/RevenueList'
import RevenueForm from './pages/Revenue/RevenueForm'
import NightShiftCalendar from './pages/NightShift/NightShiftCalendar'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import ExpenseList from './pages/Finance/ExpenseList'
import ExpenseForm from './pages/Finance/ExpenseForm'
import AdvanceList from './pages/Finance/AdvanceList'
import AdvanceForm from './pages/Finance/AdvanceForm'
import VehicleList from './pages/Vehicles/VehicleList'
import VehicleForm from './pages/Vehicles/VehicleForm'
import InvestorList from './pages/Investors/InvestorList'
import InvestorReport from './pages/Investors/InvestorReport'

function App() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/drivers" element={<DriverList />} />
                    <Route path="/drivers/new" element={<DriverForm />} />
                    <Route path="/drivers/edit/:id" element={<DriverForm />} />
                    <Route path="/drivers/:id" element={<DriverDetail />} />
                    <Route path="/vehicles" element={<VehicleList />} />
                    <Route path="/vehicles/new" element={<VehicleForm />} />
                    <Route path="/vehicles/edit/:id" element={<VehicleForm />} />
                    <Route path="/investors" element={<InvestorList />} />
                    <Route path="/investors/reports" element={<InvestorReport />} />
                    <Route path="/finance" element={<DepositList />} />
                    <Route path="/revenue" element={<RevenueList />} />
                    <Route path="/revenue/new" element={<RevenueForm />} />
                    <Route path="/night-shift" element={<NightShiftCalendar />} />
                    <Route path="/expenses" element={<ExpenseList />} />
                    <Route path="/expenses/new" element={<ExpenseForm />} />
                    <Route path="/expenses/edit/:id" element={<ExpenseForm />} />
                    <Route path="/advances" element={<AdvanceList />} />
                    <Route path="/advances/new" element={<AdvanceForm />} />
                    <Route path="/advances/edit/:id" element={<AdvanceForm />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </MainLayout>
        </Router>
    )
}

export default App
