'use client'
import React from 'react';
import { motion } from 'framer-motion'

import { TrendingDown, TrendingUp, Target, Lightbulb, CheckCircle, AlertTriangle, RefreshCw, Layers, Users, Zap, DollarSign } from 'lucide-react';

const Case3 = () => {
  return (
    <div className="min-h-screen font-poppins mt-[100px] text-white">
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
              CASE STUDY 3
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How repositioning transformed an IV hydration training program from 1-2X ROAS to 5.3X ROAS
            </p>
          </div>
        </div>
      </div>

      {/* Backstory + Situation */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-blue-400">Backstory + Situation</h2>
          </div>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I started running ads for this client last year. She helps healthcare professionals in various verticals transition into IV Hydration Businesses.
            </p>
            <p>
              Same model as above: 1 live webinar every week.
            </p>
            <p>
              Her initial offer was teaching about how to do IV drips. But after running ads for this offer, the results weren't good enough. 1-2X ROAS.
            </p>
            <p>
              Goal was to increase the ROAS to about 5-6X.
            </p>
          </div>

          {/* Initial Performance */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-red-400 font-semibold">Initial ROAS</div>
                  <div className="text-2xl font-bold text-red-300">1-2X</div>
                  <div className="text-sm text-gray-400">Not good enough</div>
                </div>
                <TrendingDown className="w-8 h-8 text-red-400" />
              </div>
            </div>
            <div className="bg-yellow-600/10 border border-yellow-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-yellow-400 font-semibold">Target ROAS</div>
                  <div className="text-2xl font-bold text-yellow-300">5-6X</div>
                  <div className="text-sm text-gray-400">Goal to achieve</div>
                </div>
                <Target className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-700/50 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-red-400">Challenge</h2>
          </div>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              After doing a lot of research, I realized that the offer wasn't standing out. Which is why even with the proven ads, the CTR wasn't hitting the 2% mark.
            </p>
            <p>
              Rewriting ads to target different awareness levels of the market didn't work enough.
            </p>
            <p className="font-medium text-red-300">
              Positioning was the key issue here.
            </p>
          </div>

          {/* Challenge Indicators */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center">
                <TrendingDown className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-400 font-semibold">CTR below 2% mark</span>
              </div>
            </div>
            <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center">
                <Layers className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-400 font-semibold">Offer not standing out</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-yellow-900/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-700/50 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-yellow-400">Task</h2>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I had a few different ideas to position the offer.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-yellow-600/10 border border-yellow-500/30 rounded-lg p-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">
                  1
                </div>
                <span className="text-yellow-200">
                  For example, we could target a different set of audience and besides just Nurses, we could target a more niched audience.
                </span>
              </div>
            </div>
            <div className="bg-yellow-600/10 border border-yellow-500/30 rounded-lg p-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">
                  2
                </div>
                <span className="text-yellow-200">
                  Or we could position ourselves in the business category. Meaning, instead of teaching how to transition from a full time nursing role, we could teach how to open a business hydration business.
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">This lead to …</p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Changing the entire landing page, OTO offer",
              "Client also made a few changes in the course",
              "I worked on the ads, and made them more about how to start an IVH business instead of how to become an IVH nurse."
            ].map((task, index) => (
              <div key={index} className="bg-teal-600/10 border border-teal-500/30 rounded-lg p-4">
                <div className="flex items-start">
                  <RefreshCw className="w-5 h-5 text-teal-400 mr-2 mt-0.5" />
                  <span className="text-teal-200">{task}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-purple-400">Action</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I saw that almost no one was using this positioning of becoming an IVH business owner in ads.
            </p>

            <p className="text-gray-300 leading-relaxed">
              And that's what I changed in my ads.
            </p>

            {/* Strategy Breakdown */}
            <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-purple-300 font-semibold text-lg mb-4">Ad Strategy Implementation</h3>
              <div className="space-y-3 text-gray-300">
                <p>I wrote problem aware ads, solution ware ads. Plus I wrote Product aware ads for her warm audience on IG and Tiktok.</p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-purple-700/20 rounded-lg p-4">
                    <h4 className="text-purple-300 font-medium mb-2">Landing Page Focus</h4>
                    <p className="text-sm text-gray-300">
                      The landing page, that was rewritten, was targeting solution aware people – nurses who wanted to start an IVH business but don't know how to.
                    </p>
                  </div>
                  <div className="bg-purple-700/20 rounded-lg p-4">
                    <h4 className="text-purple-300 font-medium mb-2">Ad Focus</h4>
                    <p className="text-sm text-gray-300">
                      I made my ads about nurses, who realize they have a problem and want to switch their career.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-teal-600/20 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-purple-300 font-semibold text-lg mb-4">Perfect Awareness Escalation</h3>
              <p className="text-gray-300 mb-4">
                The combination of ads and the landing page was escalating the awareness of our reader perfectly.
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-purple-700/20 rounded-lg p-4">
                  <h4 className="text-purple-300 font-medium mb-2">Ads</h4>
                  <p className="text-sm text-gray-300">(about a new and exciting opportunity)</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
                <div className="flex-1 bg-teal-700/20 rounded-lg p-4">
                  <h4 className="text-teal-300 font-medium mb-2">Landing Page</h4>
                  <p className="text-sm text-gray-300">(Introducing a proven strategy to open IVH business in 60 days)</p>
                </div>
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

          <p className="text-2xl font-bold text-green-300 mb-6 text-center">
            It was an instant hit.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$1.85 - 3.99</div>
              <div className="text-green-300 font-medium">CPL Range</div>
              <div className="text-sm text-gray-400 mt-1">Excellent performance</div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">5.3X</div>
              <div className="text-green-300 font-medium">Webinar ROAS</div>
              <div className="text-sm text-gray-400 mt-1">Exceeded target</div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$30K</div>
              <div className="text-green-300 font-medium">Monthly Budget</div>
              <div className="text-sm text-gray-400 mt-1">Scaled investment</div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-2 text-green-300">
              <DollarSign className="w-5 h-5" />
              <span className="font-semibold">CPL: $1.85 - 3.99</span>
            </div>
            <div className="flex items-center space-x-2 text-green-300">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Webinar ROAS: 5.3X</span>
            </div>
            <div className="flex items-center space-x-2 text-green-300">
              <Target className="w-5 h-5" />
              <span className="font-semibold">Monthly budget $30K</span>
            </div>
          </div>

          {/* Success Highlight */}
          <div className="mt-6 bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-green-400 mr-3" />
              <span className="text-green-300 font-semibold">Transformation Success: From 1-2X ROAS to 5.3X ROAS through strategic repositioning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
};

export default Case3;