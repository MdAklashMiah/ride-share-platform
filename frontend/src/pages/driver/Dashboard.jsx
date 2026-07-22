import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Car, DollarSign, Clock, Star, TrendingUp, MapPin } from 'lucide-react'

export default function DriverDashboard() {
  const todayStats = {
    rides: 8,
    earnings: 245.50,
    hours: 6.5,
    rating: 4.95,
  }

  const recentRequests = [
    { id: 1, passenger: "John D.", from: "Downtown", to: "Airport", fare: "$45.20", distance: "12.5 km" },
    { id: 2, passenger: "Sarah M.", from: "Mall", to: "Restaurant District", fare: "$18.00", distance: "4.2 km" },
  ]

  return (
    <div className="space-y-8">
      {/* Header with Online Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold font-heading mb-2">Driver Dashboard</h1>
          <p className="text-muted-foreground">Track your earnings and manage rides</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Status</p>
            <p className="font-semibold text-green-600">Online</p>
          </div>
          <Button variant="luxury" size="lg">
            Go Offline
          </Button>
        </div>
      </motion.div>

      {/* Today's Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: DollarSign, label: "Today's Earnings", value: `$${todayStats.earnings}`, color: "text-green-500", trend: "+12%" },
          { icon: Car, label: "Total Rides", value: todayStats.rides, color: "text-brand-500", trend: "+3" },
          { icon: Clock, label: "Hours Online", value: `${todayStats.hours}h`, color: "text-blue-500", trend: "-0.5h" },
          { icon: Star, label: "Rating", value: todayStats.rating, color: "text-luxury-gold", trend: "+0.05" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <span className="text-xs font-medium text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.trend}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Ride Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Nearby Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRequests.map((request, index) => (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-brand-100 p-2 rounded-full">
                        <Car className="h-5 w-5 text-brand-500" />
                      </div>
                      <div>
                        <p className="font-semibold">{request.passenger}</p>
                        <p className="text-sm text-muted-foreground">{request.distance}</p>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-brand-600">{request.fare}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <span>{request.from}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-red-500" />
                      <span>{request.to}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">Decline</Button>
                    <Button variant="brand" size="sm" className="flex-1">Accept</Button>
                  </div>
                </motion.div>
              ))}
              
              {recentRequests.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Car className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No nearby requests at the moment</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Earnings Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-brand-500 mx-auto mb-3" />
                <p className="font-medium">Earnings Overview</p>
                <p className="text-sm text-muted-foreground">Chart visualization coming soon</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              {[
                { day: "Monday", amount: 320.50, rides: 12 },
                { day: "Tuesday", amount: 285.00, rides: 10 },
                { day: "Wednesday", amount: 410.75, rides: 15 },
              ].map((day, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium">{day.day}</p>
                    <p className="text-sm text-muted-foreground">{day.rides} rides</p>
                  </div>
                  <p className="font-bold text-green-600">${day.amount.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
