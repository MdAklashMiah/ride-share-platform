import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MapPin, Clock, DollarSign, Star, Car, Calendar } from 'lucide-react'

export default function UserDashboard() {
  const recentRides = [
    { id: 1, from: "Downtown", to: "Airport", date: "Today", fare: "$45.20", status: "Completed" },
    { id: 2, from: "Office", to: "Home", date: "Yesterday", fare: "$22.50", status: "Completed" },
    { id: 3, from: "Mall", to: "Restaurant", date: "Dec 18", fare: "$15.00", status: "Completed" },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold font-heading mb-2">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">Ready for your next ride?</p>
        </div>
        <Button variant="brand" size="lg" className="w-full md:w-auto">
          <Car className="mr-2 h-5 w-5" />
          Book a Ride
        </Button>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Car, label: "Total Rides", value: "47", color: "text-brand-500" },
          { icon: DollarSign, label: "Total Spent", value: "$1,234", color: "text-green-500" },
          { icon: Star, label: "Avg Rating", value: "4.9", color: "text-luxury-gold" },
          { icon: Clock, label: "Avg Wait", value: "3.2m", color: "text-blue-500" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Rides */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recent Rides</span>
                <Button variant="ghost" size="sm">View All</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRides.map((ride, index) => (
                  <motion.div
                    key={ride.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-brand-100 p-2 rounded-full">
                        <Car className="h-5 w-5 text-brand-500" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{ride.from}</span>
                          <span className="text-muted-foreground">→</span>
                          <span className="font-medium">{ride.to}</span>
                        </div>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {ride.date}
                          </span>
                          <span className="font-medium text-foreground">{ride.fare}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                      {ride.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Saved Places */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Saved Places</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Home", address: "123 Main St, Downtown" },
                { name: "Work", address: "456 Business Ave, Financial District" },
                { name: "Gym", address: "789 Fitness Blvd, Midtown" },
              ].map((place, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-3 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-brand-500" />
                    <div>
                      <p className="font-medium">{place.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{place.address}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                Add New Place
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
