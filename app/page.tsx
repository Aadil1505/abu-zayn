import AboutSection from "@/components/global/about";
import { Gallery } from "@/components/global/gallery";
import HeroCarousel from "@/components/global/hero-section";
// import { Hero } from "@/components/global/hero";
import { Location } from "@/components/global/location";
import { Platter } from "@/components/global/platter";
import { Reviews } from "@/components/global/reviews";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Hero /> */}
      <HeroCarousel/>
      <AboutSection />
      <Platter/>
      <Gallery/>
      <Reviews/>
      <Location/>
    </main>
  )
}