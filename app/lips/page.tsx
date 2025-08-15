"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Heart, SmileIcon as Kiss } from "lucide-react"
import { RomanticVideoBackground } from "@/components/romantic-video-background"


export default function LipsPage() {
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
        {[...Array(10)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/25 floating-heart"
            size={12 + Math.random() * 18}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 min-h-screen p-4 pb-24">
        <div className={`max-w-6xl mx-auto pt-20 ${showContent ? "fade-in-up" : "opacity-0"}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-sans text-5xl md:text-7xl font-bold text-foreground mb-6 glow-effect">
              Your Sweet
              <span className="text-primary block mt-2">Lips</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Soft petals that speak the language of love without saying a word
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <Card className="overflow-hidden border-primary/20 py-0 glow-effect">
                <img
                  src="/IMG-20250815-WA0014.jpg"
                  alt="Beautiful lips"
                  className="w-full h-auto object-cover"
                />
              </Card>
              <div className="absolute -bottom-4 -right-4">
                <Kiss className="text-accent animate-pulse" size={32} />
              </div>
            </div>

            {/* Romantic Text */}
            <div className="space-y-8">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect">
                <h2 className="font-sans text-2xl font-semibold mb-4 text-primary">Rose Petals of Love</h2>

                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  Your lips are like the softest rose petals, painted in the most perfect shade of natural beauty. When
                  you smile, they curve into the most enchanting shape that makes my world brighter.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  Every word that passes through them sounds like music, every laugh like the sweetest melody I've ever
                  heard.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  They carry the warmth of whispered promises, and the sweetness of dreams shared under moonlit skies,
                  each touch leaving an unspoken memory upon my soul.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground">
                  In their presence, silence feels complete — as if the world itself pauses to admire their beauty and
                  the love they silently speak.
                </p>
              </Card>

              <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect">
                <h2 className="font-sans text-2xl font-semibold mb-4 text-primary">Poetry in Motion</h2>

                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  When you speak, your lips dance with such grace, forming words that touch my soul. They tell stories
                  of kindness, whisper secrets of love, and share laughter that fills my heart with joy.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground mb-4">
                  Every sentence you breathe feels like a verse written just for me, carrying the rhythm of your heart
                  and the melody of your spirit.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground">
                  Even in silence, they speak — telling tales of devotion with a single smile, and promising forever
                  without a single word.
                </p>
              </Card>

            </div>
          </div>

          {/* Poetry Section */}
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-primary/20 glow-effect text-center mb-16">
            <h2 className="font-sans text-3xl font-semibold mb-8 text-primary">A Kiss of Words</h2>
            <div className="font-sans text-xl leading-relaxed text-foreground space-y-4 max-w-3xl mx-auto">
              <p className="italic">
                "Soft as morning dew on roses,
                <br />
                Sweet as honey from the hive,
                <br />
                Your lips speak love in silent poses,
                <br />
                Making my heart feel so alive."
              </p>
              <p className="italic">
                "Like petals brushing in the breeze,
                <br />
                Or waves that kiss the moonlit shore,
                <br />
                Your lips bring gentle, tender ease,
                <br />
                And make me love you all the more."
              </p>
            </div>
          </Card>

        </div>
      </div>
    </div>
  )
}
