import Link from 'next/link'
import { ShinyButton } from '../ui/shiny-button'

export default function AboutSection() {
    return (
        <section id='about' className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
            {/* Simple linear Background */}
            <div className="absolute inset-0 bg-linear-to-b from-background via-orange-50/20 to-background dark:via-orange-950/10" />

            <div className="relative mx-auto max-w-5xl space-y-8 px-4 sm:px-6 md:space-y-12 lg:space-y-16">
                {/* Simple Header with Orange Accent */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <div className="h-px w-8 bg-primary" />
                        <span className="text-primary text-xs uppercase tracking-wider font-medium">
                            Our Story
                        </span>
                        <div className="h-px w-8 bg-primary" />
                    </div>
                    <h2 className="text-7xl md:text-8xl lg:text-9xl font-blinds font-medium tracking-widest text-foreground mb-6">
                        ABOUT US
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Image Container */}
                    <div className="relative order-1 group">
                        <div className="relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden border border-primary/20">
                            <img
                                src="food-gif.gif"
                                className="w-full h-full object-cover"
                                alt="Abu Zayn restaurant interior in Rockville Centre"
                            />
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="relative space-y-4 sm:space-y-6 order-2">
                        <div className="space-y-3 sm:space-y-4">
                            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                Located in the heart of Rockville Centre, Abu Zayn brings{' '}
                                <span className="text-foreground italic font-semibold border-b-2 border-primary">
                                    Authentic Middle Eastern Flavors
                                </span>{' '}
                                to Long Island with a modern twist.
                            </p>
                            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                From our signature shawarma to freshly prepared mezze platters, every dish is crafted with traditional recipes passed down through generations, using only the finest ingredients and halal meats.
                            </p>
                        </div>

                        {/* View Menu Button */}
                        <div className="pt-4 sm:pt-6">
                            <Link href="/menu">
                                <ShinyButton>
                                    VIEW OUR MENU
                                </ShinyButton>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}