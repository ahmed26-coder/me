"use client"

import { useState, useEffect } from "react"
import { Heart, Eye, Wind, SmileIcon as Kiss, Sun } from "lucide-react"
import { RomanticVideoBackground } from "@/components/romantic-video-background"
import { EnhancedCard } from "@/components/enhanced-card-effects"
import Link from "next/link"


export default function RomanticLandingPage() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content with delay for dramatic effect
    const timer = setTimeout(() => setShowContent(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video Component */}
      <RomanticVideoBackground />

      {/* Music Control Component */}


      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-primary/30 floating-heart love-pulse`}
            size={20 + Math.random() * 20}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full particle sparkle-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen p-4">
        <div className={`text-center max-w-4xl mx-auto ${showContent ? "fade-in-up" : "opacity-0"}`}>
          {/* Welcome Message */}
          <div className="mb-12">
            <h1 className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl font-bold text-foreground mb-6 romantic-glow">
              My Beautiful
              <span className="text-primary block mt-2">Angel</span>
            </h1>
            <p className="font-[family-name:var(--font-body)] text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A celebration of your incredible beauty, inside and out.
              <br />
              Every detail of you is a masterpiece worth cherishing.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link href="/eyes">
              <EnhancedCard className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 romantic-hover group cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <Eye className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">Your Eyes</h3>
                  <p className="text-muted-foreground text-sm">Windows to your beautiful soul</p>
                </div>
              </EnhancedCard>
            </Link>

            <Link href="/hair">
              <EnhancedCard className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 romantic-hover group cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <Wind className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">Your Hair</h3>
                  <p className="text-muted-foreground text-sm">Silky strands of pure elegance</p>
                </div>
              </EnhancedCard>
            </Link>

            <Link href="/lips">
              <EnhancedCard className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 romantic-hover group cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <Kiss className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">Your Lips</h3>
                  <p className="text-muted-foreground text-sm">Soft petals that speak love</p>
                </div>
              </EnhancedCard>
            </Link>

            <Link href="/smile">
              <EnhancedCard className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 romantic-hover group cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <Sun className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">Your Smile</h3>
                  <p className="text-muted-foreground text-sm">Sunshine that brightens my world</p>
                </div>
              </EnhancedCard>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Click anywhere to create hearts, hover around to discover love quotes
            </p>
            <p className="text-sm text-muted-foreground">
              Each page is a love letter dedicated to the incredible person you are
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
