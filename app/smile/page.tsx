"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Heart, Sun } from "lucide-react"
import { RomanticVideoBackground } from "@/components/romantic-video-background"


export default function SmilePage() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <RomanticVideoBackground />

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/30 floating-heart"
            size={16 + Math.random() * 14}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 min-h-screen p-4 pb-24">
        <div className={`max-w-6xl mx-auto pt-20 ${showContent ? "fade-in-up" : "opacity-0"}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-sans text-5xl md:text-7xl font-bold text-foreground mb-6 glow-effect">
              Your Radiant
              <span className="text-primary block mt-2">Smile</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The sunshine that brightens every corner of my world
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Romantic Text */}
            <div className="space-y-8">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect">
                <h2 className="font-sans text-2xl font-semibold mb-4 text-primary">Sunshine Personified</h2>
                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  Your smile is like the first ray of sunshine after a storm – warm, healing, and absolutely magical. It
                  has the power to turn the darkest day into something beautiful and bright.
                </p>
                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  When you smile, the whole world seems to smile back. It's contagious in the most wonderful way,
                  spreading joy wherever you go.
                </p>
                <p className="font-sans text-lg leading-relaxed text-foreground">
                  It carries a light that no cloud can hide, and a hope that no shadow can dim — a gentle reminder that
                  beauty begins with kindness.
                </p>
              </Card>

              <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect">
                <h2 className="font-sans text-2xl font-semibold mb-4 text-primary">My Favorite Masterpiece</h2>
                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  Every time you smile, it's like watching a masterpiece come to life. Your eyes crinkle with genuine
                  happiness, your whole face lights up, and suddenly everything in the world feels right.
                </p>
                <p className="font-sans text-lg leading-relaxed text-foreground">
                  It's a work of art painted in joy, framed in love, and displayed in the gallery of my heart forever.
                </p>
              </Card>

            </div>

            {/* Image */}
            <div className="relative">
              <Card className="overflow-hidden py-0 border-primary/20 glow-effect">
                                <Image
                                priority
                                width={1000}
                                height={1000}
                  src="/IMG-20250308-WA0002.jpg"
                  alt="Beautiful smile"
                  className="w-full h-auto object-cover"
                />
              </Card>
              <div className="absolute -top-4 -right-4">
                <Sun className="text-accent animate-pulse" size={32} />
              </div>
            </div>
          </div>

          {/* Poetry Section */}
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect text-center mb-16">
            <h2 className="font-sans text-3xl font-semibold mb-8 text-primary">The Magic of Your Smile</h2>
            <div className="font-sans text-xl leading-relaxed text-foreground space-y-4 max-w-3xl mx-auto">
              <p className="italic">
                "When you smile, the stars grow jealous,
                <br />
                The moon hides behind the clouds,
                <br />
                For nothing in the heavens above
                <br />
                Shines brighter than your smile, so proud."
              </p>
              <p className="italic">
                "It warms the coldest winter’s day,
                <br />
                And melts the frost upon my soul,
                <br />
                With just one curve upon your lips,
                <br />
                You make my broken spirit whole."
              </p>
            </div>
          </Card>

        </div>
      </div>
    </div>
  )
}
