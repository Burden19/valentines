"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function TimeZoneAware() {
    const [time, setTime] = useState("")

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="glass-card p-8 rounded-2xl text-center space-y-4">
            <div className="inline-block px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <p className="text-3xl font-bold text-gradient tracking-wide">{time}</p>
            </div>

            <p className="text-lg leading-relaxed opacity-90">Right now, time is gently moving where you are.</p>
            <p className="opacity-60 text-sm font-light">And somehow, my heart is right there with you.</p>
        </div>
    )
}
