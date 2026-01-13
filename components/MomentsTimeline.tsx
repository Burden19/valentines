"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const MOMENTS = [
    { year: "The Beginning", title: "First Hello", desc: "The moment the universe decided our paths should cross." },
    { year: "Growing", title: "Closer Each Day", desc: "Distance meant nothing when your voice became my favorite sound." },
    { year: "Now", title: "Missing You", desc: "Every minute apart is just one minute closer to seeing you." },
    { year: "Soon", title: "In Your Arms", desc: "The moment I'm waiting for. To finally be home." },
]

export default function MomentsTimeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    return (
        <div ref={containerRef} className="relative py-20 space-y-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-400">
                    Our Story So Far
                </h2>
            </div>

            <div className="relative border-l-2 border-white/10 ml-[50%] md:ml-[50%] pl-8 pb-8 space-y-12">
                {MOMENTS.map((moment, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: i * 0.2 }}
                        className="relative"
                    >
                        {/* Dot on timeline */}
                        <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-4 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />

                        <div className="glass-card p-6 rounded-xl relative hover:bg-white/5 transition duration-500 -ml-4 md:ml-0">
                            <span className="text-xs font-bold tracking-widest text-pink-400 uppercase mb-2 block">
                                {moment.year}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-2">{moment.title}</h3>
                            <p className="text-white/70 leading-relaxed text-sm">
                                {moment.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
