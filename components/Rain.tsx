"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const MESSAGES = [
    "Every drop of rain is a kiss I wish I could give you.",
    "The sky cries because it misses the sun, just like I miss you.",
    "Listen to the rhythm of the rain; it beats for us.",
    "If love was water, I'd give you the ocean.",
    "Stay warm, my love. I'm holding you in my thoughts."
]

interface RainProps {
    show: boolean
}

export default function Rain({ show }: RainProps) {
    const [bottle, setBottle] = useState<{ x: number, id: number } | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    useEffect(() => {
        if (!show) {
            setBottle(null)
            return
        }

        const interval = setInterval(() => {
            if (Math.random() > 0.7) { // 30% chance every 10s
                setBottle({ x: Math.random() * 80 + 10, id: Date.now() })
            }
        }, 10000)

        return () => clearInterval(interval)
    }, [show])

    const openBottle = () => {
        setBottle(null)
        const randomMsg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
        setMessage(randomMsg)
    }

    if (!show) return null

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Rain Drops */}
            {[...Array(100)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: -20, x: Math.random() * 100 + "vw", opacity: 0 }}
                    animate={{ y: "100vh", opacity: 0.4 }}
                    transition={{
                        duration: 0.8 + Math.random() * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 2,
                        ease: "linear"
                    }}
                    className="absolute w-0.5 h-4 bg-blue-200/50"
                />
            ))}

            {/* Message in a Bottle */}
            <AnimatePresence>
                {bottle && (
                    <motion.div
                        key={bottle.id}
                        initial={{ y: -50, x: `${bottle.x}vw`, rotate: 0 }}
                        animate={{
                            y: "110vh",
                            rotate: 360,
                            x: [`${bottle.x}vw`, `${bottle.x - 5}vw`, `${bottle.x + 5}vw`, `${bottle.x}vw`] // Swaying motion
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 15, ease: "linear" }}
                        className="absolute cursor-pointer pointer-events-auto text-4xl filter drop-shadow-lg"
                        onClick={openBottle}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                        🍾
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Message Overlay */}
            <AnimatePresence>
                {message && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-auto"
                        onClick={() => setMessage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 20 }}
                            className="bg-[#fff9e6] p-8 max-w-sm rounded shadow-2xl skew-1 rotate-1 border-2 border-[#e6d5a8]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p className="font-serif text-xl text-stone-800 italic leading-loose text-center">
                                &quot;{message}&quot;
                            </p>
                            <p className="text-center mt-4 text-xs font-bold text-stone-400 uppercase tracking-widest">
                                A Note from the Rain
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
