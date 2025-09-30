"use client"

import { useEffect, useRef } from "react"

/**
 * 🌐 Purpose: 3D Wave Particle Network Effect (Vanta.js Net style)
 * - Creates animated 3D grid with connected particles
 * - Wave-like motion with mouse interaction
 * - Purple/dark color scheme
 */
export default function VantaNetBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const loadThreeJS = async () => {
      const THREE = await import("three")

      if (!mountRef.current) return

      // Scene setup
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0.1) // Very dark background
      mountRef.current.appendChild(renderer.domElement)

      // Create particle grid
      const gridSize = 25
      const spacing = 4
      const particles: any[] = []
      const connections: any[] = []

      // Particle geometry and material
      const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8)
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6, // Purple
        transparent: true,
        opacity: 0.8,
      })

      // Create grid of particles
      for (let x = 0; x < gridSize; x++) {
        particles[x] = []
        for (let z = 0; z < gridSize; z++) {
          const particle = new THREE.Mesh(particleGeometry, particleMaterial.clone())

          particle.position.set((x - gridSize / 2) * spacing, 0, (z - gridSize / 2) * spacing)

          particle.userData = {
            originalY: 0,
            gridX: x,
            gridZ: z,
          }

          scene.add(particle)
          particles[x][z] = particle
        }
      }

      // Create connections between nearby particles
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x6366f1, // Indigo
        transparent: true,
        opacity: 0.3,
      })

      for (let x = 0; x < gridSize - 1; x++) {
        for (let z = 0; z < gridSize - 1; z++) {
          // Horizontal connections
          const hGeometry = new THREE.BufferGeometry().setFromPoints([
            particles[x][z].position,
            particles[x + 1][z].position,
          ])
          const hLine = new THREE.Line(hGeometry, lineMaterial.clone())
          scene.add(hLine)
          connections.push({ line: hLine, p1: particles[x][z], p2: particles[x + 1][z] })

          // Vertical connections
          const vGeometry = new THREE.BufferGeometry().setFromPoints([
            particles[x][z].position,
            particles[x][z + 1].position,
          ])
          const vLine = new THREE.Line(vGeometry, lineMaterial.clone())
          scene.add(vLine)
          connections.push({ line: vLine, p1: particles[x][z], p2: particles[x][z + 1] })
        }
      }

      // Camera position
      camera.position.set(0, 15, 20)
      camera.lookAt(0, 0, 0)

      // Mouse interaction
      const mouse = new THREE.Vector2()
      const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      }
      window.addEventListener("mousemove", handleMouseMove)

      // Animation loop
      let time = 0
      const animate = () => {
        animationRef.current = requestAnimationFrame(animate)
        time += 0.01

        // Wave animation
        for (let x = 0; x < gridSize; x++) {
          for (let z = 0; z < gridSize; z++) {
            const particle = particles[x][z]

            // Create wave effect
            const waveX = Math.sin(time + x * 0.3) * 0.5
            const waveZ = Math.sin(time + z * 0.3) * 0.5
            const waveInteraction = Math.sin(time + (x + z) * 0.2) * 0.3

            // Mouse influence
            const mouseInfluence = Math.sin(time + mouse.x * 5 + mouse.y * 5) * 0.2

            particle.position.y = particle.userData.originalY + waveX + waveZ + waveInteraction + mouseInfluence

            // Color pulsing
            const intensity = 0.5 + Math.sin(time + x * 0.1 + z * 0.1) * 0.3
            particle.material.opacity = intensity
          }
        }

        // Update connections
        connections.forEach((connection) => {
          const { line, p1, p2 } = connection
          line.geometry.setFromPoints([p1.position, p2.position])

          // Distance-based opacity
          const distance = p1.position.distanceTo(p2.position)
          line.material.opacity = Math.max(0.1, 0.5 - distance * 0.05)
        })

        // Gentle camera rotation
        camera.position.x = Math.sin(time * 0.1) * 25
        camera.position.z = Math.cos(time * 0.1) * 25
        camera.lookAt(0, 0, 0)

        renderer.render(scene, camera)
      }

      animate()

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("resize", handleResize)
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement)
        }
      }
    }

    loadThreeJS()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-20" style={{ pointerEvents: "none" }} />
}
