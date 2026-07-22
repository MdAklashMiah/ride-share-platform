import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Car, User, Settings, LogOut, Wallet, History } from 'lucide-react'

export default function UserLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/user/dashboard" className="flex items-center space-x-2">
            <Car className="h-6 w-6 text-brand-500" />
            <span className="text-xl font-bold font-heading">Veloce</span>
          </Link>
          
          <nav className="flex items-center space-x-4">
            <Link to="/user/ride">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Book Ride</Button>
            </Link>
            <Link to="/user/wallet">
              <Button variant="ghost" size="icon">
                <Wallet className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/user/history">
              <Button variant="ghost" size="icon">
                <History className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/user/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
