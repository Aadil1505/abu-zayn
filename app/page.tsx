import AboutSection from "@/components/global/about";
import { Gallery } from "@/components/global/gallery";
import { Hero } from "@/components/global/hero";
import { Location } from "@/components/global/location";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <Gallery/>
      <Location/>
    </main>
  )
}