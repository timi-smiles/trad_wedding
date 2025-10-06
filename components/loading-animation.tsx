"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden"
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 adire-pattern opacity-5" />
          
          {/* Floating petals/decorations */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-20 w-12 h-12 bg-accent/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-20 right-20 w-16 h-16 bg-primary/20 rounded-full blur-xl"
          />

          <div className="relative flex flex-col items-center justify-center px-4 w-full max-w-2xl mx-auto">
            {/* Interlocking rings animation with glow */}
            <div className="relative mb-12 flex items-center justify-center w-full">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="relative w-32 h-32 md:w-40 md:h-40 mx-auto"
              >
                {/* First ring with glow */}
                <div className="absolute top-0 left-0 w-20 h-20 md:w-24 md:h-24">
                  <div className="absolute inset-0 border-4 border-accent rounded-full shadow-[0_0_20px_rgba(var(--accent),0.5)]" />
                  <div className="absolute inset-0 border-2 border-accent/40 rounded-full blur-sm" />
                </div>
                
                {/* Second ring with glow */}
                <div className="absolute bottom-0 right-0 w-20 h-20 md:w-24 md:h-24">
                  <div className="absolute inset-0 border-4 border-primary rounded-full shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
                  <div className="absolute inset-0 border-2 border-primary/40 rounded-full blur-sm" />
                </div>
              </motion.div>

              {/* Pulsing heart in center */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-accent drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
            </div>

            {/* Names with elegant animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center space-y-2 w-full"
            >
              <motion.h1
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <span className="block md:inline text-accent drop-shadow-sm">Ayomide</span>
                <span className="inline-block mx-3 my-2 md:my-0 text-2xl md:text-3xl">❤️</span>
                <span className="block md:inline text-primary drop-shadow-sm">Adekunle</span>
              </motion.h1>
              
              {/* <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-sm md:text-base text-muted-foreground font-light tracking-wider uppercase text-center"
              >
                Our Special Day
              </motion.p> */}
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-2 mt-8 justify-center items-center w-full"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
