import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { LayoutDashboard, Users, Car, DollarSign, Settings, LogOut, Ticket } from 'lucide-react'

export default function AdminLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/30 hidden lg:block">
        <div className="p-6">
          <Link to="/admin/dashboard" className="flex items-center space-x-2 mb-8">
            <Car className="h-6 w-6 text-brand-500" />
            <span className="text-xl font-bold font-heading">Veloce Admin</span>
          </Link>
          
          <nav className="space-y-2">
            <Link to="/admin/dashboard" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors">
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/users" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors">
              <Users className="h-5 w-5" />
              <span>Users</span>
            </Link>
            <Link to="/admin/drivers" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors">
              <Car className="h-5 w-5" />
              <span>Drivers</span>
            </Link>
            <Link to="/admin/rides" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors">
              <DollarSign className="h-5 w-5" />
              <span>Rides</span>
            </Link>
            <Link to="/admin/payments" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors">
              <Ticket className="h-5 w-5" />
              <span>Payments</span>
            </Link>
            <Link to="/admin/settings" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <h1 className="text-lg font-semibold">Admin Panel</h1>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
