"use client"

import { useState, useRef, useEffect } from "react"

interface RomanticVideoBackgroundProps {
  className?: string
}

export function RomanticVideoBackground({ className = "" }: RomanticVideoBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      setHasError(false)
    }

    const handleError = () => {
      setHasError(true)
      setIsLoaded(true) // Still show fallback
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className={`fixed inset-0 -z-20 ${className}`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.svg?height=1080&width=1920"
      >
        <source src="/10214234-hd_2048_1080_25fps.mp4" type="video/mp4" />
        <source src="/10214234-hd_2048_1080_25fps.mp4" type="video/webm" />
      </video>

      {/* Fallback Background Image */}
      {hasError && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        />
      )}

      {/* Romantic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(234, 88, 12, 0.1) 0%, transparent 10%),
                             radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.1) 0%, transparent 10%)`,
          }}
        />
      </div>
    </div>
  )
}
