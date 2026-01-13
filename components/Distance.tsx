"use client"
import { motion } from "framer-motion"
import { calculateDistance } from "@/lib/distance"

interface DistanceProps {
    cityA: string
    cityB: string
}

export default function Distance({ cityA, cityB }: DistanceProps) {
    const km = calculateDistance(cityA, cityB)

    return (
        <div className="glass-card p-8 rounded-2xl text-center space-y-8 relative overflow-hidden">
            <div className="space-y-2 relative z-10">
                <h3 className="text-4xl font-bold text-gradient">{km} km</h3>
                <p className="text-lg opacity-80">Apart, but never distant</p>
            </div>

            {/* Interactive Map Line */}
            <div className="relative h-32 w-full flex items-center justify-between px-4 sm:px-12">
                {/* Cities */}
                <div className="flex flex-col items-center z-10">
                    <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                    <span className="mt-2 text-sm font-medium opacity-80">{cityA}</span>
                </div>

                <div className="flex flex-col items-center z-10">
                    <div className="w-4 h-4 rounded-full bg-secondary animate-pulse" />
                    <span className="mt-2 text-sm font-medium opacity-80">{cityB}</span>
                </div>

                {/* SVG Line & Plane */}
                <div className="absolute inset-0 top-1/2 -translate-y-[calc(50%-10px)] left-0 w-full px-8 pointer-events-none">
                    <svg className="w-full h-12 overflow-visible">
                        {/* Dashed background line */}
                        <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 4" />

                        {/* Animated Path */}
                        <motion.path
                            d="M 10 25 Q 50 5 90 25" // Simple curve attempt (relative units needed ideally, but sticking to simple line for responsiveness or using a simpler straight line approach with motion div)
                        // Simplifying to a straight responsive line for robustness
                        />

                        {/* Plane removed as requested */}
                    </svg>
                    {/* Horizontal line alternative for guaranteed rendering */}
                    <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 -z-10"></div>
                </div>
            </div>

            <p className="text-lg leading-relaxed relative z-10">
                We&apos;re {km} kilometers apart — and somehow, still so close.
            </p>
            <p className="opacity-60 text-sm font-light tracking-wide relative z-10">Distance measures space, not love.</p>
        </div>
    )
}
