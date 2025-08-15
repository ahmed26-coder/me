"use client"

import { useState, useEffect, useRef, useCallback } from "react"

export function useRomanticAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio()
    audioRef.current.src = "/placeholder.mp3" // This would be replaced with actual romantic music
    audioRef.current.loop = true
    audioRef.current.volume = volume
    audioRef.current.preload = "auto"

    const audio = audioRef.current

    const handleCanPlayThrough = () => {
      setIsLoaded(true)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    const handleError = () => {
      console.log("Audio failed to load, using fallback")
      setIsLoaded(true) // Still allow UI to work
    }

    audio.addEventListener("canplaythrough", handleCanPlayThrough)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlayThrough)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("error", handleError)
      audio.pause()
      audio.src = ""
    }
  }, [volume])

  const togglePlay = useCallback(async () => {
    if (!audioRef.current || !isLoaded) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.log("Audio playback failed:", error)
    }
  }, [isPlaying, isLoaded])

  const setVolumeLevel = useCallback((newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume))
    setVolume(clampedVolume)
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume
    }
  }, [])

  return {
    isPlaying,
    volume,
    isLoaded,
    togglePlay,
    setVolume: setVolumeLevel,
  }
}
