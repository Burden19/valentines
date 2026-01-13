"use client"
import { useEffect, useState } from "react"

interface TypewriterProps {
    texts: string[]
}

export default function Typewriter({ texts }: TypewriterProps) {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentText = texts[currentIndex]
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (displayText.length < currentText.length) {
                        setDisplayText(currentText.slice(0, displayText.length + 1))
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000)
                    }
                } else {
                    if (displayText.length > 0) {
                        setDisplayText(currentText.slice(0, displayText.length - 1))
                    } else {
                        setIsDeleting(false)
                        setCurrentIndex((currentIndex + 1) % texts.length)
                    }
                }
            },
            isDeleting ? 50 : 100
        )

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentIndex, texts])

    return (
        <h1 className="text-4xl md:text-6xl font-bold text-gradient min-h-[80px] flex items-center justify-center">
            {displayText}
            <span className="animate-pulse">|</span>
        </h1>
    )
}
