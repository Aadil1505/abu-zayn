'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MenuCard } from '@/components/menu/menu-card'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
  tags?: string[]
  outOfStock?: boolean
}

const menuData = {
  sandwiches: [
    {
      name: 'Lamb Kebab Pita',
      description: 'Beef kabab in a Pita with your choice of toppings and sauces.',
      price: '$12',
      image: 'https://d1w7312wesee68.cloudfront.net/cJ38kabgB1zavPuif2kAJXRAuD7DvRfuKF54ZrMtEWo/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/3ff5df1d-aff4-497c-8d05-125ce120f3b7.jpg',
    },
    {
      name: 'Beef Shawarma Kaiser',
      description: 'Beef shawarma, on brioche bun, w/baby arugula, pickles, onions, parsley, your choice of sauce.',
      price: '$8.99',
      image: 'https://d1w7312wesee68.cloudfront.net/cWmEflBecXbZvppaquIbnzBHBdKMm0VC39qyg147XOM/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/2ccd34f2-3a32-413e-afb9-91eb53cdc04b.jpg',
    },
    {
      name: 'Beef Shawarma Pita',
      description: 'Beef shawarma, on pita, w/baby arugula, pickles, onions, parsley, your choice of sauce.',
      price: '$13',
      image: 'https://d1w7312wesee68.cloudfront.net/33mTzzOQQR11rUpf6BmDtWgI_7FP-zA0XaF8L_HaX8c/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/0d48934b-e1d8-4b6b-840f-15f258c7ecd7.jpg',
    },
    {
      name: 'Chicken Shawarma Kaiser',
      description: 'Chicken shawarma, on brioche bun, w/baby arugula, pickles, onions, parsley, your choice of sauce.',
      price: '$7.99',
      image: 'https://d1w7312wesee68.cloudfront.net/6aruXylPfQ6JZ0Bh7vLWX3rVBo8oYbypm-65pDBL6Rs/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/dfb7f885-4142-472b-b627-dfe6c832ae77.jpg',
    },
    {
      name: 'Chicken Shawarma Pita',
      description: 'Chicken shawarma, on pita, w/baby arugula, pickles, onions, parsley, your choice of sauce.',
      price: '$11',
      image: 'https://d1w7312wesee68.cloudfront.net/XK5nQGMkWr7OF1I_2BdcPwd0E2pciG6lk-7wuvxQPQM/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/0f88ba83-0a07-4577-bda9-cfa8735f98c1.jpg',
    },
    {
      name: 'Falafel Pita',
      description: 'Falafel, on pita, w/baby arugula, pickles, onions, parsley, your choice of sauce.',
      price: '$10',
      image: 'https://d1w7312wesee68.cloudfront.net/dCEsjsNCaUdZOvRM2C1zMol6A_x38o0HpQHLqdSbm6s/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/7300d20d-953c-4cf5-aa0b-ad3f9b9103d3.jpg',
    },
    {
      name: 'Fried Shrimp Pita',
      description: 'Fried shrimp, on pita, w/baby arugula, pickles, onions, parsley, your choice of sauce.',
      price: '$13',
      image: 'https://d1w7312wesee68.cloudfront.net/KU96OceoeiRUxjV31G6b5VQ4owHHaHsFO40HYPn9nno/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/72362c7f-5408-4ebb-9a5e-9d1031d37f1b.jpg',
    },
    {
      name: 'Kofta Sandwiches',
      description: 'Kofta, on french baguette, w/baby arugula, pickles, onions, parsley, your choice of sauce.',
      price: '$12',
      image: 'https://d1w7312wesee68.cloudfront.net/EABwCUidMuwW93vCcHKcdttGXVtIYJ05yh1_DV_YtBM/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/b61e7f4f-6051-4cb0-996d-2aca9bd09b1b.jpg',
    },
    {
      name: 'Shish Tawook Pita',
      description: 'Chicken Kebab in a Pita Bread with Choice of Argula, Pickled Vegetable, Tomato, Onion & Parsley. Choice of Sauces',
      price: '$12',
      image: 'https://d1w7312wesee68.cloudfront.net/b2pNvAz0h9ULxYKDDvd3MAR92PRTyANCyORmbJDvEEw/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/eff7244f-ec27-4937-a2eb-a040cb292095.jpg',
    },
  ],
  platters: [
    {
      name: 'Shish Tawook Platter',
      description: 'Tender cubes of chicken, marinated in our house spices and skewered as classic kebabs, flame-grilled and finished with caramelized onions and a smoky grilled tomato.',
      price: '$18',
      image: 'https://d1w7312wesee68.cloudfront.net/CgKN1fr1Ohq3Yttx0oZigbBDcpedvO2NcwFYJvaESTQ/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/a45f522b-5956-462c-9e2a-95e7d2a63d46.jpg',
    },
    {
      name: 'Beef Kofta Platter',
      description: 'Our own house-ground beef, seasoned with a one-of-a-kind spice mix, piled on rice and crowned with caramelized onions and a char-kissed tomato.',
      price: '$19',
      image: 'https://d1w7312wesee68.cloudfront.net/4lnuNPnF_xLbAE_-5C06slUejENmszmHu2AD9Mg1i5w/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/c4320961-cb71-47dd-857f-3622c060c909.jpg',
    },
    {
      name: 'Lamb Kebab Platter',
      description: 'Skewered beef kabobs seared over open flame, piled on rice, and crowned with caramelized onions and a char-kissed tomato.',
      price: '$20',
      image: 'https://d1w7312wesee68.cloudfront.net/sb18j3OdFsvqsCU_FM5aiLlq_rC1rO97IDXQnqXKmJU/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/8be59589-2a51-424c-8aac-91383b75ceb5.jpg',
    },
    {
      name: 'Lamb Chops Platter',
      description: 'House-marinated New Zealand halal lamb with bold Egyptian spices, piled on rice and crowned with caramelized onions and a char-kissed tomato.',
      price: '$28',
      image: 'https://d1w7312wesee68.cloudfront.net/jV9ua6H7fxQ168uDNvOlzUkqNmPGoXFj2Y9aKbY3TK4/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/e1a1f077-4cb5-452d-ac86-99b07fb3957a.jpg',
    },
    {
      name: 'Ribeye Steak Platter',
      description: 'Comes w/ Choice rice or fries and a side of salad.',
      price: '$30',
      image: 'https://d1w7312wesee68.cloudfront.net/aDt6m67q7iGCIJbwiWl5rC9nx_yl-kK3iWxH58malw8/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/71b10781-0c4f-45be-89ff-baf80f349364.jpg',
      outOfStock: true,
    },
    {
      name: 'Rotisserie Chicken Platter',
      description: 'Comes w/ Choice rice or fries and a side of salad.',
      price: '$28',
      image: 'https://d1w7312wesee68.cloudfront.net/LlcrT_gQYxRGil-NGAT5OnLOLJF1TxHA1qIyv1--Vqk/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/da717c09-dde2-4f2f-8735-daa187dc0ff5.jpg',
      outOfStock: true,
    },
    {
      name: 'Half Chicken Platter',
      description: 'Egyptian-style half chicken marinated in bold spices, fire-roasted to juicy perfection, served with caramelized onions and a smoky grilled tomato',
      price: '$18',
      image: 'https://d1w7312wesee68.cloudfront.net/HNAQ18vJkFlXPWs1Jmek7jWkHDptLxEvxIdo2qHbgXU/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/a7ba7019-1138-42e3-b2f7-9dea6dbabad5.jpg',
    },
    {
      name: 'Mix Grill Platter',
      description: 'Build your perfect mixed grill—choose three sizzling skewers like beef kabob, chicken kofta, or chicken kebab—piled on rice and crowned with caramelized onions and a char-kissed tomato.',
      price: '$30',
      image: 'https://d1w7312wesee68.cloudfront.net/sgTf9r6kKfvcNM9JgbBAcHC2viinj-6NSFOzPgfDKIc/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/9d7293b8-a880-4cfa-a2cc-2f4a2e43e6ef.jpg',
    },
    {
      name: 'Chicken Kofta Platter',
      description: 'Spiced ground-chicken kofta skewers seared over open flame, piled on rice, and crowned with caramelized onions and a char-kissed tomato.',
      price: '$19',
      image: 'https://d1w7312wesee68.cloudfront.net/-FWsmQbWMOJz3eWYTOn_wvqY5pkZto4IUsL6wV9DTuU/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/8088932f-8882-4ee7-b890-78842186e5dd.jpg',
    },
  ],
  bowls: [
    {
      name: 'Chicken Shawarma Bowl',
      description: 'Tender sliced chicken shawarma served with fresh tomato, onions, and tangy pickled vegetables on top.',
      price: '$17',
      image: 'https://d1w7312wesee68.cloudfront.net/pxtNm-LxVXNx4j8jeFAUuvDmuJKXCXlvq6xxqzlZKrI/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/6ba8865e-eac0-49a2-9173-a05a6ca2a033.jpg',
    },
    {
      name: 'Beef Shawarma Bowl',
      description: 'Tender steak, marinated and shaved thin, layered over fragrant rice with juicy tomato, sweet onion, and our signature pickled veggies.',
      price: '$18',
      image: 'https://d1w7312wesee68.cloudfront.net/OHIbO7IX92f12WrhrXRog4I3T3XDgXFS93T36Qff5WM/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/5a4645ef-1ae1-434c-af85-934c98bb0104.jpg',
    },
    {
      name: 'Mix Shawarma Bowl',
      description: 'Marinated steak & chicken shawarma, thinly sliced over rice with pickled vegetables, tomato, and onion.',
      price: '$20',
      image: 'https://d1w7312wesee68.cloudfront.net/bv2gTUKdAvBOXYou8U2IAWGfYbZkmx8xBMJOVYYQTRw/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/f113d400-625a-41f2-b28b-b252d809905b.jpg',
    },
  ],
  sides: [
    {
      name: 'Egyptian Salad',
      description: 'A cool, crunchy medley of tomato, cucumber, and onion—our take on the classic Egyptian salata baladi—finished with fresh herbs, olive oil, and a tangy lemon splash.',
      price: '$7 / $12',
      image: 'https://d1w7312wesee68.cloudfront.net/byBDVBQd34mm8WueY18zjDvwPKmCQ0MvXfLIJgAasT0/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/6f5dbb3b-0cfe-45f1-bc69-8da505c15a83.jpg',
    },
    {
      name: 'Babaghanoush',
      description: 'Smoky roasted eggplant blended with tahini, garlic, and lemon, drizzled with olive oil. Served with warm pita for dipping.',
      price: '$8 / $14',
      image: 'https://d1w7312wesee68.cloudfront.net/CXCLJWvIwD9jyaqnofLTRC_qNulwR5zwvO7vcqKo6jM/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/9a4a72d6-a0d2-4488-bee9-21d24a6302b8.jpg',
    },
    {
      name: 'Hummus',
      description: 'Rustic Egyptian hummus—hand-mashed chickpeas with tahini, garlic, and lemon—creamy yet delightfully chunky, drizzled with olive oil and served with warm pita.',
      price: '$8 / $15',
      image: 'https://d1w7312wesee68.cloudfront.net/VeeNzbfaSgDMKUzkBSpqgnzRtyAhnTnCKPW-t6V2-3I/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/7527c00b-d171-45bf-90c9-f8fc021596c6.jpg',
    },
    {
      name: 'Fries',
      description: 'Crispy golden fries tossed in aromatic truffle oil and finished with a generous sprinkle of grated cheese.',
      price: '$5 / $8',
      image: 'https://d1w7312wesee68.cloudfront.net/kMaiKtS7mKS5pO76v3DF19kzqUJkz3E93hIui438BRs/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/dd139399-2588-4e5f-89a8-02baa1de4324.jpg',
    },
  ],
  desserts: [
    {
      name: 'Rice Pudding',
      description: '',
      price: '$3.50',
      image: 'https://d1w7312wesee68.cloudfront.net/WhzsnpTU5agax8n5JqL28_5yxAH4IpzORjZJ8MgmcBI/resize:fit:360:360/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/7d70e938-a1e7-45a0-9a9c-39f2ba6bf9ce.jpg',
    },
  ],
  beverages: [
  ],
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-widest text-foreground mb-6">
            MENU
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
            An overview of our delicious dishes
          </p>
        </div>
        <Tabs defaultValue="sandwiches" className="w-full">
          <TabsList className="w-full justify-center overflow-x-auto mb-8 h-auto flex-wrap sm:flex-nowrap gap-2 sm:gap-3 bg-muted/50 rounded-lg p-2">
            <TabsTrigger 
              value="sandwiches"
              className="text-xs sm:text-sm font-light tracking-widest uppercase data-[state=active]:bg-background data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground rounded-md transition-all px-4 py-2.5 hover:text-foreground hover:bg-background/50 whitespace-nowrap"
            >
              Sandwiches
            </TabsTrigger>
            <TabsTrigger 
              value="platters"
              className="text-xs sm:text-sm font-light tracking-widest uppercase data-[state=active]:bg-background data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground rounded-md transition-all px-4 py-2.5 hover:text-foreground hover:bg-background/50 whitespace-nowrap"
            >
              Platters
            </TabsTrigger>
            <TabsTrigger 
              value="bowls"
              className="text-xs sm:text-sm font-light tracking-widest uppercase data-[state=active]:bg-background data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground rounded-md transition-all px-4 py-2.5 hover:text-foreground hover:bg-background/50 whitespace-nowrap"
            >
              Bowls
            </TabsTrigger>
            <TabsTrigger 
              value="sides"
              className="text-xs sm:text-sm font-light tracking-widest uppercase data-[state=active]:bg-background data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground rounded-md transition-all px-4 py-2.5 hover:text-foreground hover:bg-background/50 whitespace-nowrap"
            >
              Sides
            </TabsTrigger>
            <TabsTrigger 
              value="desserts"
              className="text-xs sm:text-sm font-light tracking-widest uppercase data-[state=active]:bg-background data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground rounded-md transition-all px-4 py-2.5 hover:text-foreground hover:bg-background/50 whitespace-nowrap"
            >
              Desserts
            </TabsTrigger>
            <TabsTrigger 
              value="beverages"
              className="text-xs sm:text-sm font-light tracking-widest uppercase data-[state=active]:bg-background data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground rounded-md transition-all px-4 py-2.5 hover:text-foreground hover:bg-background/50 whitespace-nowrap"
            >
              Beverages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sandwiches" className="mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {menuData.sandwiches.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="platters" className="mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {menuData.platters.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bowls" className="mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {menuData.bowls.map((item, index) => (
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
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Please inform your server of any dietary restrictions or allergies.
          </p>
        </div>
      </div>

    </main>
  )
}