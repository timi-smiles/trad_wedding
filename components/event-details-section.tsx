"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EventDetailsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="event-details" ref={sectionRef} className="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden w-full max-w-full">
      {/* Ankara pattern background image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 rounded-b-[3rem] md:rounded-b-[4rem] lg:rounded-b-[5rem] overflow-hidden">
          <img 
            src="/ankara.jpg" 
            alt="Ankara pattern background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
          {/* Additional adire pattern overlay */}
          <div className="absolute inset-0 adire-pattern opacity-20" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2
            id="event-details-heading"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-2xl"
          >
            Event Details
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base md:text-lg text-white/90 drop-shadow-lg font-light tracking-wide"
          >
            Save the date, we are inviting you to our 
          </motion.p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Card className="h-full border-2 border-white/20 shadow-2xl bg-white/95 backdrop-blur-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="text-center pb-3 md:pb-5 px-5 md:px-8 pt-6 md:pt-9">
                {/* Main invitation text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <CardTitle className="font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-foreground leading-tight px-2 whitespace-nowrap">
                    Traditional Wedding
                  </CardTitle>
                </motion.div>
              </CardHeader>
              
              <CardContent className="space-y-4 md:space-y-6 pt-2 pb-6 px-5 md:px-8">
                {/* Date */}
                <motion.div 
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-center gap-4 md:gap-5 p-3 md:p-4 rounded-xl bg-gradient-to-r from-accent/5 to-transparent hover:from-accent/10 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="6" width="18" height="15" rx="2" fill="white"/>
                      <rect x="3" y="4" width="18" height="4" rx="2" fill="white" opacity="0.9"/>
                      <line x1="7" y1="2" x2="7" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="17" y1="2" x2="17" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <text x="12" y="16" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">25</text>
                    </svg>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex-1"
                  >
                    <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Date</p>
                    <p className="font-bold text-foreground text-xl md:text-2xl lg:text-3xl">25 October 2025</p>
                  </motion.div>
                </motion.div>

                {/* Time */}
                <motion.div 
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-center gap-4 md:gap-5 p-3 md:p-4 rounded-xl bg-gradient-to-r from-accent/5 to-transparent hover:from-accent/10 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" fill="white"/>
                      <circle cx="12" cy="12" r="1.5" fill="#2563eb"/>
                      <line x1="12" y1="12" x2="12" y2="7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="12" y1="12" x2="15.5" y2="12" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="12" cy="6" r="0.5" fill="#2563eb"/>
                      <circle cx="12" cy="18" r="0.5" fill="#2563eb"/>
                      <circle cx="18" cy="12" r="0.5" fill="#2563eb"/>
                      <circle cx="6" cy="12" r="0.5" fill="#2563eb"/>
                    </svg>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex-1"
                  >
                    <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Time</p>
                    <p className="font-bold text-foreground text-xl md:text-2xl lg:text-3xl">12:00 PM</p>
                  </motion.div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-start gap-4 md:gap-5 p-3 md:p-4 rounded-xl bg-gradient-to-r from-accent/5 to-transparent hover:from-accent/10 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg mt-1"
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white"/>
                      <circle cx="12" cy="9" r="3" fill="#16a34a"/>
                    </svg>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex-1"
                  >
                    <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Location</p>
                    <p className="font-semibold text-foreground text-base md:text-lg lg:text-xl leading-relaxed">
                      Imoje Event Centre
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground mt-1 leading-relaxed">
                      Along AIT Road, Kola Bus Stop, Alagbado, Lagos
                    </p>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
