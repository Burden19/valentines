"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function FloatingHearts() {
    const [windowWidth, setWindowWidth] = useState(1024)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: "100vh", x: Math.random() * windowWidth, opacity: 0 }}
                    animate={{ y: "-10vh", opacity: [0, 1, 0] }}
                    transition={{ duration: 10 + Math.random() * 10, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute text-pink-400 text-2xl"
                >
                    ♥
                </motion.div>
            ))}
        </div>
    )
}
