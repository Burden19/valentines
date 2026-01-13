"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface Star {
    id: number
    x: number
    y: number
    size: number
}

interface StarsProps {
    isNight: boolean
}

export default function Stars({ isNight }: StarsProps) {
    const [stars, setStars] = useState<Star[]>([])
    const [clicks, setClicks] = useState(0)
    const [showConstellation, setShowConstellation] = useState(false)
    const [connectedStars, setConnectedStars] = useState<number[]>([])

    useEffect(() => {
        const newStars = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
        }))
        setStars(newStars)
    }, [])

    const handleStarClick = (id: number) => {
        if (connectedStars.includes(id)) return

        setConnectedStars((prev) => [...prev, id])
        setClicks((prev) => {
            const newCount = prev + 1
            if (newCount === 5) {
                setShowConstellation(true)
            }
            return newCount
        })
    }

    return (
        <div className={`fixed inset-0 pointer-events-none transition-colors duration-1000 -z-20 ${isNight ? "bg-[hsl(222,47%,11%)]" : "bg-gradient-to-b from-blue-50 to-white"}`}>
            {/* Stars Layer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-auto">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className={`absolute rounded-full cursor-pointer transition-all duration-300 ${connectedStars.includes(star.id) ? "bg-primary shadow-[0_0_10px_var(--primary)] scale-150" : "bg-white hover:scale-150 hover:bg-yellow-200"}`}
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: star.size,
                            height: star.size,
                            opacity: isNight ? 0.8 : 0.2, // Visible but faint in day
                        }}
                        onClick={() => handleStarClick(star.id)}
                        animate={{
                            opacity: isNight ? [0.4, 1, 0.4] : [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}

                {/* Constellation Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {connectedStars.map((id, index) => {
                        if (index === 0) return null
                        const prevStar = stars.find(s => s.id === connectedStars[index - 1])
                        const currStar = stars.find(s => s.id === id)
                        if (!prevStar || !currStar) return null

                        return (
                            <motion.line
                                key={index}
                                x1={`${prevStar.x}%`}
                                y1={`${prevStar.y}%`}
                                x2={`${currStar.x}%`}
                                y2={`${currStar.y}%`}
                                stroke="var(--primary)"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.5 }}
                                transition={{ duration: 1 }}
                            />
                        )
                    })}
                </svg>
            </div>

            {/* Secret Easter Egg Overlay */}
            <AnimatePresence>
                {showConstellation && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
                        onClick={() => setShowConstellation(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="glass-card p-12 max-w-lg text-center space-y-6 m-4 cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-4xl font-bold text-gradient">The Constellation of Us</h2>
                            <p className="text-xl text-white/90 leading-relaxed font-light">
                                &quot;Even if we are light-years apart, we are looking at the same sky. Connect the dots, and you&apos;ll always find me.&quot;
                            </p>
                            <button
                                onClick={() => setShowConstellation(false)}
                                className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 transition text-sm uppercase tracking-widest text-white/80"
                            >
                                Keep Gazing
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
