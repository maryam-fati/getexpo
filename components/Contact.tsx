"use client"

import type React from "react"

import { useState, useEffect } from "react"
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


  useEffect(() => {
    // Dynamically load the external GHL form script on mount
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

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
    <section id="contact" className="py-20 !overflow-hidden px-0 lg:px-8 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-poppins  text-white mb-6">
            Ready to Transform Your{" "} <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ad Performance?
            </span>
          </h2>
          <p className="text-xl font-poppins text-gray-100 max-w-3xl mx-auto">
            Book a free 15-minute consultation to discuss your specific needs and discover how we can help you achieve
            your advertising goals.
          </p>
        </motion.div>

        <div className="!overflow-hidden">
          {/* Contact Form */}
          <div className="   !text-white  !overflow-hidden">

            <iframe
              src="https://api.leadconnectorhq.com/widget/form/MmLpa6o7BIV28EOlv2CZ"
              scrolling="no" // 👈 Prevents scrollbar in older browsers
              style={{
                width: "100%",
                height: "800px",
                border: "none",
                borderRadius: "0px",
                overflow: "hidden", // 👈 Hide scrollable content
              }}
              id="inline-MmLpa6o7BIV28EOlv2CZ"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Discover new Marketing Strategies"
              data-height="891"
              data-layout-iframe-id="inline-MmLpa6o7BIV28EOlv2CZ"
              data-form-id="MmLpa6o7BIV28EOlv2CZ"
              title="Discover new Marketing Strategies"
            />

          </div>

          {/* Contact Information & Why Choose Us */}

        </div>
      </div>
    </section>
  )
}
