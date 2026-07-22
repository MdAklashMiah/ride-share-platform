import { Routes, Route } from 'react-router-dom'

// Layouts
import PublicLayout from './layouts/PublicLayout'
import UserLayout from './layouts/UserLayout'
import DriverLayout from './layouts/DriverLayout'
import AdminLayout from './layouts/AdminLayout'

// Pages - Public
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

// Placeholder pages (will be built in subsequent steps)
import UserDashboard from './pages/user/Dashboard'
import DriverDashboard from './pages/driver/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* User Routes */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
      </Route>

      {/* Driver Routes */}
      <Route path="/driver" element={<DriverLayout />}>
        <Route path="dashboard" element={<DriverDashboard />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  )
}

export default App
