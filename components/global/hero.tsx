"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="h-full w-full object-cover opacity-100"
                >
                    <source src="/cooking.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-background/30" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="mx-auto max-w-6xl space-y-12 text-center">
                    {/* Logo */}
                    <div className="space-y-4">
                        <div className="flex justify-center">
                            <Image
                                src="/abu-zayn-transparent.png"
                                alt="Abu Zayn"
                                width={800}
                                height={200}
                                className="h-auto w-full max-w-2xl md:max-w-4xl lg:max-w-5xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="flex justify-center">
                        <div className="h-px w-16 bg-muted-foreground/40" />
                    </div>

                    {/* Tagline */}
                    <p className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground sm:text-sm md:text-base">
                        Middle Eastern Excellence
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <Button
                            size="lg"
                            className="h-12 px-12 text-xs font-medium uppercase tracking-[0.2em] transition-all hover:scale-105"
                        >
                            Order Now
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
                <div className="h-12 w-px bg-muted-foreground/30" />
                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
            </div>
        </section>
    )
}