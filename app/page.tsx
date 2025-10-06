import { HeroSection } from "@/components/hero-section"
import { OurStorySection } from "@/components/our-story-section"
import { GallerySection } from "@/components/gallery-section"
import { EventDetailsSection } from "@/components/event-details-section"
import { RsvpSection } from "@/components/rsvp-section"
import { LoadingAnimation } from "@/components/loading-animation"
import { FloatingPetals } from "@/components/floating-petals"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollToTopOnLoad } from "@/components/scroll-to-top-on-load"

export default function WeddingPage() {
  return (
    <>
      <LoadingAnimation />
      <FloatingPetals />
      <ScrollToTop />
      <ScrollToTopOnLoad />
      <main className="relative overflow-x-hidden w-full">
        <HeroSection />
        <OurStorySection />
        <GallerySection />
        <EventDetailsSection />
        <RsvpSection />
      </main>
    </>
  )
}
