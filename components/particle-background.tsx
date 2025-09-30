"use client"

import { useEffect, useRef } from "react"

/**
 * 💫 Purpose: Creates glowing ambient particles behind the hero section.
 * - Canvas-based animated dots with soft glow
 * - Colors randomized with wrapping motion
 * - Purely decorative, enhances visual appeal
 */
export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // 🟣 Initialize 100 colorful particles
    const particles = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: `hsla(${Math.random() * 360}, 100%, 70%, 0.7)`,
    }))

    // 🔁 Animate particle movement
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowBlur = 10
        ctx.shadowColor = p.color
        ctx.fill()

        p.x += p.dx
        p.y += p.dy

        // 🔄 Wrap particles around screen edges
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
      }

      requestAnimationFrame(animate)
    }

    animate()

    // 📏 Resize canvas on screen resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}
