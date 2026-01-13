"use client"

import { useState, useEffect } from "react"
import FloatingHearts from "@/components/FloatingHearts"
import Stars from "@/components/Stars"
import Rain from "@/components/Rain"

import Landing from "@/components/Landing"
import TimeZoneAware from "@/components/TimeZoneAware"
import WeatherAware from "@/components/WeatherAware"
import Distance from "@/components/Distance"
import PlaceholderMemory from "@/components/PlaceholderMemory"
import Presence from "@/components/Presence"
import SharedMinute from "@/components/SharedMinute"
import SecretLetter from "@/components/SecretLetter"
import FinalSection from "@/components/FinalSection"
import ScrollReveal from "@/components/ScrollReveal"
import WaterReminder from "@/components/WaterReminder"
import MusicPlayer from "@/components/MusicPlayer"
import ReasonsList from "@/components/ReasonsList"
import MomentsTimeline from "@/components/MomentsTimeline"
import Globe from "@/components/Globe"

export default function Home() {
    const [weather, setWeather] = useState("clear")
    const [isNight, setIsNight] = useState(false)

    // Handle hydration mismatch for time-based logic
    useEffect(() => {
        const hour = new Date().getHours()
        setIsNight(hour >= 20 || hour <= 5)
    }, [])

    return (
        <main className="min-h-screen relative overflow-hidden bg-background text-foreground">
            <FloatingHearts />
            <Stars isNight={isNight} />
            <Rain show={weather === "rain"} />

            <WaterReminder />
            <MusicPlayer />

            <div className="flex flex-col relative z-10 space-y-24 pb-24">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-4">
                    <div className="max-w-2xl w-full">
                        <Landing />
                    </div>
                </section>

                {/* Two-column Layout Sections */}
                <section id="two-column-section" className="px-4">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
                        <ScrollReveal delay={0.1} className="h-full">
                            <TimeZoneAware />
                        </ScrollReveal>
                        <ScrollReveal delay={0.2} className="h-full">
                            <WeatherAware onWeather={setWeather} />
                        </ScrollReveal>
                    </div>
                </section>

                {/* Alternate Layout */}
                <section className="px-4">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
                        <ScrollReveal delay={0.2} className="md:order-2 h-full">
                            <Globe />
                        </ScrollReveal>
                        <ScrollReveal delay={0.1} className="md:order-1 h-full">
                            <Distance cityA="Leeuwarden" cityB="Sfax" />
                        </ScrollReveal>
                    </div>
                </section>

                {/* Shared Memory Section */}
                <section className="px-4">
                    <ScrollReveal delay={0.1} className="max-w-5xl mx-auto h-full">
                        <PlaceholderMemory />
                    </ScrollReveal>
                </section>

                {/* Another Two-column Section */}
                <section className="px-4">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
                        <ScrollReveal delay={0.1} className="h-full">
                            <Presence />
                        </ScrollReveal>
                        <ScrollReveal delay={0.2} className="h-full">
                            <SharedMinute />
                        </ScrollReveal>
                    </div>
                </section>

                {/* Reasons List */}
                <section className="px-4">
                    <ScrollReveal className="max-w-4xl mx-auto">
                        <ReasonsList />
                    </ScrollReveal>
                </section>

                {/* Timeline */}
                <section className="px-4">
                    <ScrollReveal className="max-w-2xl mx-auto">
                        <MomentsTimeline />
                    </ScrollReveal>
                </section>

                {/* Full-width Sections */}
                <section className="px-4">
                    <ScrollReveal className="max-w-2xl mx-auto">
                        <SecretLetter />
                    </ScrollReveal>
                </section>

                {/* Footer Section */}
                <section className="px-4 flex items-center justify-center">
                    <ScrollReveal delay={0.2} className="max-w-xl w-full">
                        <FinalSection />
                    </ScrollReveal>
                </section>
            </div>
        </main>
    )
}
