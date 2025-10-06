"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 md:hidden"
          aria-label="Scroll to top"
        >
          {/* Breathing glow effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 15px 4px rgba(var(--accent-rgb, 234, 179, 8), 0.3)",
                "0 0 25px 6px rgba(var(--accent-rgb, 234, 179, 8), 0.5)",
                "0 0 15px 4px rgba(var(--accent-rgb, 234, 179, 8), 0.3)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-12 h-12 rounded-full bg-gradient-to-br from-accent via-accent/90 to-accent/80 flex items-center justify-center shadow-xl"
          >
            {/* Animated arrow */}
            <motion.div
              animate={{
                y: [0, -2.5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronUp className="w-6 h-6 text-white" strokeWidth={3} />
            </motion.div>

            {/* Rotating ring */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute inset-0 rounded-full border-2 border-white/30 border-dashed"
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
