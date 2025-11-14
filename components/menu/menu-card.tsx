import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
  tags?: string[]
}

interface MenuCardProps {
  item: MenuItem
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <Card className="group overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-500">
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>
      
      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-sans text-xs sm:text-sm font-light tracking-wide text-balance leading-tight uppercase">
            {item.name}
          </h3>
          <span className="text-xs sm:text-sm font-light whitespace-nowrap text-primary">
            {item.price}
          </span>
        </div>
        
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-pretty line-clamp-2">
          {item.description}
        </p>
        
        {item.tags && item.tags.length > 0 && (
          <div className="flex gap-1 flex-wrap">
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
