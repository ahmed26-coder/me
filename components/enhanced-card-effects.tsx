"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

interface EnhancedCardProps {
  children: React.ReactNode
  className?: string
}

export function EnhancedCard({ children, className = "" }: EnhancedCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div className="relative">
      <Card
        className={`${className} transition-all duration-300 ${
          isHovered ? "scale-105 shadow-2xl shadow-primary/20" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {children}

        {/* Hover sparkle effect */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
            {[...Array(6)].map((_, i) => (
              <Sparkles
                key={i}
                className="absolute text-primary/30 animate-pulse"
                size={12}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
