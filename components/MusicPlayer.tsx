"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react"

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    // Attempt auto-play on mount
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5
            const playPromise = audioRef.current.play()

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true)
                }).catch(error => {
                    console.log("Auto-play prevented by browser policy:", error)
                    setIsPlaying(false)
                })
            }
        }
    }, [])

    const togglePlay = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed (interaction needed):", e))
        }
        setIsPlaying(!isPlaying)
    }

    const toggleMute = () => {
        if (!audioRef.current) return
        audioRef.current.muted = !isMuted
        setIsMuted(!isMuted)
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed bottom-6 left-6 z-50"
        >
            <div className="bg-white/80 backdrop-blur-md dark:bg-black/50 border border-white/20 p-3 rounded-2xl shadow-xl flex items-center gap-3 transition hover:scale-105">
                <audio ref={audioRef} src="/song.mp3" loop />

                <div className="relative">
                    <div className={`absolute inset-0 bg-pink-500/20 rounded-full blur-md ${isPlaying ? 'animate-pulse' : ''}`} />
                    <div className="relative bg-gradient-to-tr from-pink-500 to-rose-400 p-2 rounded-full text-white">
                        <Music className={`w-5 h-5 ${isPlaying ? 'animate-spin-slow' : ''}`} />
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={togglePlay}
                        className="p-2 hover:bg-black/5 rounded-full transition text-foreground"
                    >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                    </button>

                    <button
                        onClick={toggleMute}
                        className="p-2 hover:bg-black/5 rounded-full transition text-foreground/70"
                    >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
