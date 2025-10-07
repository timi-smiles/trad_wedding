"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const photos = [
  {
    src: "/01.jpg",
    alt: "",
    tall: true,
  },
  {
    src: "/21.jpg",
    alt: "",
    tall: true,
  },
  {
    src: "/22.jpg",
    alt: "",
    tall: true,
  },
  {
    src: "/13.jpg",
    alt: "",
    tall: false,
  },
  {
    src: "/03.jpg",
    alt: "",
    tall: true,
  },
  {
    src: "/14.jpg",
    alt: "",
    tall: false,
  },
  {
    src: "/02.jpg",
    alt: "",
    tall: false,
  },
  {
    src: "/11.jpg",
    alt: "",
    tall: false,
  },
  {
    src: "/05.jpg",
    alt: "",
    tall: false,
  },
  {
    src: "/16.jpg",
    alt: "",
    tall: false,
  },
  {
    src: "/12.jpg",
    alt: "",
    tall: false,
  },
  {
    src: "/07.jpg",
    alt: "",
    tall: false,
  },
  {
    src: "/17.jpg",
    alt: "",
    tall: false,
  },
  {
    src: "/20.jpg",
    alt: "",
    tall: false,
  },
]

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 bg-background overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4 whitespace-nowrap"
          >
            Our Best Memories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground px-4 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Capturing the beautiful moments of our journey together
          </motion.p>
        </motion.div>

        {/* Masonry grid with scroll animations */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ 
                once: true, 
                margin: "-80px",
                amount: 0.3
              }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="break-inside-avoid mb-3 md:mb-4"
            >
              <motion.div
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg group cursor-pointer"
              >
                <motion.img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="w-full h-auto"
                  loading="lazy"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }}
                />
                {/* Hover overlay with smooth animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center p-4 md:p-6"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-white text-center"
                  >
                    <svg className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <p className="text-xs md:text-sm font-medium">View Photo</p>
                  </motion.div>
                </motion.div>
                
                {/* Subtle shimmer effect on load */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.08,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
