"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToRsvp = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToEventDetails = () => {
    const heading = document.getElementById("event-details-heading")
    if (heading) {
      heading.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#event-details, section:nth-of-type(2)")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden w-full max-w-full pb-8 md:pb-12">
      {/* Background image with overlay - Different positioning for mobile and desktop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 rounded-b-[3rem] md:rounded-b-[4rem] lg:rounded-b-[5rem] overflow-hidden">
          <img 
            src="/14.jpg" 
            alt="Ayomide and Adekunle" 
            className="w-full h-full object-cover scale-105 object-[center_60%] md:object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 adire-pattern opacity-30" />
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="font-serif font-bold text-white leading-tight drop-shadow-2xl mb-6 sm:mb-8 md:mb-12"
        >
          {/* Creative layout for all screen sizes */}
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="block text-4xl sm:text-5xl lg:text-7xl xl:text-8xl ml-8 sm:ml-12 md:ml-auto md:mr-20 lg:mr-32"
            >
              Ayomide
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 3.5 }}
              className="text-accent block text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-center"
            >
              ❤️
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.8 }}
              className="block text-4xl sm:text-5xl lg:text-7xl xl:text-8xl ml-auto mr-8 sm:mr-12 md:ml-20 lg:ml-32"
            >
              Adekunle
            </motion.span>
          </div>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4.1 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 md:mb-12 lg:mb-16 font-light tracking-wide drop-shadow-lg max-w-2xl ml-auto mr-8 sm:mr-12 md:mx-0 md:ml-20 lg:ml-32"
        >
          Join us as we tie the knot traditionally!
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 4.4 }}
          className="flex gap-3 sm:gap-4 ml-auto mr-8 sm:mr-12 md:ml-20 lg:ml-32"
        >
          <Button
            onClick={scrollToRsvp}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 text-base sm:text-lg md:text-xl rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 font-semibold"
          >
            RSVP
          </Button>
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 4.6,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <Button
              onClick={scrollToEventDetails}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 text-base sm:text-lg md:text-xl rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-2"
            >
              <motion.svg 
                className="w-5 h-5 sm:w-6 sm:h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </motion.svg>
              <span>Address</span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Animated down arrow */}
      <motion.button
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
        }}
        transition={{ duration: 0.8, delay: 4 }}
        whileHover={{ 
          scale: 1.2,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-16 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 cursor-pointer group"
        aria-label="Scroll to next section"
      >
        {/* Pulsing circle background */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-white rounded-full blur-md -z-10"
        />
        
        {/* Outer ring */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative p-2 sm:p-3 rounded-full border-2 border-white/40 backdrop-blur-sm bg-white/10 group-hover:bg-white/20 group-hover:border-white/60 transition-all duration-300"
        >
          {/* Animated chevron */}
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-lg" strokeWidth={2.5} />
          </motion.div>
        </motion.div>

        {/* Text hint on hover */}
        <motion.span
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm font-light whitespace-nowrap bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm"
        >
          Scroll Down
        </motion.span>
      </motion.button>
    </section>
  )
}
