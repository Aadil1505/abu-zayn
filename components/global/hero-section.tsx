'use client'

import * as React from 'react'
import { Play, Pause, ShoppingCart } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

const slides = [
  {
    type: 'video',
    src: 'abu-zayn-grill.mp4',
    title: 'Video',
  },
  {
    type: 'image',
    src: 'https://d1w7312wesee68.cloudfront.net/B4y_W0tfOJXVCdLouaZJLMtowFRLLV59UBJ2yVLUqYQ/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/5a4645ef-1ae1-434c-af85-934c98bb0104.jpg',
    title: 'Waffle',
  },
  {
    type: 'image',
    src: 'https://d1w7312wesee68.cloudfront.net/vyiCzXk_rad4_kcQ23wni9z7AhUfedbDbnY2k-zIaOQ/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/0f88ba83-0a07-4577-bda9-cfa8735f98c1.jpg',
    title: 'Milkshake',
  },
]

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [videoPlaying, setVideoPlaying] = React.useState(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const autoplayRef = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    })
  )

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  React.useEffect(() => {
    if (videoRef.current && current === 1) {
      if (videoPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [videoPlaying, current])

  // Handle video ended event to advance to next slide
  React.useEffect(() => {
    const video = videoRef.current
    if (!api) return

    const handleVideoEnded = () => {
      // Move to next slide after video completes
      api.scrollNext()
    }

    if (current === 1 && video) {
      // Stop autoplay when on video slide
      autoplayRef.current.stop()
      video.addEventListener('ended', handleVideoEnded)
    } else if (current !== 1) {
      // Resume autoplay for image slides
      autoplayRef.current.play()
    }

    return () => {
      video?.removeEventListener('ended', handleVideoEnded)
    }
  }, [api, current])

  const toggleVideoPlayback = () => {
    setVideoPlaying(!videoPlaying)
  }

  const handleOrderNow = () => {
    // Add your order logic here
    console.log('Order Now clicked')
  }

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-background">
      <Carousel
        setApi={setApi}
        plugins={[autoplayRef.current]}
        className="h-full w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="h-screen ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen pl-0">
              {slide.type === 'video' ? (
                <video
                  ref={videoRef}
                  src={slide.src}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Logo and Tagline - Center */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pointer-events-none">
        <div className="flex flex-col items-center">
          <img 
            src="/abu-zayn-transparent.png" 
            alt="Abu Zayn Logo" 
            className="w-64 md:w-96 h-auto mb-6 drop-shadow-2xl"
          />
          
          {/* Separator Line */}
          <div className="w-16 h-px bg-white/70 mb-5" />
          
          {/* Tagline with Background */}
          <div className="px-3 py-2 bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl">
            <h2 className="text-xs md:text-sm font-medium tracking-[0.25em] text-center uppercase text-white">
              Classic Egyptian Excellence
            </h2>
          </div>
        </div>
      </div>

      {/* Order Now Button - Bottom Left */}
      <Button
        className="absolute bottom-12 left-8 z-20 font-semibold shadow-2xl transition-transform hover:scale-105 pointer-events-auto"
      >
        <Link href={"https://www.toasttab.com/local/order/yoyo-chicken-753-merrick-rd-baldwin-753-merrick-rd"}>
          ORDER NOW
        </Link>
      </Button>

      {/* Video Play/Pause Button */}
      {current === 1 && (
        <Button
          onClick={toggleVideoPlayback}
          size="icon"
          variant="ghost"
          className="absolute bottom-12 right-8 z-20 rounded-full bg-background/20 text-primary-foreground backdrop-blur-md transition-transform hover:bg-background/40 hover:scale-110 pointer-events-auto"
          aria-label={videoPlaying ? 'Pause video' : 'Play video'}
        >
          {videoPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>
      )}

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-3 rounded-full transition-all pointer-events-auto ${index === current - 1
                ? 'w-12 bg-primary'
                : 'w-3 bg-muted-foreground/50 hover:bg-muted-foreground'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}