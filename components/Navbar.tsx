"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, Sparkles, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState("")

  const backgroundColor = useTransform(scrollYProgress, [0, 0.1], ["rgba(10, 10, 10, 0.1)", "rgba(10, 10, 10, 0.95)"])

  const borderOpacity = useTransform(scrollYProgress, [0, 0.1], [0.1, 0.3])

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50)

  //     // Update active section
  //     const sections = ["services", "case-studies", "pricing", "contact"]
  //     const currentSection = sections.find((section) => {
  //     const element = document.getElementById(section)
  //       if (element) {
  //         const rect = element.getBoundingClientRect()
  //         return rect.top <= 100 && rect.bottom >= 100
  //       }
  //       return false
  //     })

  //     if (currentSection) {
  //       setActiveSection(currentSection)
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  const navItems = [
    // { name: "Case Studies", href: "#case-studies" },
    // { name: "Services", href: "#services" },
    // { name: "Pricing", href: "#pricing" },
    // { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // style={{ backgroundColor }}
      className="absolute top-0 left-0 right-0  transition-all py-2 duration-300  bg-transparent z-[100]"
    >
      <motion.div
        // style={{ borderColor: `rgba(255, 255, 255, ${borderOpacity})` }}
        className="duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <img src="/logo.png" alt="" />


              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`text-white/80 hover:text-white transition-colors duration-200 font-medium relative group ${activeSection === item.href.slice(1) ? "text-white" : ""
                      }`}
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: activeSection === item.href.slice(1) ? "100%" : 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.div>
              ))}

              <div className="flex items-center gap">
{/* 
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* <Link href="/login">
                    <Button className=" !rounded-lg">Log In</Button>
                  </Link> 
                </motion.div> */}


                  <div className="">

                    <button className="flex group  transition-all duration-300 ease-in-out border-gray-200    justify-between gap-4  px-6 py-3 text-sm border ">
                      <span className="">Get Started</span>
                      <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">

                        <MoveRight size={18} />
                      </span>
                    </button>
                  </div>
              </div>
            </div>


            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white relative"
                >
                  <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{
              height: isMobileMenuOpen ? "auto" : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass-morphism border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => {
                      scrollToSection(item.href)
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-2">


                <div className="">

                  <Button className="btn-primary flex group hover:scale-105 item-center justify-between gap-4  !px-8 !py-7 text-lg rounded-full !font-extralight">
                    Get Started
                    <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">

                      <MoveRight size={18} />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
