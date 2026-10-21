import { Hero } from "@/components/sections/hero"
import { ServicesBento } from "@/components/sections/services-bento"
import { WorkMarquee } from "@/components/sections/work-marquee"
import { Pricing } from "@/components/sections/pricing"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ServicesBento />
      <WorkMarquee />
      <Pricing />
      <Footer />
    </main>
  )
}
