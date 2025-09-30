"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pricingTiers = [
  {
    category: "Foundation Solutions",
    description: "For businesses beginning their Facebook advertising journey",
    packages: [
      {
        name: "Foundation Package",
        adSpend: "$1K-$3K ad spend",
        investment: "$750 + 15% of ad spend",
        focus: "Establishing foundational systems and initial customer acquisition",
        features: [
          "Account Setup & Structure",
          "Basic Campaign Management",
          "Standard Audience Creation",
          "Basic Creative Development (1-2 new concepts monthly)",
          "Facebook & Instagram Platforms",
          "Basic Performance Tracking",
          "Monthly Strategy Call",
          "Monthly Performance Reports",
        ],
        color: "from-green-500 to-emerald-600",
      },
      {
        name: "Growth Package",
        adSpend: "$3K-$5K ad spend",
        investment: "$1,000 + 13% of ad spend",
        focus: "Expanding successful campaigns and improving conversion efficiency",
        features: [
          "Everything in Foundation Package, PLUS:",
          "Enhanced Campaign Management",
          "Expanded Audience Development",
          "Increased Creative Development (2-3 new concepts monthly)",
          "Remarketing Strategy Implementation",
          "Bi-monthly Strategy Calls",
          "A/B Testing Framework",
          "Conversion Tracking & Analytics",
        ],
        color: "from-blue-500 to-cyan-600",
      },
    ],
  },
  {
    category: "Optimization Solutions",
    description: "For businesses already investing in Facebook ads but seeking improved performance",
    packages: [
      {
        name: "Performance Package",
        adSpend: "$5K-$15K ad spend",
        investment: "$1,500 + 12% of ad spend",
        focus: "Eliminating wasted spend and improving campaign performance",
        features: [
          "Campaign Architecture Review",
          "Performance Optimization",
          "Dedicated Account Manager",
          "Audience Refinement Strategy",
          "Creative Refresh Implementation (2-3 new concepts monthly)",
          "Facebook & Instagram Platforms",
          "A/B Testing System",
          "Bi-weekly Performance Calls",
          "Monthly Performance Reports",
        ],
        color: "from-purple-500 to-violet-600",
        popular: true,
      },
      {
        name: "Efficiency Package",
        adSpend: "$15K-$25K ad spend",
        investment: "$2,500 + 10% of ad spend",
        focus: "Comprehensive optimization and preparing for scaling",
        features: [
          "Everything in Performance Package, PLUS:",
          "Advanced Campaign Architecture",
          "In-depth Performance Analysis",
          "Dedicated Account Strategist",
          "Advanced Audience Development",
          "Enhanced Creative Development (3-4 new concepts monthly)",
          "Cross-Platform Integration (add TikTok)",
          "Custom Conversion Tracking",
          "Weekly Strategy Calls",
          "Detailed Weekly Reports",
        ],
        color: "from-orange-500 to-amber-600",
      },
    ],
  },
  {
    category: "Premium Scaling Solutions",
    description: "For businesses investing $25,000+ monthly in ad spend",
    packages: [
      {
        name: "Velocity Package",
        adSpend: "$25k-$50k",
        investment: "$3,000 + 10% of ad spend",
        focus: "Systematic scaling while maintaining performance",
        features: [
          "Campaign Management & Optimization",
          "Dedicated Account Manager",
          "Bi-weekly Strategy Calls",
          "Standard Audience Development",
          "Creative Development (2-3 new concepts monthly)",
          "Facebook & Instagram Platforms",
          "Phase-based Scaling Methodology™",
          "Monthly Performance Reports",
        ],
        color: "from-red-500 to-rose-600",
      },
      {
        name: "Accelerator Package",
        adSpend: "$50k-$100k",
        investment: "$4,000 + 9% of ad spend",
        focus: "Advanced optimization across platforms + scaling",
        features: [
          "Everything in Velocity Package, PLUS:",
          "Dedicated Senior Strategist",
          "Weekly Strategy Calls",
          "Advanced Audience Development",
          "Expanded Creative Development (4-6 new concepts monthly)",
          "Cross-Platform Integration (add TikTok)",
          "Weekly Performance Reports",
          "Priority Support (24-hour response time)",
        ],
        color: "from-pink-500 to-rose-600",
      },
      {
        name: "Enterprise Package",
        adSpend: "$100k+",
        investment: "$5,000 + 8% of ad spend",
        focus: "Multi-channel integration + maximum market penetration",
        features: [
          "Everything in Accelerator Package, PLUS:",
          "Direct Access to Agency Principal",
          "Twice-Weekly Strategy Calls",
          "Custom Audience Development",
          "Premium Creative Development (6+ new concepts monthly)",
          "Full Cross-Channel Strategy (add YouTube/Google)",
          "Real-Time Performance Dashboard",
          "VIP Support (same-day response time)",
          "Quarterly Strategy Workshops",
        ],
        color: "from-purple-500 to-pink-600",
      },
    ],
  },
]

export default function PricingSection() {
  const handleScroll = () => {
    const element = document.getElementById("pricing");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unlock Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Potential
            </span>
          </h2>
          <div className="w-full flex justify-center my-20">

            <div onClick={handleScroll} className="mx-auto">

              <Button className="btn-primary flex group hover:scale-105 item-center justify-between gap-4  !px-6 !py-6 text-lg rounded-full !font-extralight">
                Get Started Today!
                <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">

                  <MoveRight size={18} />
                </span>
              </Button>
            </div>
          </div>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Choose the perfect package for your business stage and advertising goals
          </p>
        </motion.div>

        {pricingTiers.map((tier, tierIndex) => (
          <motion.div
            key={tierIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: tierIndex * 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">{tier.category}</h3>
              <p className="text-white/70 max-w-2xl mx-auto">{tier.description}</p>
            </div>

            <div className={`grid ${tier.packages.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-8`}>
              {tier.packages.map((pkg, pkgIndex) => (
                <Card
                  key={pkgIndex}
                  className={`bg-white/5 backdrop-blur-sm flex justify-between flex-col pb-5 border-white/10 hover:border-white/20 transition-all duration-300 relative ${pkg.popular ? "ring-2 ring-purple-500" : ""
                    }`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <div>

                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl font-bold text-white mb-2">{pkg.name}</CardTitle>
                      <div className="text-purple-300 font-medium mb-2">{pkg.adSpend}</div>
                      <div className="text-3xl font-bold text-white mb-2">{pkg.investment}</div>
                      <p className="text-sm text-white/70">{pkg.focus}</p>
                    </CardHeader>
                    <CardContent className=" pt-0">

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>


                  <Button className={`w-[90%] mx-auto bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white`} size="lg">
                    Get Started Today
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
