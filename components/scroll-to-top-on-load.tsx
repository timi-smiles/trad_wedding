"use client"

import { useEffect } from "react"

export function ScrollToTopOnLoad() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior
    })

    // Also handle browser back/forward navigation
    window.history.scrollRestoration = "manual"
  }, [])

  return null
}
