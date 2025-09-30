"use client"

import { motion } from "framer-motion"
import { Lightbulb, BarChart3, Package, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useFadeInAnimation, staggerContainer, staggerItem } from "./enhanced-animations"

const services = [
  {
    id: "craft-plan",
    icon: Lightbulb,
    title: "Craft Plan",
    subtitle: "Strategic Campaign Development",
    description:
      "We develop comprehensive advertising strategies tailored to your business goals, target audience, and market positioning.",
    features: [
      "Market Research & Analysis",
      "Competitor Intelligence",
      "Audience Segmentation",
      "Creative Strategy Development",
      "Campaign Architecture Design",
      "Performance Forecasting",
    ],
    color: "from-blue-500 to-cyan-500",
    process: ["Discovery & Goal Setting", "Market & Competitor Analysis", "Strategy Development", "Campaign Planning"],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    subtitle: "Data-Driven Optimization",
    description:
      "Advanced analytics and real-time monitoring to optimize your campaigns for maximum ROI and sustainable growth.",
    features: [
      "Real-Time Performance Tracking",
      "Advanced Attribution Modeling",
      "Conversion Rate Optimization",
      "A/B Testing Framework",
      "Custom Dashboard Creation",
      "Predictive Analytics",
    ],
    color: "from-green-500 to-emerald-500",
    process: ["Data Collection Setup", "Performance Analysis", "Optimization Implementation", "Continuous Monitoring"],
  },
  {
    id: "packages",
    icon: Package,
    title: "Packages",
    subtitle: "Scalable Solution Tiers",
    description:
      "Flexible packages designed to meet your business needs, from startup foundations to enterprise-level scaling.",
    features: [
      "Foundation Package ($1K-$3K)",
      "Growth Package ($3K-$15K)",
      "Performance Package ($15K-$25K)",
      "Enterprise Package ($25K+)",
      "Custom Solutions Available",
      "Dedicated Account Management",
    ],
    color: "from-purple-500 to-pink-500",
    process: ["Needs Assessment", "Package Selection", "Implementation", "Ongoing Support"],
  },
]

export default function ServicesSection() {
  const titleAnimation = useFadeInAnimation(0)
  const subtitleAnimation = useFadeInAnimation(0.2)

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 {...titleAnimation} className="heading-secondary text-4xl md:text-5xl text-white mb-6">
            Our <span className="text-gradient-primary">Services</span>
          </motion.h2>
          <motion.p {...subtitleAnimation} className="text-xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
            Comprehensive advertising solutions designed to transform your campaigns and accelerate your business growth
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Card className="glass-card h-full group relative overflow-hidden hover:scale-105 transition-all duration-300">
                  {/* Hover gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <CardContent className="p-8 relative flex flex-col justify-between h-full z-10">

                    <div>
                      <motion.div
                        className={`feature-icon flex items-center justify-center rounded-lg w-16 h-16 mb-6 bg-gradient-to-r ${service.color}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="heading-secondary text-2xl text-white mb-2">{service.title}</h3>
                      <p className="text-purple-300 font-medium mb-4">{service.subtitle}</p>
                      <p className="text-[#9CA3AF] leading-relaxed mb-6">{service.description}</p>

                      {/* Features list */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-sm text-white/80">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process steps */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">Process:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.process.map((step, stepIndex) => (
                            <span key={stepIndex} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full">
                              {stepIndex + 1}. {step}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>

                      <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>

                    {/* Animated border */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
