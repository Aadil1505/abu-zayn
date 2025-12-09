import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
  tags?: string[]
  outOfStock?: boolean
}

interface MenuCardProps {
  item: MenuItem
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <Card className="group overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-500 flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <Image
          src={item.image || "/abu-zayn-transparent.webp"}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        {item.outOfStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-sans text-xs sm:text-sm font-light tracking-wide text-balance leading-tight uppercase">
            {item.name}
          </h3>
          <span className="text-xs sm:text-sm font-light whitespace-nowrap text-primary">
            {item.price}
          </span>
        </div>
        
        {item.description && (
          <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-pretty">
            {item.description}
          </p>
        )}
        
        {item.tags && item.tags.length > 0 && (
          <div className="flex gap-1 flex-wrap mt-auto">
            {item.tags.map((tag, tagIndex) => (
              <Badge 
                key={tagIndex} 
                variant="outline" 
                className="text-[10px] sm:text-xs font-light uppercase tracking-wider border-primary/30 text-primary/90 px-1.5 py-0"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}