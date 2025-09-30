"use client"

import { motion, useInView, useMotionValue } from "framer-motion"
import { useRef } from "react"

// Enhanced fade in animation hook
export function useFadeInAnimation(delay = 0) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return {
    ref,
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }
}

// Slide in animation hook
export function useSlideInAnimation(direction = "left", delay = 0) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    left: { x: -100 },
    right: { x: 100 },
    up: { y: 100 },
    down: { y: -100 },
  }

  return {
    ref,
    initial: { opacity: 0, ...variants[direction] },
    animate: isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...variants[direction] },
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }
}

// Scale animation hook
export function useScaleAnimation(delay = 0) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return {
    ref,
    initial: { opacity: 0, scale: 0.8 },
    animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }
}

// Stagger children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: "easeOut",
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

// Floating animation component
export function FloatingElement({ children, duration = 6, delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 2, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

// Magnetic hover effect
export function MagneticHover({ children, strength = 0.3 }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        e.currentTarget.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.05)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0px, 0px) scale(1)"
      }}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </motion.div>
  )
}

// Reveal animation for text
export function TextReveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

// Parallax scroll effect
export function ParallaxElement({ children, speed = 0.5 }) {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      style={{
        y: useMotionValue(0),
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

// Smooth entrance animation
export function SmoothEntrance({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const variants = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: -50 },
    right: { x: 50 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...variants[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...variants[direction] }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      }}
    >
      {children}
    </motion.div>
  )
}
