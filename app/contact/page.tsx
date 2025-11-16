'use client'

import { MapPin, Phone, Clock, Instagram, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ContactPage() {
  const hours = [
    { day: "Monday", time: "12:00 PM - 10:00 PM" },
    { day: "Tuesday", time: "12:00 PM - 10:00 PM" },
    { day: "Wednesday", time: "12:00 PM - 10:00 PM" },
    { day: "Thursday", time: "12:00 PM - 10:00 PM" },
    { day: "Friday", time: "12:00 PM - 10:00 PM" },
    { day: "Saturday", time: "12:00 PM - 10:00 PM" },
    { day: "Sunday", time: "Closed" },
  ]

  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs uppercase tracking-wider font-medium">
              Get in Touch
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-widest text-foreground mb-6">
            CONTACT US
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
            We'd love to hear from you. Visit us in Rockville Centre or reach out with any questions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Location Card */}
            <Card className="border-2 border-border/50 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-sans text-xl font-light tracking-wide text-foreground mb-3 uppercase">
                      Location
                    </h2>
                    <address className="not-italic text-muted-foreground leading-relaxed mb-4">
                      280 Merrick Rd<br />
                      Rockville Centre, NY 11570<br />
                      Long Island, New York
                    </address>
                    <Link
                      href="https://www.google.com/maps/search/?api=1&query=280%20Merrick%20Rd%2C%20Rockville%20Centre%2C%20NY%2011570"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      Get Directions →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border-2 border-border/50 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-sans text-xl font-light tracking-wide text-foreground mb-3 uppercase">
                      Phone
                    </h2>
                    <a
                      href="tel:5165039906"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      (516) 503-9906
                    </a>
                    <p className="text-sm text-muted-foreground/80 mt-2">
                      Call us for takeout orders or questions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="border-2 border-border/50 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Instagram className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-sans text-xl font-light tracking-wide text-foreground mb-3 uppercase">
                      Follow Us
                    </h2>
                    <Link
                      href="https://www.instagram.com/abuzaynnyc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      @abuzaynnyc →
                    </Link>
                    <p className="text-sm text-muted-foreground/80 mt-2">
                      Stay updated with our latest dishes and specials
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hours Card */}
          <Card className="border-2 border-border/50">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-sans text-xl font-light tracking-wide text-foreground uppercase">
                    Hours of Operation
                  </h2>
                </div>
              </div>
              
              <div className="space-y-3 pl-[72px]">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-2 border-b border-border/30 last:border-0"
                  >
                    <span className={`font-medium ${item.day === "Sunday" ? "text-muted-foreground/70" : "text-foreground"}`}>
                      {item.day}
                    </span>
                    <span className={`text-sm ${item.time === "Closed" ? "text-muted-foreground/70" : "text-muted-foreground"}`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/30 pl-[72px]">
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  We're closed on Sundays to allow our team to rest and recharge. Visit us any other day of the week for authentic Egyptian cuisine!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="rounded-xl overflow-hidden border-2 border-border/50 shadow-lg h-[400px] lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5423456789!2d-73.6473!3d40.6560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26da1f8e1f1f1%3A0x1234567890abcdef!2s280%20Merrick%20Rd%2C%20Rockville%20Centre%2C%20NY%2011570!5e0!3m2!1sen!2sus!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Abu Zayn Location Map"
          />
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-border" />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Ready to Order?
            </span>
            <div className="h-px w-8 bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Experience authentic Egyptian cuisine made with traditional recipes and the finest halal ingredients.
          </p>
          <Link
            href="https://www.toasttab.com/local/order/yoyo-chicken-merrick-rd-rockville-280-merrick-rd"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_8px_32px_hsla(15,75%,55%,0.25)] hover:shadow-[0_8px_32px_hsla(15,75%,55%,0.4)]"
          >
            Order Pickup Now
          </Link>
        </div>
      </div>
    </main>
  )
}