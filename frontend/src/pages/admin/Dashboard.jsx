import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Users, Car, DollarSign, TrendingUp, Activity, Ticket } from 'lucide-react'

export default function AdminDashboard() {
  const platformStats = {
    totalUsers: 12453,
    activeDrivers: 843,
    totalRides: 45678,
    revenue: 125430.50,
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold font-heading mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Platform overview and analytics</p>
      </motion.div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Users, label: "Total Users", value: platformStats.totalUsers.toLocaleString(), color: "text-brand-500", trend: "+12.5%" },
          { icon: Car, label: "Active Drivers", value: platformStats.activeDrivers.toLocaleString(), color: "text-luxury-gold", trend: "+8.2%" },
          { icon: Activity, label: "Total Rides", value: platformStats.totalRides.toLocaleString(), color: "text-blue-500", trend: "+23.1%" },
          { icon: DollarSign, label: "Revenue (MTD)", value: `$${(platformStats.revenue/1000).toFixed(1)}K`, color: "text-green-500", trend: "+15.3%" },
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

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Manage Users", icon: Users },
                { label: "Driver Approvals", icon: Car },
                { label: "Payment Issues", icon: Ticket },
                { label: "View Reports", icon: DollarSign },
              ].map((action, index) => (
                <Button key={index} variant="outline" className="h-auto py-4 flex flex-col items-center justify-center space-y-2">
                  <action.icon className="h-6 w-6" />
                  <span>{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { service: "API Server", status: "Operational", uptime: "99.9%" },
              { service: "Database", status: "Operational", uptime: "99.95%" },
              { service: "Payment Gateway", status: "Operational", uptime: "99.8%" },
              { service: "Socket Service", status: "Operational", uptime: "99.7%" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="font-medium">{service.service}</span>
                </div>
                <span className="text-sm text-muted-foreground">{service.uptime}</span>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
