import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Location = () => {
  const hours = [
    { day: "Monday", time: "12:00 PM - 10:00 PM" },
    { day: "Tuesday", time: "12:00 PM - 10:00 PM" },
    { day: "Wednesday", time: "12:00 PM - 10:00 PM" },
    { day: "Thursday", time: "12:00 PM - 10:00 PM" },
    { day: "Friday", time: "12:00 PM - 10:00 PM" },
    { day: "Saturday", time: "12:00 PM - 10:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section className="py-24 bg-background" id="location">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-widest text-foreground mb-6">
            VISIT US
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
            Authentic Egyptian cusine in Rockville Center
          </p>
        </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-border">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        280 Merrick Rd<br />
                        Rockville Centre, NY 11570
                      </p>
                      <Button 
                        variant="link" 
                        className="px-0 h-auto text-primary hover:text-primary/80 mt-2"
                        asChild
                      >
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=280%20Merrick%20Rd%2C%20Rockville%20Centre%2C%20NY%2011570" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Get Directions →
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">Phone</h3>
                      <a 
                        href="tel:5165039906" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (516) 503-9906
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-3">Hours</h3>
                      <div className="space-y-2">
                        {hours.map((item) => (
                          <div 
                            key={item.day} 
                            className="flex justify-between text-sm"
                          >
                            <span className={item.day === "Sunday" ? "text-muted-foreground/70" : "text-muted-foreground font-medium"}>
                              {item.day}
                            </span>
                            <span className={item.time === "Closed" ? "text-muted-foreground/70" : "text-muted-foreground"}>
                              {item.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg h-full min-h-[400px]">
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
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_8px_32px_hsla(15,75%,55%,0.25)] hover:shadow-[0_8px_32px_hsla(15,75%,55%,0.4)] transition-all duration-300"
              asChild
            >
              <a href="https://www.toasttab.com/local/order/yoyo-chicken-merrick-rd-rockville-280-merrick-rd/" target="_blank" rel="noopener noreferrer">
                Order Pickup Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
