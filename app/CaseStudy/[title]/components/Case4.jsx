'use client'
import React from 'react';
import { motion } from 'framer-motion'

import { TrendingDown, TrendingUp, Target, Lightbulb, CheckCircle, AlertTriangle, Settings, Layers, Users, Zap, DollarSign, Award, Cog } from 'lucide-react';

const Case4 = () => {
  return (
    <div className="min-h-screen font-poppins mt-[100px]  text-white">
                  <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                          className="absolute inset-0 z-0 rounded-2xl"
                          style={{
                              background: `
                  radial-gradient( circle at 20% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 45%), 
                  radial-gradient(circle at 80% 80%,  rgba(236, 72, 153, 0.4) 0%, transparent 45%), 
                  radial-gradient(circle at center, rgba(0, 0, 0, 0.7) 0%, transparent 70%) 
                `,
                              // Ensure the background covers the entire div
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                          }}
                      ></motion.div>
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white text-transparent">
              CASE STUDY 4
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How systematic testing and multi-angle strategy scaled supplement ads from $0 to $2300+/day in 30 days
            </p>
          </div>
        </div>
      </div>

      {/* Backstory + Situation */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-blue-400">Backstory + Situation</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The CEO of this offer owner is a renowned media buyer who helped scale an entire company to over $900M.
            </p>
            <p>
              Now he was looking for a media buyer for his own supplement products. But there were some conditions.
            </p>
            <p>
              He didn't just want a media buyer specifically, he wanted the media buyer to have good copywriting skills + Creative strategy skills as well. He was looking for an all rounder.
            </p>
          </div>

          {/* Requirements Grid */}
          <div className="mt-6 bg-blue-600/10 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-blue-300 font-semibold text-lg mb-4">All-Rounder Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Strategically test various ad angles",
                "Suggest winning angles to the backend team who will create landing pages",
                "Systematically and properly test new ads, without wasting ad dollar, so knowing my way around Facebook Ads Manager was crucial",
                "Scale to $500 a day in the first 60 days."
              ].map((requirement, index) => (
                <div key={index} className="bg-blue-700/20 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                    <span className="text-blue-200 text-sm">{requirement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
            <p className="font-medium text-blue-300">
              I was the perfect candidate for him.
            </p>
            <p>
              Plus, he had 2 products ready to launch, and another product rolling out in about 2 weeks.
            </p>
          </div>

          {/* Client Credentials */}
          <div className="mt-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-4">
            <div className="flex items-center">
              <Award className="w-6 h-6 text-orange-400 mr-3" />
              <span className="text-orange-300 font-semibold">High-Profile Client: CEO who scaled company to $900M+ looking for elite all-rounder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-700/50 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
              <Settings className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-red-400">Challenge</h2>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            I had to come up with 2 systems:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  1
                </div>
                <h3 className="text-red-300 font-semibold">Testing System</h3>
              </div>
              <p className="text-gray-300 text-sm">
                System to come up with new ad concepts, and effectively test every possible ad angle in all placements (Images, Headlines, Hooks, Body Copy)
              </p>
            </div>
            
            <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  2
                </div>
                <h3 className="text-red-300 font-semibold">Evaluation System</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Test every piece carefully and mark it as a winner or a loser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Action */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
              <Cog className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-purple-400">Action</h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed">
              I started writing ads for products one by one.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              First product was a Sea Moss supplement. I wrote ads around these angles:
            </p>

            {/* Ad Angles Grid */}
            <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-purple-300 font-semibold text-lg mb-4">Sea Moss Supplement - Ad Angles Strategy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { number: 1, angle: "High blood sugar", note: "(ads for product aware, solution aware, problem aware)" },
                  { number: 2, angle: "High blood pressure", note: "(ads for product aware, solution aware, problem aware)" },
                  { number: 3, angle: "All day energy", note: "(ads for product aware, solution aware, problem aware)" },
                  { number: 4, angle: "Avoid Mid day slump", note: "(ads for product aware, solution aware, problem aware)" },
                  { number: 5, angle: "Ads on Discounts", note: "(product aware market only)" },
                  { number: 6, angle: "Ads on credibility, testimonials, highlighting proof", note: "(standalone ads, plus inserting these proofs in other ads as well)" },
                  { number: 7, angle: "Get rid of body pain", note: "" },
                  { number: 8, angle: "Ads on our USP", note: "(which was that this product had the highest bioavailability which gives it 233% enhanced nutrient absorption capacity)" }
                ].map((item) => (
                  <div key={item.number} className="bg-purple-700/20 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">
                        {item.number}
                      </div>
                      <div className="flex-1">
                        <div className="text-purple-200 font-medium">{item.angle}</div>
                        {item.note && <div className="text-xs text-gray-400 mt-1">{item.note}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testing Strategy */}
            <div className="bg-orange-600/10 border border-orange-500/30 rounded-lg p-6">
              <h3 className="text-orange-300 font-semibold text-lg mb-4">Systematic Testing Approach</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I gave each ad about $15-20/day in each adset, and tested all these ads in ad sets with 1 audience each. A few audiences I used were:
                </p>
                
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    "Past Buyers 1% LAL",
                    "Past Buyers 2% LAL",
                    "Past Buyers 3% LAL",
                    "Past Buyers 4% LAL",
                    "Past Buyers 5% LAL",
                    "Past Buyers 2-4% LAL",
                    "Past Buyers 4-6% LAL",
                    "Health & Wellness",
                    "Dr Saby"
                  ].map((audience, index) => (
                    <div key={index} className="bg-orange-700/20 rounded-lg p-3">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-orange-400 mr-2" />
                        <span className="text-orange-200 text-sm">{audience}</span>
                      </div>
                    </div>
                  ))}
                  <div className="bg-orange-700/20 rounded-lg p-3">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-orange-400 mr-2" />
                      <span className="text-orange-200 text-sm">And a few more audiences.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-orange-600/20 border border-purple-500/30 rounded-lg p-4">
              <div className="flex items-center">
                <Layers className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-purple-300 font-semibold">I followed the same procedure for all products.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-green-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-700/50 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-green-400">Result</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$70-85</div>
              <div className="text-green-300 font-medium">CPS (USD)</div>
              <div className="text-sm text-gray-400 mt-1">Cost Per Sale</div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$2300+</div>
              <div className="text-green-300 font-medium">Daily Spend</div>
              <div className="text-sm text-gray-400 mt-1">Reached in 30 days</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-green-300">
              <DollarSign className="w-5 h-5" />
              <span className="font-semibold">CPS: $70-85 USD</span>
            </div>
            <div className="flex items-center space-x-2 text-green-300">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Scaled to $2300+/day in 30 days</span>
            </div>
          </div>

          {/* Achievement Highlight */}
          <div className="mt-6 bg-gradient-to-r from-green-600/20 to-green-600/0 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-green-400 mr-3" />
              <span className="text-green-300 font-semibold">Exceptional Performance: Exceeded $500/day target by 460% - reached $2300+/day in just 30 days</span>
            </div>
          </div>

          {/* Success Metrics Comparison */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-yellow-400 font-semibold">Target (60 days)</div>
                  <div className="text-2xl font-bold text-yellow-300">$500/day</div>
                </div>
                <Target className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-green-400 font-semibold">Achieved (30 days)</div>
                  <div className="text-2xl font-bold text-green-300">$2300+/day</div>
                </div>
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Case4;