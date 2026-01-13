"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Droplets, X } from "lucide-react"

export default function WaterReminder() {
    const [visible, setVisible] = useState(true)

    if (!visible) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <div className="bg-white/90 backdrop-blur-md dark:bg-slate-800/90 shadow-lg border border-blue-100 dark:border-blue-900 rounded-full py-3 px-5 flex items-center gap-3 group transition-all duration-300 hover:shadow-blue-200/50">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-blue-500">
                        <Droplets className="w-5 h-5 animate-bounce" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Hydration Check!</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Take a sip of water 💧</span>
                    </div>
                    <button
                        onClick={() => setVisible(false)}
                        className="ml-2 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 transition"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
