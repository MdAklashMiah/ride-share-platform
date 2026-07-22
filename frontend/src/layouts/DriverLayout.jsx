import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Car, User, Settings, LogOut, Wallet, History, MapPin } from 'lucide-react'

export default function DriverLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/driver/dashboard" className="flex items-center space-x-2">
            <Car className="h-6 w-6 text-luxury-gold" />
            <span className="text-xl font-bold font-heading">Veloce <span className="text-sm font-normal text-muted-foreground">Driver</span></span>
          </Link>
          
          <nav className="flex items-center space-x-4">
            <Link to="/driver/map">
              <Button variant="ghost" size="icon">
                <MapPin className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/driver/wallet">
              <Button variant="ghost" size="icon">
                <Wallet className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/driver/history">
              <Button variant="ghost" size="icon">
                <History className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/driver/profile">
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
