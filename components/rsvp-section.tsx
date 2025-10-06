"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"

export function RsvpSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [attendance, setAttendance] = useState<"accept" | "decline" | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { toast } = useToast()

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!attendance) {
      toast({
        title: "Please select an option",
        description: "Let us know if you'll be attending.",
      })
      return
    }
    
    setIsSubmitting(true)

    // Get form data
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string
    const attendanceStatus = attendance === "accept" ? "Joyfully Accept " : "Decline "

    // Create WhatsApp message
    const whatsappMessage = `
🎊 *WEDDING RSVP* 🎊

 *Name:* ${name}
 *Email:* ${email}
 *Attendance:* ${attendanceStatus}

*Message:*
${message}
    `.trim()

    // WhatsApp number (without + and spaces)
    const phoneNumber = "2348081481556"
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // Small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")

    toast({
      title: "RSVP Received! 🎉",
      description: "Redirecting you to WhatsApp to send your response. We can't wait to celebrate with you!",
    })

    setIsSubmitting(false)
    setAttendance(null)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="rsvp" ref={sectionRef} className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden w-full max-w-full">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            Join Our Celebration
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Your presence would make our special day complete. Please let us know if you'll be celebrating with us!
          </p>
        </motion.div>

        {/* Beautiful breathing container */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative bg-card rounded-2xl md:rounded-3xl border border-border/50 p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-sm shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl md:rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-accent/30 rounded-br-2xl md:rounded-br-3xl" />
          
          {/* Static subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-2xl md:rounded-3xl pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7 relative z-10">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                className="bg-background border-border focus:ring-2 focus:ring-accent/50 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="bg-background border-border focus:ring-2 focus:ring-accent/50 transition-all duration-300"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-foreground text-base font-medium">Will you be attending? *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <motion.button
                  type="button"
                  onClick={() => setAttendance("accept")}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-5 md:p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer text-left ${
                    attendance === "accept"
                      ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-500 shadow-lg shadow-green-500/20"
                      : "bg-background/50 border-border/50 hover:border-accent/30 hover:bg-accent/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={attendance === "accept" ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.3 }}
                      className={`text-2xl md:text-3xl ${
                        attendance === "accept" ? "opacity-100" : "opacity-60"
                      }`}
                    >
                    </motion.div>
                    <div className="flex-1">
                      <p className={`font-semibold text-base md:text-lg ${
                        attendance === "accept" ? "text-green-700" : "text-foreground"
                      }`}>
                        Joyfully Accept
                      </p>
                      {attendance === "accept" && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-sm text-green-600 mt-1"
                        >
                          Can't wait to celebrate!
                        </motion.p>
                      )}
                    </div>
                    {attendance === "accept" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-green-600 text-xl"
                      >
                        ✓
                      </motion.div>
                    )}
                  </div>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => setAttendance("decline")}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-5 md:p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer text-left ${
                    attendance === "decline"
                      ? "bg-gradient-to-br from-gray-50 to-slate-50 border-gray-400 shadow-lg shadow-gray-400/20"
                      : "bg-background/50 border-border/50 hover:border-muted-foreground/20 hover:bg-muted/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={attendance === "decline" ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.3 }}
                      className={`text-2xl md:text-3xl ${
                        attendance === "decline" ? "opacity-100" : "opacity-60"
                      }`}
                    >
                    </motion.div>
                    <div className="flex-1">
                      <p className={`font-semibold text-base md:text-lg ${
                        attendance === "decline" ? "text-gray-700" : "text-foreground"
                      }`}>
                      Decline
                      </p>
                      {attendance === "decline" && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-sm text-gray-600 mt-1"
                        >
                          Will be there in spirit
                        </motion.p>
                      )}
                    </div>
                    {attendance === "decline" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-gray-600 text-xl"
                      >
                        ✓
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground text-base font-medium">
                Share how you know the couple and wish them well *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell us your story with the couple and share your heartfelt wishes..."
                className="bg-background border-border min-h-[140px] focus:ring-2 focus:ring-accent/50 transition-all duration-300 resize-none"
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-600 text-white py-6 md:py-7 text-lg md:text-xl font-bold shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 rounded-xl overflow-hidden group"
              >
                {/* Animated shine effect */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
                
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3 relative z-10">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block text-2xl"
                    >
                    </motion.span>
                    <span className="tracking-wide">Sending Your Response...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3 relative z-10 group-hover:gap-4 transition-all duration-300">
                    <span className="tracking-wide">Send RSVP</span>
                    <motion.span
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ 
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      className="text-2xl"
                    >
                    </motion.span>
                  </span>
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
