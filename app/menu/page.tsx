'use client'

import Image from "next/image"
import { menuData } from "@/components/menu/menu"
import { MenuCard } from "@/components/menu/menu-card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"


export default function MenuPage() {
  const [activeTab, setActiveTab] = useState(menuData.categories[0].id)

  return (
    <main className="min-h-screen bg-background pt-20 tracking-widest">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        <div className="text-center mb-8">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-blinds font-medium tracking-widest text-foreground mb-6">
            MENU
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
            An overview of our delicious dishes
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="relative mb-8">
            <TabsList className="w-full justify-start overflow-x-auto overflow-y-hidden mb-0 h-auto inline-flex gap-2 bg-transparent p-0 scrollbar-hide snap-x snap-mandatory scroll-smooth">
              {menuData.categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  // className="text-md inline-flex items-center justify-center font-blinds uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-muted/50 data-[state=inactive]:text-muted-foreground rounded-full transition-all px-4 py-2.5 hover:bg-muted hover:text-foreground whitespace-nowrap snap-start shrink-0 min-h-9"
                  className="px-5 py-2 rounded-xl uppercase font-blinds text-xl snap-center transition-all"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuData.categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {category.items.map((item, index) => (
                  <MenuCard key={index} item={item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center border-t border-border pt-8">
          <div className="flex flex-col items-center gap-4 mb-4">
            <Image
              src="/halal.webp"
              width={48}
              height={48}
              className='size-12 invert-100'
              alt="Halal Certified"
              loading="lazy"
            />
            <p className="text-sm font-medium text-primary-foreground tracking-wide">
              100% HALAL CERTIFIED
            </p>
          </div>
          <p className="text-xs text-primary-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Please inform your server of any dietary restrictions or allergies.
          </p>
        </div>
      </div>
    </main>
  )
}