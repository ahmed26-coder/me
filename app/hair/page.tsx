"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Heart, Wind } from "lucide-react"
import { RomanticVideoBackground } from "@/components/romantic-video-background"

 import Image from "next/image"
export default function HairPage() {
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
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 floating-heart"
            size={18 + Math.random() * 12}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 min-h-screen p-4 pb-24">
        <div className={`max-w-6xl mx-auto pt-20 ${showContent ? "fade-in-up" : "opacity-0"}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-sans text-5xl md:text-7xl font-bold text-foreground mb-6 glow-effect">
              Your Gorgeous
              <span className="text-primary block mt-2">Hair</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Silky strands that dance in the wind like poetry in motion
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Romantic Text */}
            <div className="space-y-8">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect">
                <h2 className="font-sans text-2xl font-semibold mb-4 text-primary">Cascading Beauty</h2>

                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  Your hair flows like a waterfall of silk, catching the light in ways that make my heart skip a beat.
                  Each strand is a thread of pure elegance, woven together to create something absolutely breathtaking.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  When the breeze catches it, it's like watching nature's own ballet – graceful, mesmerizing, and
                  utterly captivating.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  In the golden glow of sunset, it shimmers like molten gold, framing your face with a crown of light
                  that no jewel could ever rival.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground">
                  Even in the quiet of night, it holds a gentle luster, like moonlight woven into strands, carrying the
                  soft promise of dreams yet to unfold.
                </p>
              </Card>


              <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect">
                <h2 className="font-sans text-2xl font-semibold mb-4 text-primary">A Crown of Glory</h2>

                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  Your hair is your crown, and you wear it with such natural grace. Whether it's flowing freely or
                  styled with care, it frames your beautiful face like a masterpiece deserves to be framed.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  Each strand seems to hold a story, catching whispers of sunlight and shadows, carrying with it the
                  elegance of every season you've graced.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground">
                  When it moves, it’s like poetry in motion – a gentle reminder that beauty is not just seen, but felt
                  in the quiet moments it creates.
                </p>
              </Card>

            </div>

            {/* Image */}
            <div className="relative">
              <Card className="overflow-hidden border-primary/20 py-0 glow-effect">
                                <Image
                                priority
                                width={1000}
                                height={1000}
                  src="/IMG-20250813-WA0003.jpg"
                  alt="Beautiful hair"
                  className="w-full h-auto object-cover"
                />
              </Card>
              <div className="absolute -top-4 -left-4">
                <Wind className="text-accent animate-pulse" size={32} />
              </div>
            </div>
          </div>

          {/* Poetry Section */}
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect text-center mb-16">
            <h2 className="font-sans text-3xl font-semibold mb-8 text-primary">Ode to Your Beautiful Hair</h2>
            <div className="font-sans text-xl leading-relaxed text-foreground space-y-4 max-w-3xl mx-auto">
              <p className="italic">
                "Like golden threads spun by angels above,
                <br />
                Your hair catches sunlight and whispers of love.
                <br />
                Each strand tells a story of beauty so rare,
                <br />
                My heart finds its home in your glorious hair."
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
