import AboutSection from "@/components/global/about";
import { FeaturedMenu } from "@/components/global/featured";
import { Hero } from "@/components/global/hero";
import { Navbar } from "@/components/global/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturedMenu />
    </main>
  )
}