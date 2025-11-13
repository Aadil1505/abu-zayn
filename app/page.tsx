import AboutSection from "@/components/global/about";
import { DirectionsButtons } from "@/components/global/directions";
import { FeaturedMenu } from "@/components/global/featured";
import { Gallery } from "@/components/global/gallery";
import { Hero } from "@/components/global/hero";
import { Navbar } from "@/components/global/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      {/* <FeaturedMenu /> */}
      <Gallery/>
      <DirectionsButtons/>
    </main>
  )
}