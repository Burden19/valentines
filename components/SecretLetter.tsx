"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export default function SecretLetter() {
    const [open, setOpen] = useState(false)
    const [showBurst, setShowBurst] = useState(false)

    const handleOpen = () => {
        setOpen(true)
        setShowBurst(true)

        // Play sound
        const audio = new Audio("/typewriter.mp3")
        audio.volume = 0.5
        audio.play().catch(e => console.log("Audio not found"))

        // Reset burst after animation
        setTimeout(() => setShowBurst(false), 2000)
    }

    return (
        <div className="glass-card p-10 rounded-2xl text-center space-y-6 max-w-2xl mx-auto relative">
            {/* Heart Burst Animation */}
            {showBurst && ( // Simple scattered hearts
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: 1,
                                x: (Math.random() - 0.5) * 300,
                                y: (Math.random() - 0.5) * 300
                            }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute top-1/2 left-1/2 text-2xl"
                        >
                            ❤️
                        </motion.div>
                    ))}
                </div>
            )}

            {!open ? (
                <div className="space-y-4">
                    <p className="opacity-70 text-lg font-light">Some words only open at the right time.</p>
                    <button
                        onClick={handleOpen}
                        className="text-primary hover:text-secondary transition-colors duration-300 font-medium text-lg border-b-2 border-primary/30 hover:border-secondary pb-1"
                    >
                        Read secret message
                    </button>
                </div>
            ) : (
                <div className="space-y-4 animate-in fade-in zoom-in duration-500">
                    <p className="text-xl text-primary font-light leading-relaxed">I don&apos;t know how distance learned our names…</p>
                    <p className="text-xl text-secondary font-light leading-relaxed">But somehow, it keeps saying them softly.</p>
                    <p className="text-xl text-white/90 font-light leading-relaxed">And every time it does, I think of you.</p>
                    <p className="text-xl text-white/80 font-light leading-relaxed pt-2">Thank you for existing. You make me want to be the best version of myself.</p>
                    <p className="text-3xl font-serif italic text-pink-400 pt-6">I love you.</p>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-sm opacity-50 hover:opacity-100 transition mt-8"
                    >
                        Fold letter
                    </button>
                </div>
            )}
        </div>
    )
}
