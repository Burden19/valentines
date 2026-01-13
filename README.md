# Long Distance Love 🌍💕

A heartfelt, interactive web experience celebrating love across continents. Built as a Valentine's Day gift, this project combines modern web technologies with emotional storytelling to create a unique digital love letter.

![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.171-black?style=flat-square&logo=three.js)

## ✨ Features

### 🌐 Interactive 3D Globe
- Real-time rotating Earth model with custom 3D pin markers
- Accurate geolocation for Sfax, Tunisia and Leeuwarden, Netherlands
- Animated flight path connecting two cities across the globe
- Built with Three.js and React Three Fiber

### 💝 Personalized Content
- **Valentine's Day Header**: Custom greeting message
- **5 Reasons Interactive Cards**: Click-to-reveal reasons with smooth animations
- **Timeline Component**: Visual journey of relationship milestones
- **Secret Letter**: Hidden message that unfolds with animation

### 🌦️ Real-Time Features
- **Live Weather Integration**: Fetches current weather for Leeuwarden via Open-Meteo API
- **Dynamic Time Display**: Updates every second with local time
- **Distance Calculator**: Shows exact distance between two cities (1,846 km)

### 🎨 Premium Design
- Glassmorphism UI with backdrop blur effects
- Smooth scroll animations using Framer Motion
- Responsive design for all screen sizes
- Ambient particles and floating hearts
- Dynamic weather-based rain effects

### 🎵 Multimedia Experience
- Auto-playing background music (4:10 duration)
- Sound effects for interactions
- Optimized for seamless playback

## 🛠️ Tech Stack

**Frontend Framework**
- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

**3D Graphics**
- [Three.js](https://threejs.org/) - 3D rendering engine
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) - Useful helpers for R3F

**Animation & UI**
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- Tailwind CSS - Utility-first CSS framework

**APIs & Data**
- [Open-Meteo API](https://open-meteo.com/) - Weather data

## 📁 Project Structure

```
long-distance-love/
├── app/
│   ├── page.tsx              # Main page component
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Globe.tsx             # 3D Earth with pins and flight path
│   ├── ReasonsList.tsx       # Interactive reasons cards
│   ├── MomentsTimeline.tsx   # Relationship timeline
│   ├── SecretLetter.tsx      # Hidden message component
│   ├── Landing.tsx           # Hero section
│   ├── Distance.tsx          # Distance calculator
│   ├── WeatherAware.tsx      # Real-time weather
│   ├── TimeZoneAware.tsx     # Dynamic clock
│   └── ...                   # Other UI components
├── lib/
│   └── distance.ts           # Haversine distance calculation
├── public/
│   ├── globe.glb             # 3D Earth model
│   ├── map_pin.glb           # Custom pin asset
│   ├── song.mp3              # Background music
│   └── typewriter.mp3        # Sound effect
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Burden19/valentines.git
cd long-distance-love
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 🌍 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and deploy
4. All assets in `public/` are automatically served

See [deployment-guide.md](./deployment-guide.md) for detailed instructions.

## 🎯 Key Technical Highlights

- **3D Coordinate Mapping**: Converts latitude/longitude to 3D Cartesian coordinates for accurate pin placement
- **Bezier Curve Flight Path**: Uses quadratic Bezier curves to create realistic arcing paths on a sphere
- **Optimized Asset Loading**: GLB models are preloaded and cloned for performance
- **Responsive 3D Rendering**: Canvas adapts to screen size while maintaining aspect ratio
- **Smooth Animations**: Leverages Framer Motion's spring physics for natural movement

## 📝 License

This project is a personal gift and is not licensed for commercial use.

## 👤 Author

**Ahmed Mbarek**

- Email: [ahmedmbarek61@gmail.com](mailto:ahmedmbarek61@gmail.com)
- GitHub: [@Burden19](https://github.com/Burden19/)

---

*Made with ❤️ for Luna*
