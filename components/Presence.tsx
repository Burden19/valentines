"use client"
import { useState } from "react"

export default function Presence() {
    const [msg, setMsg] = useState("")

    return (
        <div className="glass-card p-8 rounded-2xl text-center space-y-6 h-full flex flex-col justify-center">
            <button
                onClick={() => setMsg("Even across time zones… I feel you with me.")}
                className="w-full py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-primary/30"
            >
                Are you here with me right now?
            </button>
            {msg && (
                <p className="text-primary-foreground font-light text-lg italic animate-pulse-slow bg-white/10 p-4 rounded-xl">
                    {msg}
                </p>
            )}
        </div>
    )
}
