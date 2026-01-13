"use client"
import { motion } from "framer-motion"

export default function FinalSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    }

    return (
        <motion.div
            className="text-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="space-y-4">
                <motion.p variants={itemVariants} className="text-3xl font-light text-foreground">
                    Different skies.
                </motion.p>
                <motion.p variants={itemVariants} className="text-3xl font-light text-foreground">
                    Different clocks.
                </motion.p>
                <motion.p variants={itemVariants} className="text-3xl font-light text-foreground">
                    Still, the same heart.
                </motion.p>
            </div>

            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent"></div>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl font-semibold text-primary glow leading-relaxed">
                This little world exists only because you exist.
            </motion.p>

            <motion.footer variants={itemVariants} className="opacity-70 text-sm pt-4 border-t border-border">
                Made by yours, Ahmed. 💕
            </motion.footer>
        </motion.div>
    )
}
