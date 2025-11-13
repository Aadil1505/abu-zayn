import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function DirectionsButtons() {
  const restaurantAddress = "123 Main Street, New York, NY 10001"
  const encodedAddress = encodeURIComponent(restaurantAddress)
  
  // Google Maps URL (works on all platforms)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  
  // Apple Maps URL (works on iOS/macOS)
  const appleMapsUrl = `https://maps.apple.com/?address=${encodedAddress}`

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button asChild>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <MapPin className="mr-2 h-4 w-4" />
          Open in Google Maps
        </a>
      </Button>
      
      <Button asChild variant="outline">
        <a href={appleMapsUrl} target="_blank" rel="noopener noreferrer">
          <MapPin className="mr-2 h-4 w-4" />
          Open in Apple Maps
        </a>
      </Button>
    </div>
  )
}