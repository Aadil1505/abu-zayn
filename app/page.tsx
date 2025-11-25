import AboutSection from "@/components/global/about";
import { Gallery } from "@/components/global/gallery";
import HeroCarousel from "@/components/global/hero-section";
import { Location } from "@/components/global/location";
import { Platter } from "@/components/global/platter";
import { Reviews } from "@/components/global/reviews";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel/>
      <AboutSection />
      <Platter/>
      <Gallery/>
      <Reviews/>
      <Location/>
    </main>
  )
}