# Veloce - Ride-Sharing Platform Frontend

A modern, responsive ride-sharing platform built with React, Tailwind CSS, and TypeScript-ready architecture.

## 🚀 Features

### Public Pages
- **Landing Page** - Hero section, features showcase, vehicle types, testimonials
- **Login/Register** - Authentication forms with validation using Zod + React Hook Form
- **Responsive Navigation** - Header and footer with navigation links

### User Dashboard
- Welcome message and quick stats (rides, spending, rating, wait time)
- Recent rides history
- Saved places management
- Quick book ride button

### Driver Dashboard  
- Online/Offline toggle
- Real-time earnings tracking
- Nearby ride requests with accept/decline actions
- Weekly performance overview

### Admin Dashboard
- Platform-wide statistics
- Quick action buttons for management tasks
- System health monitoring

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **TanStack Query** - Data fetching & caching
- **Lucide React** - Beautiful icons
- **Class Variance Authority** - Component variants

## 📁 Project Structure

```
src/
├── components/
│   └── ui/           # Reusable UI components (Button, Card, Input)
├── layouts/          # Layout wrappers for different user types
├── lib/              # Utilities and helpers
├── pages/            # Page components
│   ├── user/         # User-specific pages
│   ├── driver/       # Driver-specific pages
│   └── admin/        # Admin-specific pages
├── App.jsx           # Main app with routing
├── main.jsx          # Entry point with providers
└── index.css         # Global styles with Tailwind
```

## 🎨 Design System

### Colors
- **Brand**: Sky Blue (#0ea5e9) - Primary actions, rider experience
- **Luxury Gold** (#D4AF37) - Premium features, driver experience
- **Dark Theme Support** - Full dark mode with CSS variables

### Typography
- **Inter** - Body text
- **Plus Jakarta Sans** - Headings

## 🚦 Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔌 API Integration Points

The frontend is ready to connect to your backend:

1. **Authentication Service** (`src/services/auth.js`) - Login, register, logout
2. **User Service** (`src/services/user.js`) - Profile, ride history
3. **Driver Service** (`src/services/driver.js`) - Availability, earnings
4. **Admin Service** (`src/services/admin.js`) - Platform management
5. **WebSocket Service** (`src/services/socket.js`) - Real-time updates

## 📝 Next Steps

1. Connect authentication to your backend API
2. Implement real WebSocket connections for live tracking
3. Add map integration (Google Maps/Mapbox)
4. Implement payment processing
5. Add push notifications
6. Create comprehensive testing suite

## 📄 License

MIT License - feel free to use this for your projects!
