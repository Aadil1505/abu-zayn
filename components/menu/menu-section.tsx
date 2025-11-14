import { Badge } from '@/components/ui/badge'

interface MenuItem {
  name: string
  description: string
  price: string
  tags?: string[]
}

interface MenuSectionProps {
  title: string
  number: string
  items: MenuItem[]
}

export function MenuSection({ title, number, items }: MenuSectionProps) {
  return (
    <section className="mb-16">
      <div className="flex items-baseline gap-6 mb-12">
        <span className="text-6xl sm:text-7xl md:text-8xl font-serif font-light text-muted-foreground/30">
          {number}
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        {items.map((item, index) => (
          <article key={index} className="group">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-serif text-xl sm:text-2xl font-normal group-hover:text-muted-foreground transition-colors">
                {item.name}
              </h3>
              <span className="text-lg sm:text-xl font-light whitespace-nowrap">
                {item.price}
              </span>
            </div>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
              {item.description}
            </p>
            
            {item.tags && item.tags.length > 0 && (
              <div className="flex gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant="secondary" 
                    className="text-xs font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
