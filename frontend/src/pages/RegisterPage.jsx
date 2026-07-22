import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Car, Mail, Lock, User as UserIcon, Phone } from 'lucide-react'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  role: z.enum(['rider', 'driver']),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

export default function RegisterPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  const defaultRole = searchParams.get('role') === 'driver' ? 'driver' : 'rider'

  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: defaultRole,
    },
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    setError('')
    
    try {
      console.log('Register data:', data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful registration
      navigate(data.role === 'driver' ? '/driver/dashboard' : '/user/dashboard')
    } catch (err) {
      setError('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-luxury-gold/10 py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Car className="h-12 w-12 text-brand-500" />
          </div>
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>
            Join Veloce and start your journey today
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                {error}
              </div>
            )}
            
            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => watch('role') === 'rider' ? null : watch('role')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  watch('role') === 'rider' 
                    ? 'border-brand-500 bg-brand-50' 
                    : 'border-input hover:border-primary/50'
                }`}
              >
                <div className="font-medium">Rider</div>
                <div className="text-xs text-muted-foreground">Book rides</div>
              </button>
              <button
                type="button"
                className={`p-3 rounded-lg border-2 transition-all ${
                  watch('role') === 'driver' 
                    ? 'border-luxury-gold bg-yellow-50' 
                    : 'border-input hover:border-primary/50'
                }`}
              >
                <div className="font-medium">Driver</div>
                <div className="text-xs text-muted-foreground">Earn money</div>
              </button>
            </div>
            <input type="hidden" {...register('role')} value={watch('role') || 'rider'} />
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  {...register('name')}
                  placeholder="John Doe"
                  className="pl-10"
                  disabled={isLoading}
                />
              </div>
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10"
                  disabled={isLoading}
                />
              </div>
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  {...register('phone')}
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="pl-10"
                  disabled={isLoading}
                />
              </div>
              {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  {...register('password')}
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                  disabled={isLoading}
                />
              </div>
              {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  {...register('confirmPassword')}
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                  disabled={isLoading}
                />
              </div>
              {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>}
            </div>
            
            <Button 
              type="submit" 
              variant={watch('role') === 'driver' ? 'luxury' : 'brand'} 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
