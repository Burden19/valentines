"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth "premium" feel
                delay: delay
            }}
        >
            {children}
        </motion.div>
    )
}
