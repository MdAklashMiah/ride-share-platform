import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Car, Shield, Clock, CreditCard, MapPin, Star } from 'lucide-react'

export default function LandingPage() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-brand-500" />,
      title: "Precise Pickup",
      description: "Advanced geolocation ensures your driver finds you exactly where you are."
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-500" />,
      title: "Safety First",
      description: "Verified drivers, real-time tracking, and 24/7 support for your peace of mind."
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-500" />,
      title: "Lightning Fast",
      description: "Average wait time under 3 minutes. Your time is valuable."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-brand-500" />,
      title: "Cashless Payment",
      description: "Seamless payments through our secure wallet system or credit cards."
    }
  ]

  const vehicleTypes = [
    { name: "Veloce Eco", price: "$", description: "Affordable everyday rides", image: "🚗" },
    { name: "Veloce Comfort", price: "$$", description: "Spacious sedans for comfort", image: "🚙" },
    { name: "Veloce Luxury", price: "$$$", description: "Premium vehicles for special moments", image: "🏎️" }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-luxury-gold/10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
              Move Your Way
              <span className="block text-brand-500">With Veloce</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the future of urban mobility. Premium rides at the tap of a button. 
              Safe, reliable, and always on time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="brand" size="lg" className="w-full sm:w-auto text-lg px-8">
                  Get Started
                </Button>
              </Link>
              <Link to="/register?role=driver">
                <Button variant="luxury" size="lg" className="w-full sm:w-auto text-lg px-8">
                  Become a Driver
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* App Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 relative mx-auto max-w-5xl"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 border">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Car className="h-20 w-20 text-brand-500 mx-auto mb-4" />
                  <p className="text-lg font-medium text-slate-600">Interactive Map Preview</p>
                  <p className="text-sm text-slate-500">Real-time driver tracking coming soon</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading mb-4">Why Choose Veloce?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're redefining ride-sharing with focus on quality, safety, and reliability.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading mb-4">Choose Your Ride</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From everyday commutes to special occasions, we have the perfect vehicle for you.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border p-8 text-center hover:shadow-xl transition-all"
              >
                <div className="text-6xl mb-4">{vehicle.image}</div>
                <h3 className="text-2xl font-bold mb-1">{vehicle.name}</h3>
                <div className="text-brand-500 font-semibold mb-2">{vehicle.price}</div>
                <p className="text-muted-foreground mb-6">{vehicle.description}</p>
                <Link to="/register">
                  <Button variant="outline" className="w-full">Select {vehicle.name}</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-heading mb-4">Ready to Ride?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied riders experiencing the future of transportation.
            </p>
            <Link to="/register">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Create Free Account
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading mb-4">What Our Riders Say</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border bg-card"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Veloce has completely changed how I commute. The drivers are professional, 
                  the cars are clean, and the app is so easy to use."
                </p>
                <div className="font-semibold">Sarah M.</div>
                <div className="text-sm text-muted-foreground">Daily Rider</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
