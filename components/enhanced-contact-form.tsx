"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Clock, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    adSpend: "",
    message: "",
  })


  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Vancouver, BC, Canada",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 778 712 3301",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: "team@getexposure.ca",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM PST",
      color: "from-orange-500 to-amber-500",
    },
  ]

  const whyChooseUs = [
    {
      icon: Users,
      title: "50+ Clients Served",
      description: "Trusted by growing businesses worldwide",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "$2M+ in revenue generated for clients",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Always available when you need us",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ad Performance?
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Book a free 15-minute consultation to discuss your specific needs and discover how we can help you achieve
            your advertising goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Get Started Today</CardTitle>
                <p className="text-white/70">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>

                {/* <script src="https://link.msgsndr.com/js/form_embed.js"></script> */}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <Card className="glass-card border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center mr-3`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{info.title}</div>
                          <div className="text-white/70 text-sm">{info.details}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="glass-card border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Why Choose GetExposure?</h3>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3 mt-1">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm mb-1">{item.title}</div>
                          <div className="text-white/70 text-xs">{item.description}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border-purple-500/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">What to Expect on Your Call</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-3 mt-2" />
                    Analysis of your current advertising performance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-3 mt-2" />
                    Identification of growth opportunities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-3 mt-2" />
                    Custom strategy recommendations
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-3 mt-2" />
                    Clear next steps for implementation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
