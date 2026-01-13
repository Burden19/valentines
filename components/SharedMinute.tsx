"use client"
import { useState } from "react"

export default function SharedMinute() {
    const [done, setDone] = useState(false)
    const [timeLeft, setTimeLeft] = useState(0)

    const start = () => {
        setDone(false)
        setTimeLeft(60)

        const countdown = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(countdown)
                    setDone(true)
                    return 0
                }
                return prev - 1
            })
        }, 1000)
    }

    return (
        <div className="glass-card p-8 rounded-2xl text-center space-y-6 h-full flex flex-col justify-center">
            {!done ? (
                <div className="space-y-4">
                    <button
                        onClick={start}
                        disabled={timeLeft > 0}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-all font-semibold text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {timeLeft > 0 ? `${timeLeft}s left until we meet...` : "Let's share a minute"}
                    </button>
                    {timeLeft > 0 && <p className="text-secondary-foreground/70 text-sm animate-pulse">Close your eyes...</p>}
                </div>
            ) : (
                <div className="space-y-4 animate-in fade-in zoom-in duration-500">
                    <p className="text-gradient font-medium text-xl">Same moment. Same feeling.</p>
                    <p className="opacity-70 text-sm font-light">Time slowed down just for us.</p>
                    <button
                        onClick={start}
                        className="text-primary hover:text-white transition-colors text-sm font-medium"
                    >
                        Do it again?
                    </button>
                </div>
            )}
        </div>
    )
}
