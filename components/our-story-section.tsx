"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const storyMoments = [
  {
    text: "Two hearts, wandering through life's journey, searching for something they couldn't quite name...",
    color: "from-accent/20 to-primary/20",
  },
  {
    text: "Then one day, in a crowded room full of strangers, their eyes met and the world stood still.",
    color: "from-primary/20 to-accent/30",
  },
  {
    text: "Conversations turned into laughter, laughter into memories, and memories into a love story written in the stars.",
    color: "from-accent/30 to-primary/30",
  },
  {
    text: "Through every sunrise and sunset, their bond grew stronger, their dreams intertwined, their souls forever connected.",
    color: "from-primary/30 to-accent/40",
  },
  {
    text: "Now, surrounded by love and tradition, they begin their forever journey as one.",
    color: "from-accent/40 to-primary/40",
  },
]

export function OurStorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const yOffsetArray = useRef(storyMoments.map((_, index) => [100 * index, -100 * index])).current

  const opacityArray = useRef(
    storyMoments.map((_, index) => [
      index * 0.15,
      index * 0.15 + 0.1,
      index * 0.15 + 0.3,
      index * 0.15 + 0.4,
      0,
      1,
      1,
      0,
    ]),
  ).current

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-[#faf8f5] via-[#f5f3ef] to-[#faf8f5] overflow-hidden w-full max-w-full">
      {/* Enhanced adire pattern overlay */}
      <div className="absolute inset-0 adire-pattern opacity-[0.03] pointer-events-none" />
      
      {/* Subtle floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto overflow-hidden relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </motion.div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3 md:mb-4">
            Our Love Story
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Every love story is beautiful, but ours is our favorite
          </p>
        </motion.div>

        <div ref={containerRef} className="space-y-16 md:space-y-24 lg:space-y-32 relative px-2 sm:px-4">
          {storyMoments.map((moment, index) => {
            // Smoother scroll animations with better timing
            const y = useTransform(
              scrollYProgress, 
              [
                Math.max(0, (index - 1) * 0.2),
                index * 0.2,
                (index + 1) * 0.2,
                Math.min(1, (index + 2) * 0.2)
              ],
              [50, 0, 0, -50]
            )
            const opacity = useTransform(
              scrollYProgress,
              [
                Math.max(0, (index - 0.5) * 0.2),
                index * 0.2,
                (index + 0.5) * 0.2,
                (index + 1.5) * 0.2,
              ],
              [0, 1, 1, 0.3]
            )

            return (
              <motion.div
                key={index}
                style={{ y, opacity }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`relative ${index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"} max-w-2xl w-full mx-auto md:mx-0`}
              >
                {/* Breathing love emoji indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2,
                    ease: "backOut"
                  }}
                  className={`absolute -top-5 sm:-top-6 ${index % 2 === 0 ? "left-3 sm:left-4 md:left-6" : "right-3 sm:right-4 md:right-6"} z-10`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      rotate: [0, -3, 3, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-2 sm:border-3 border-white relative overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                    <span className="text-xl sm:text-2xl md:text-3xl relative z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">🤍</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`relative p-5 sm:p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br ${moment.color} backdrop-blur-sm border-2 border-accent/20 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] transition-all duration-500`}
                >
                  {/* Decorative corner elements - responsive */}
                  <div className="absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-accent/40 rounded-tl-2xl md:rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-accent/40 rounded-br-2xl md:rounded-br-3xl" />

                  {/* Quote marks */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 text-accent/20 text-3xl sm:text-4xl md:text-6xl font-serif leading-none select-none">
                    "
                  </div>

                  <p className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed text-center text-balance relative z-10 px-2 sm:px-4 md:px-6 py-2 md:py-4">
                    {moment.text}
                  </p>

                  {/* Closing quote */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 text-accent/20 text-3xl sm:text-4xl md:text-6xl font-serif leading-none select-none">
                    "
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl md:rounded-3xl pointer-events-none" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Final flourish */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-16 md:mt-24 lg:mt-32"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 leading-tight">
              And so, our forever begins...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
