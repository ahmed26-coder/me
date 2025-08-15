"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Heart, Sparkles } from "lucide-react"
import { RomanticVideoBackground } from "@/components/romantic-video-background"
import Image from "next/image"

export default function EyesPage() {
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
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 floating-heart"
            size={15 + Math.random() * 15}
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
              Your Beautiful
              <span className="text-primary block mt-2">Eyes</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Windows to your soul, sparkling with infinite beauty and wonder
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <Card className="overflow-hidden border-primary/20 py-0 glow-effect">
                <Image
                priority
                width={1000}
                height={1000}
                  src="/IMG-20250607-WA0002.jpg"
                  alt="Beautiful eyes"
                  className="w-full h-auto object-cover"
                />
              </Card>
              <div className="absolute -top-4 -right-4">
                <Sparkles className="text-accent animate-pulse" size={32} />
              </div>
            </div>

            {/* Romantic Text */}
            <div className="space-y-8">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect">
                <h2 className="font-sans text-2xl font-semibold mb-4 text-primary">The Universe in Your Gaze</h2>
                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  In your eyes, I see entire galaxies swirling with stardust and dreams. Each glance is like watching a
                  sunset paint the sky in the most beautiful colors imaginable.
                </p>
                <p className="font-sans text-lg leading-relaxed text-foreground">
                  The way they light up when you smile could power entire cities. They hold secrets of joy, wisdom, and
                  a love so pure it takes my breath away.
                </p>
                <p className="font-sans text-lg leading-relaxed text-foreground mt-4">
                  Every heartbeat feels like a soft melody when I’m near you, each note carrying the warmth of a thousand suns.
                  You are the poetry the universe wrote in the language of love.
                </p>

              </Card>

              <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect">
                <h2 className="font-sans text-2xl font-semibold mb-4 text-primary">Sparkling Like Diamonds</h2>
                <p className="font-sans text-lg leading-relaxed text-foreground">
                  Every time you look at me, time stops. Your eyes are like precious gems that catch the light and
                  reflect all the beauty in the world. They tell stories of kindness, intelligence, and a heart full of
                  love.
                </p>
                <p className="font-sans text-lg leading-relaxed text-foreground">
                  When you speak, it feels like the world leans in to listen. Your voice carries a warmth that calms storms
                  and paints the air with hope, telling stories only the heart can truly understand.
                </p>

              </Card>
            </div>
          </div>

          {/* Poetry Section */}
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect text-center mb-16">
            <h2 className="font-sans text-3xl font-semibold mb-8 text-primary">A Love Letter to Your Eyes</h2>
            <div className="font-sans text-xl leading-relaxed text-foreground space-y-8 max-w-3xl mx-auto">
              <p className="italic">
                "In the morning light, they shine like dewdrops on petals,
                <br />
                In the evening glow, they sparkle like stars in the heavens.
                <br />
                Your eyes are my favorite constellation,
                <br />
                Guiding me home to your heart."
              </p>

              <p className="italic">
                "When you smile, they dance like sunbeams on gentle waves,
                <br />
                Carrying the warmth of endless summers.
                <br />
                They hold the promise of tomorrows yet to come,
                <br />
                And the comfort of yesterdays well-loved."
              </p>

              <p className="italic">
                "In their depths, I find quiet oceans,
                <br />
                Where my restless heart can finally rest.
                <br />
                They speak in a language older than time,
                <br />
                Whispering that I am home."
              </p>

              <p className="italic">
                "Like twin lanterns in the darkest night,
                <br />
                They guide me through storms and shadows.
                <br />
                With every glance, they rewrite my story,
                <br />
                Until every chapter ends in love."
              </p>
            </div>
          </Card>

        </div>
      </div>
    </div>
  )
}
