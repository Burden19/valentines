"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function TimeZoneAware() {
    const [time, setTime] = useState("")

    useEffect(() => {
        const now = new Date()
        setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }, [])

    return (
        <motion.div
            className="card text-center space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/40">
                <p className="text-2xl font-semibold text-primary">{time}</p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">Right now, time is gently moving where you are.</p>
            <p className="opacity-80 text-sm">And somehow, my heart is right there with you.</p>
        </motion.div>
    )
}
