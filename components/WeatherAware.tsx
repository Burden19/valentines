"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface WeatherAwareProps {
    onWeather?: (weather: string) => void
}

export default function WeatherAware({ onWeather }: WeatherAwareProps) {
    const [text, setText] = useState("Checking the skies in Leeuwarden...")
    const [emoji, setEmoji] = useState("🌍")

    useEffect(() => {
        async function fetchWeather() {
            try {
                // Leeuwarden coordinates
                const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=53.2012&longitude=5.7999&current=weather_code")
                const data = await res.json()
                const code = data.current.weather_code

                let mood = "clear"
                let currentEmoji = "☀️"
                let statusText = "The sky is clear in Leeuwarden… I imagine your smile under it."

                if (code >= 51) {
                    mood = "rain"
                    currentEmoji = "🌧️"
                    statusText = "It's raining in Leeuwarden… I hope you're warm."
                } else if (code >= 2) {
                    mood = "clouds"
                    currentEmoji = "☁️"
                    statusText = "Clouds are drifting above Leeuwarden… softly like my thoughts of you."
                }

                setEmoji(currentEmoji)
                setText(statusText)
                onWeather?.(mood)
            } catch (e) {
                console.error("Failed to fetch weather", e)
                setText("I can't see the sky right now, but I know it's beautiful where you are.")
            }
        }

        fetchWeather()
    }, [onWeather])

    return (
        <div className="glass-card p-8 rounded-2xl text-center h-full flex flex-col justify-center items-center">
            <div className="space-y-4">
                <div className="text-6xl animate-float">{emoji}</div>
                <p className="text-xl font-medium leading-relaxed opacity-90">{text}</p>
            </div>
        </div>
    )
}
