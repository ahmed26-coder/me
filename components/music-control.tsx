"use client"

import { useEffect, useRef } from "react"

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5
        audioRef.current
          .play()
          .catch((err) => console.error("Autoplay blocked:", err))
      }
    }

    // تشغيل بعد أول تفاعل مع المستخدم
    document.addEventListener("click", playMusic, { once: true })
    document.addEventListener("keydown", playMusic, { once: true })

    return () => {
      document.removeEventListener("click", playMusic)
      document.removeEventListener("keydown", playMusic)
    }
  }, [])

  return (
    <audio ref={audioRef} loop>
      <source src="/videoplayback.m4a" type="audio/mp4" />
      متصفحك لا يدعم تشغيل الصوت.
    </audio>
  )
}

export default BackgroundMusic
