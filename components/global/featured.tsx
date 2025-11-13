"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const featuredDishes = [
  {
    name: "Koshari",
    description: "Egypt's beloved comfort food - rice, lentils, and pasta topped with spiced tomato sauce and crispy onions",
    image: "/dishes/koshari.jpg",
    category: "Traditional"
  },
  {
    name: "Mixed Grill",
    description: "Tender lamb kofta, marinated chicken, and succulent beef served with warm pita and tahini",
    image: "/dishes/mixed-grill.jpg",
    category: "Signature"
  },
  {
    name: "Stuffed Grape Leaves",
    description: "Hand-rolled vine leaves filled with seasoned rice, herbs, and aromatic spices",
    image: "/dishes/grape-leaves.jpg",
    category: "Mezze"
  },
  {
    name: "Fattah",
    description: "Layers of crispy bread, rice, and tender meat in aromatic garlic-vinegar sauce",
    image: "/dishes/fattah.jpg",
    category: "Traditional"
  }
]

export function FeaturedMenu() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 bg-background h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground font-semibold">
            Our Specialties
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground px-4">
            Signature Dishes
          </h2>
          <div className="flex justify-center pt-1 sm:pt-2">
            <div className="w-12 sm:w-16 h-px bg-border" />
          </div>
        </div>

        {/* Featured Dishes - Mobile-First Single Column */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 mb-8 sm:mb-12">
          {featuredDishes.map((dish, index) => (
            <div
              key={index}
              className="group active:opacity-70 transition-opacity"
            >
              <div className="relative aspect-[16/11] sm:aspect-[4/3] overflow-hidden bg-muted mb-4 sm:mb-6 rounded-sm">
                {/* Placeholder for dish image - replace with actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-amber-800/30 flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl opacity-20">🍽️</span>
                </div>
                {/* When you add images, uncomment this:
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/5 transition-colors duration-500" />

                {/* Category Badge on Image - Mobile Friendly */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <span className="bg-primary/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs uppercase tracking-wider text-primary-foreground font-medium rounded-full shadow-sm">
                    {dish.category}
                  </span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 px-1">
                <h3 className="text-2xl sm:text-2xl lg:text-3xl font-light tracking-tight text-foreground">
                  {dish.name}
                </h3>
                <p className="text-base sm:text-sm leading-relaxed text-muted-foreground">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Larger Touch Target */}
        <div className="text-center pt-4 sm:pt-8">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground active:bg-primary/80 hover:bg-primary/90 font-medium text-sm sm:text-xs uppercase tracking-[0.2em] px-12 h-14 sm:h-12 transition-all touch-manipulation"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}