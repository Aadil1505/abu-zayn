import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Menu, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">

      {/* Content Container */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Text */}
        <div className="mb-6">
          <h1 className="text-8xl md:text-9xl font-bold font-blinds text-primary mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-primary/50 mx-auto mb-6 rounded-full" />
        </div>

        {/* Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            This Dish Is Not On Our Menu
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Looks like this page wandered off to the wrong kitchen. Let's get you back to something delicious.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="min-w-[200px] shadow-lg hover:shadow-xl"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[200px] border-border/60 hover:bg-accent/50 hover:border-primary/30"
          >
            <Link href="/menu">
              <Menu className="mr-2 h-5 w-5" />
              View Menu
            </Link>
          </Button>
        </div>
        
      </div>
    </div>
  )
}
