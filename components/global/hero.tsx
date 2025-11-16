"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-100">
                    <source src="cooking-hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-background/50" />
            </div>

            <div className="relative z-10 h-full flex items-center justify-center px-6">
                <div className="text-center max-w-6xl mx-auto space-y-12">
                    <div className="space-y-4">
                        {/* Logo Image */}
                        <div className="flex justify-center">
                            <Image
                                src="/abu-zayn-transparent.png"
                                alt="Abu Zayn"
                                width={800}
                                height={200}
                                className="w-full max-w-2xl md:max-w-4xl lg:max-w-5xl h-auto"
                                priority
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-16 h-px bg-foreground" />
                    </div>

                    <p className="text-xs sm:text-sm md:text-base text-foreground font-semibold uppercase">
                        Classic Egyptian Excellence
                    </p>

                    <div className="pt-4">
                        <Button
                            size="lg"
                            // className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs uppercase tracking-[0.2em] px-12 h-12 transition-all hover:scale-105"
                        >
                            <Link href={"https://www.toasttab.com/local/order/yoyo-chicken-merrick-rd-rockville-280-merrick-rd/"}>
                                ORDER NOW
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <div className="w-px h-12 bg-foreground" />
                <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
            </div>
        </section>
    )
}