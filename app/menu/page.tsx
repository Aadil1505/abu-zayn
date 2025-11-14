'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { MenuCard } from '@/components/menu/menu-card'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
  tags?: string[]
}

const menuData = {
  appetizers: [
    {
      name: 'Smoked Salmon Tartare',
      description: 'Norwegian salmon, avocado mousse, crispy capers, citrus oil',
      price: '$24',
      image: '/elegant-smoked-salmon-tartare-fine-dining.jpg',
      tags: ['GF'],
    },
    {
      name: 'Burrata & Heirloom Tomatoes',
      description: 'Creamy Italian burrata, heritage tomatoes, basil, aged balsamic',
      price: '$22',
      image: '/burrata-heirloom-tomatoes-fine-dining.jpg',
      tags: ['V'],
    },
    {
      name: 'Beef Carpaccio',
      description: 'Thinly sliced tenderloin, arugula, parmesan, truffle aioli',
      price: '$26',
      image: '/beef-carpaccio-fine-dining-plated.jpg',
    },
    {
      name: 'Wild Mushroom Soup',
      description: 'Forest mushrooms, thyme, crème fraîche, truffle essence',
      price: '$18',
      image: '/wild-mushroom-soup-elegant-bowl.jpg',
      tags: ['V', 'GF'],
    },
  ],
  entrees: [
    {
      name: 'Pan-Seared Sea Bass',
      description: 'Mediterranean sea bass, saffron risotto, grilled asparagus, lemon butter',
      price: '$48',
      image: '/pan-seared-sea-bass-fine-dining-plated.jpg',
      tags: ['GF'],
    },
    {
      name: 'Wagyu Ribeye',
      description: '12oz Japanese A5 wagyu, truffle mash, seasonal vegetables, red wine jus',
      price: '$82',
      image: '/wagyu-ribeye-steak-fine-dining.jpg',
    },
    {
      name: 'Duck Breast à l\'Orange',
      description: 'Roasted duck breast, orange gastrique, root vegetables, crispy skin',
      price: '$54',
      image: '/duck-breast-orange-fine-dining.jpg',
      tags: ['GF'],
    },
    {
      name: 'Wild Mushroom Risotto',
      description: 'Carnaroli rice, porcini, chanterelles, parmesan, white truffle oil',
      price: '$38',
      image: '/mushroom-risotto-fine-dining-plated.jpg',
      tags: ['V', 'GF'],
    },
    {
      name: 'Lamb Rack',
      description: 'New Zealand lamb, herb crust, potato gratin, mint jus, seasonal greens',
      price: '$62',
      image: '/lamb-rack-fine-dining-plated.jpg',
    },
  ],
  sides: [
    {
      name: 'Truffle Mac & Cheese',
      description: 'Three cheese blend, black truffle, crispy panko topping',
      price: '$14',
      image: '/truffle-mac-cheese-gourmet.jpg',
      tags: ['V'],
    },
    {
      name: 'Grilled Asparagus',
      description: 'Jumbo asparagus spears, lemon zest, parmesan',
      price: '$12',
      image: '/grilled-asparagus-fine-dining.jpg',
      tags: ['V', 'GF'],
    },
    {
      name: 'Roasted Brussels Sprouts',
      description: 'Caramelized sprouts, bacon lardons, balsamic glaze',
      price: '$13',
      image: '/roasted-brussels-sprouts-gourmet.jpg',
      tags: ['GF'],
    },
    {
      name: 'Truffle Fries',
      description: 'Hand-cut fries, white truffle oil, parmesan, herbs',
      price: '$11',
      image: '/truffle-fries-gourmet.jpg',
      tags: ['V'],
    },
  ],
  desserts: [
    {
      name: 'Chocolate Fondant',
      description: 'Dark chocolate lava cake, vanilla bean ice cream, berry compote',
      price: '$16',
      image: '/chocolate-fondant-lava-cake-fine-dining.jpg',
      tags: ['V'],
    },
    {
      name: 'Lemon Tart',
      description: 'Classic French tart, Italian meringue, raspberry coulis',
      price: '$14',
      image: '/lemon-tart-fine-dining-plated.jpg',
      tags: ['V'],
    },
    {
      name: 'Crème Brûlée',
      description: 'Madagascar vanilla custard, caramelized sugar, shortbread',
      price: '$15',
      image: '/placeholder.svg?height=300&width=400',
      tags: ['V', 'GF'],
    },
    {
      name: 'Tiramisu',
      description: 'Classic Italian dessert, espresso-soaked ladyfingers, mascarpone',
      price: '$14',
      image: '/placeholder.svg?height=300&width=400',
      tags: ['V'],
    },
  ],
  beverages: [
    {
      name: 'House Wine Selection',
      description: 'Red, white, or rosé — curated by our sommelier',
      price: '$12-18',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      name: 'Craft Cocktails',
      description: 'Signature cocktails using premium spirits and fresh ingredients',
      price: '$16-22',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      name: 'Artisan Coffee',
      description: 'Espresso, cappuccino, latte — single-origin beans',
      price: '$5-8',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      name: 'Premium Tea Selection',
      description: 'Curated loose-leaf teas from around the world',
      price: '$6-9',
      image: '/placeholder.svg?height=300&width=400',
    },
  ],
}

export default function MenuPage() {
  return (
    <main className="bg-background pt-20">

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        <Tabs defaultValue="appetizers" className="w-full">
          <TabsList className="sticky top-20 z-40 w-full justify-start overflow-x-auto mb-6 h-auto flex-nowrap gap-3 sm:gap-6 bg-background/95 backdrop-blur-sm border-b border-border rounded-none pb-3 px-1">
            <TabsTrigger 
              value="appetizers"
              className="text-xs sm:text-sm font-light tracking-[0.1em] uppercase data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground rounded-none bg-transparent border-b-2 border-transparent data-[state=active]:border-primary transition-colors px-3 sm:px-4 py-2 hover:text-foreground whitespace-nowrap"
            >
              Appetizers
            </TabsTrigger>
            <TabsTrigger 
              value="entrees"
              className="text-xs sm:text-sm font-light tracking-[0.1em] uppercase data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground rounded-none bg-transparent border-b-2 border-transparent data-[state=active]:border-primary transition-colors px-3 sm:px-4 py-2 hover:text-foreground whitespace-nowrap"
            >
              Entrées
            </TabsTrigger>
            <TabsTrigger 
              value="sides"
              className="text-xs sm:text-sm font-light tracking-[0.1em] uppercase data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground rounded-none bg-transparent border-b-2 border-transparent data-[state=active]:border-primary transition-colors px-3 sm:px-4 py-2 hover:text-foreground whitespace-nowrap"
            >
              Sides
            </TabsTrigger>
            <TabsTrigger 
              value="desserts"
              className="text-xs sm:text-sm font-light tracking-[0.1em] uppercase data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground rounded-none bg-transparent border-b-2 border-transparent data-[state=active]:border-primary transition-colors px-3 sm:px-4 py-2 hover:text-foreground whitespace-nowrap"
            >
              Desserts
            </TabsTrigger>
            <TabsTrigger 
              value="beverages"
              className="text-xs sm:text-sm font-light tracking-[0.1em] uppercase data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground rounded-none bg-transparent border-b-2 border-transparent data-[state=active]:border-primary transition-colors px-3 sm:px-4 py-2 hover:text-foreground whitespace-nowrap"
            >
              Beverages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="appetizers" className="mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {menuData.appetizers.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="entrees" className="mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {menuData.entrees.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sides" className="mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {menuData.sides.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts" className="mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {menuData.desserts.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beverages" className="mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {menuData.beverages.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center border-t border-border pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Badge variant="outline" className="text-xs uppercase tracking-wider border-primary/30 text-primary">V — Vegetarian</Badge>
            <Badge variant="outline" className="text-xs uppercase tracking-wider border-primary/30 text-primary">GF — Gluten Free</Badge>
          </div>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Please inform your server of any dietary restrictions or allergies.
          </p>
        </div>
      </div>

    </main>
  )
}
