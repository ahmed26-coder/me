"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const romanticQuotes = [
  "You are my sun, my moon, and all my stars.",
  "In your eyes, I found my home.",
  "Every love story is beautiful, but ours is my favorite.",
  "You are the poetry I never knew how to write.",
  "My heart is perfect because you are in it.",
  "You are my today and all of my tomorrows.",
  "I love you more than words can express.",
  "You make my heart smile in ways I never knew possible.",
]

export function RomanticQuotes() {
  const [currentQuote, setCurrentQuote] = useState("")
  const [showQuote, setShowQuote] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (e: React.MouseEvent) => {
    const randomQuote = romanticQuotes[Math.floor(Math.random() * romanticQuotes.length)]
    setCurrentQuote(randomQuote)
    setPosition({ x: e.clientX, y: e.clientY })
    setShowQuote(true)
  }

  const handleMouseLeave = () => {
    setShowQuote(false)
  }

  return (
    <>
      {/* Invisible trigger areas */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 pointer-events-auto cursor-pointer"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>

      {/* Quote Display */}
      {showQuote && (
        <Card
          className="fixed z-50 p-4 bg-background/95 backdrop-blur-sm border-primary/30 max-w-xs pointer-events-none animate-in fade-in-0 zoom-in-95"
          style={{
            left: Math.min(position.x + 10, window.innerWidth - 300),
            top: Math.max(position.y - 50, 10),
          }}
        >
          <p className="text-sm font-[family-name:var(--font-body)] text-foreground italic">"{currentQuote}"</p>
        </Card>
      )}
    </>
  )
}
