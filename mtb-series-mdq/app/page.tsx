import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { PhotoGallery } from "@/components/photo-gallery"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NewsSection />
      <PhotoGallery />
    </main>
  )
}
