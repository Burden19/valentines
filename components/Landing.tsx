"use client"
import { motion } from "framer-motion"
import Typewriter from "./Typewriter"

export default function Landing() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const handleClick = () => {
        document.getElementById("two-column-section")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <motion.div className="space-y-8 text-center" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants}>
                <Typewriter texts={["They say distance makes things harder…", "But love always finds new ways."]} />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 space-y-3">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 pb-2">
                    Happy Valentine&apos;s Day
                </h1>
                <p className="text-xl md:text-2xl font-light text-foreground opacity-90">
                    I wish I was there with you right now.
                </p>
                <p className="text-sm opacity-60 pt-2">Across continents, yet closer than ever.</p>
            </motion.div>

            <motion.div variants={itemVariants}>
                <button
                    onClick={handleClick}
                    className="px-8 py-4 rounded-full bg-primary hover:bg-primary-light transition-all duration-300 font-semibold text-white shadow-lg hover:shadow-[0_0_30px_rgba(255,107,157,0.4)] transform hover:scale-105 cursor-pointer"
                >
                    Come a little closer 🤍
                </button>
            </motion.div>
        </motion.div>
    )
}
