import Link from "next/link"
import { Button } from "../ui/button"

export function Platter() {
    return (
        <section id="platter" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container max-w-7xl mx-auto">
                {/* Gradient card */}
                <div className="relative bg-linear-to-br from-primary via-primary to-orange-600 rounded-2xl lg:rounded-3xl p-6 py-8 sm:p-12 lg:p-16 xl:p-20 shadow-xl overflow-hidden">
                    <div className="relative grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                        {/* Content */}
                        <div className="text-center lg:text-left space-y-6">
                            <span className="inline-block text-secondary-foreground/90 text-xs sm:text-sm uppercase tracking-widest font-medium">
                                Signature Dish
                            </span>
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-blinds tracking-widest text-secondary-foreground">
                                PLATTERS
                            </h2>
                            <p className="text-lg sm:text-xl text-secondary-foreground/90 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Experience the ultimate feast with our generous platters featuring premium grilled meats, fresh salads, and authentic sides
                            </p>
                            {/* CTA Buttons */}
                            <div className="flex gap-3 justify-center lg:justify-start pt-2">
                                <Button variant="secondary" size="lg" asChild>
                                    <Link href="/menu">
                                        VIEW MENU
                                    </Link>
                                </Button>
                                <Button size="lg" asChild>
                                    <Link href="https://www.toasttab.com/local/order/yoyo-chicken-merrick-rd-rockville-280-merrick-rd">
                                        ORDER NOW
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        {/* Platter Images */}
                        <div className="relative lg:absolute lg:right-4 xl:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-2/5 xl:w-1/3">
                            <div className="relative max-w-sm lg:max-w-md mx-auto">
                                <div className="relative flex items-center justify-center">
                                    {/* Main centered image */}
                                    <img
                                        src="platter.png"
                                        alt="Abu Zayn signature platter with grilled meats and sides"
                                        className="relative w-3/4 md:w-full drop-shadow-2xl transition-transform duration-500 hover:scale-105 z-10"
                                    />
                                    {/* Second platter image - half out of container at right */}
                                    <img
                                        src="platter.png"
                                        alt="Abu Zayn signature platter"
                                        className="absolute left-45 translate-x-1/2 w-3/4 md:w-full opacity-20 drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}