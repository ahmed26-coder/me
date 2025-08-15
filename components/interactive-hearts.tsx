"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Heart } from "lucide-react"

interface ClickHeart {
  id: number
  x: number
  y: number
  size: number
  color: string
}

export function InteractiveHearts() {
  const [clickHearts, setClickHearts] = useState<ClickHeart[]>([])

  const createHeart = useCallback((e: React.MouseEvent) => {
    const colors = ["text-primary", "text-accent", "text-pink-400", "text-red-400"]
    const newHeart: ClickHeart = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 20 + 15,
      color: colors[Math.floor(Math.random() * colors.length)],
    }

    setClickHearts((prev) => [...prev, newHeart])

    // Remove heart after animation
    setTimeout(() => {
      setClickHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id))
    }, 2000)
  }, [])

  return (
    <div className="fixed inset-0 z-40 pointer-events-none" onClick={createHeart} style={{ pointerEvents: "auto" }}>
      {clickHearts.map((heart) => (
        <Heart
          key={heart.id}
          className={`absolute ${heart.color} animate-ping pointer-events-none`}
          size={heart.size}
          style={{
            left: heart.x - heart.size / 2,
            top: heart.y - heart.size / 2,
            animationDuration: "2s",
          }}
        />
      ))}
    </div>
  )
}
