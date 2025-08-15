"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
}

export function InteractiveCursor() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Create sparkles occasionally
      if (Math.random() < 0.1) {
        const newSparkle: Sparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          scale: Math.random() * 0.5 + 0.5,
        }

        setSparkles((prev) => [...prev.slice(-10), newSparkle])
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev
          .map((sparkle) => ({
            ...sparkle,
            opacity: sparkle.opacity - 0.05,
          }))
          .filter((sparkle) => sparkle.opacity > 0),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
          style={{
            left: sparkle.x - 4,
            top: sparkle.y - 4,
            opacity: sparkle.opacity,
            transform: `scale(${sparkle.scale})`,
            transition: "opacity 0.1s ease-out",
          }}
        />
      ))}
    </div>
  )
}
