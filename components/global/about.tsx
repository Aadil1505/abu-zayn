'use client'

import Link from 'next/link'
import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import { ShinyButton } from '../ui/shiny-button'

export default function AboutSection() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const isInView = useInView(videoRef, { amount: 0.5 })

    useEffect(() => {
        if (!videoRef.current) return

        if (isInView) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }, [isInView])

    return (
        <section id='about' className="relative py-24 md:py-32 lg:py-40">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-linear-to-b from-background via-orange-50/10 to-background dark:via-orange-950/5" />

            <div className="container relative mx-auto max-w-6xl px-6">
                {/* Header */}
                <header className="mb-16 md:mb-24 text-center">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-primary/60" />
                        <span className="text-primary text-xs uppercase tracking-widest font-medium">
                            Our Story
                        </span>
                        <div className="h-px w-12 bg-primary/60" />
                    </div>
                    <h2 className="text-7xl md:text-8xl lg:text-9xl font-blinds font-medium tracking-widest text-foreground mb-6">
                        ABOUT US
                    </h2>
                </header>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
                    {/* Image */}
                    <figure className="relative group">
                        <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border shadow-lg">
                            <video
                                ref={videoRef}
                                src="/food-gif.mp4"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loop
                                muted
                                playsInline
                                preload="none"
                            />
                        </div>
                    </figure>

                    {/* Text Content */}
                    <article className="space-y-6">
                        <div className="space-y-5 text-base md:text-lg leading-relaxed">
                            <p className="text-muted-foreground">
                                Located in the heart of Rockville Centre, Abu Zayn brings{' '}
                                <strong className="text-foreground font-semibold border-b-2 border-primary italic">
                                    Authentic Middle Eastern flavors
                                </strong>{' '}
                                to Long Island with a modern twist.
                            </p>
                            <p className="text-muted-foreground">
                                From our signature shawarma to freshly prepared mezze platters, every dish is crafted with traditional recipes passed down through generations, using only the finest ingredients and halal meats.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="pt-2 flex items-center justify-center">
                            <Link href="/menu">
                                <ShinyButton>
                                    VIEW OUR MENU
                                </ShinyButton>
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}