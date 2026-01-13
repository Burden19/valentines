"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Smile, Eye, Brain, CloudRain } from "lucide-react"

const REASONS = [
    {
        icon: Heart,
        title: "Your Heart",
        text: "You possess the purest and kindest heart I have ever known. It's a rare and beautiful thing."
    },
    {
        icon: Smile,
        title: "Your Joy",
        text: "You have the prettiest smile that lights up my screen, and a mesmerizing laugh that I could listen to forever."
    },
    {
        icon: Eye,
        title: "Your Eyes",
        text: "I get lost in them every time. They really are the prettiest pair of eyes I have ever seen."
    },
    {
        icon: Brain,
        title: "Your Mind",
        text: "You are way too smart. Your intelligence challenges me, inspires me, and makes me fall deeper."
    },
    {
        icon: CloudRain,
        title: "Your Patience",
        text: "You know exactly how to handle my mood swings. You bring calm to my storms when no one else can."
    }
]

export default function ReasonsList() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-gradient">My Luna</h2>
                <p className="opacity-80 italic max-w-lg mx-auto leading-relaxed">
                    &ldquo;I can&apos;t say exactly why I love you, because love just <i>is</i>. But I can tell you exactly why I fell for you...&rdquo;
                </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
                {REASONS.map((reason, i) => (
                    <motion.button
                        key={i}
                        onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                        className={`relative p-4 rounded-xl transition-all duration-300 flex flex-col items-center gap-3 border ${activeIndex === i
                            ? "bg-white/10 border-primary/50 shadow-[0_0_30px_rgba(236,72,153,0.3)] scale-105 z-10"
                            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <reason.icon className={`w-8 h-8 ${activeIndex === i ? "text-primary" : "text-white/70"}`} />
                        <span className="text-sm font-medium whitespace-nowrap">{reason.title}</span>

                        {/* Mobile/Compact view text expansion could go here, but we'll put it below for layout stability */}
                    </motion.button>
                ))}
            </div>

            <div className="min-h-[100px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {activeIndex !== null ? (
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="glass-card px-8 py-6 rounded-2xl max-w-xl text-center border-primary/20 bg-primary/5"
                        >
                            <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground">
                                {REASONS[activeIndex].text}
                            </p>
                        </motion.div>
                    ) : (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            className="text-sm italic"
                        >
                            Select a reason...
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
