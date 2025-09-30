'use client'
import { motion } from 'framer-motion'

import React from 'react';
import { TrendingDown, TrendingUp, Target, Lightbulb, CheckCircle, AlertTriangle, Calendar, DollarSign, Users, Zap } from 'lucide-react';

const Case2 = () => {
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
              CASE STUDY 2
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we transformed evergreen webinar ads to achieve industry-leading CPL for a medspa training program
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
              I started running ads for this client last year. Her course is about helping Nurses and other women in healthcare roles open their medspa so they can experience freedom, flexibility and financial stability.
            </p>
            <p>
              Every month we used to do 1 live webinar for which we ran ads all month. And with every webinar, we used to make 5-7 sales for the $2997 product in the backend.
            </p>
            <p>
              For every $3000 spent in ads for the live webinar, we earned about $25K to $30K, which is equal to 5-6X ROAS.
            </p>
            <p>
              But things started going downhill in May 2024, when the client announced she didn't want to do live webinars anymore. She only wants to do evergreen webinars.
            </p>
            <p>
              The agency agreed and I tested ads for evergreen webinars. Initially, I rewrote our current control ad, and revised it to fit our current objective.
            </p>
            <p>
              But our CPL for the evergreen webinar ads was around $20-25. Not good. Plus everyday, the CPL was increasing so there was a clear upward trend in the CPL.
            </p>
            <p>
              For the client to be profitable, we needed 400 leads under $5-7.
            </p>
          </div>

          {/* Initial Success Metrics */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-green-400 font-semibold">Live Webinar ROAS</div>
                  <div className="text-2xl font-bold text-green-300">5-6X</div>
                </div>
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-green-400 font-semibold">Monthly Sales</div>
                  <div className="text-2xl font-bold text-green-300">5-7</div>
                </div>
                <Users className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-green-400 font-semibold">Revenue per $3K spend</div>
                  <div className="text-2xl font-bold text-green-300">$25-30K</div>
                </div>
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>

          {/* Problem Alert */}
          <div className="mt-6 bg-red-600/10 border border-red-500/30 rounded-lg p-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-400 font-semibold">May 2024: Client switched to evergreen webinars - CPL jumped to $20-25</span>
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
              Revising the control ad didn't work. Because now the people didn't have the urgency to get them to show up and watch the entire webinar.
            </p>
            <p>
              I wrote new solution aware ads as well, and it didn't work good enough. New ads did bring down the CPL to $12-15, but it still wasn't enough.
            </p>
            <p>
              The goal was to bring down the CPL to $5.
            </p>
            <p>
              As the head media buyer, I recommended the agency to work on their landing page and target Problem aware people. But the agency refused to implement any changes in the funnel and wanted me to work on my ads
            </p>
          </div>

          {/* Challenge Metrics */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4 text-center">
              <div className="text-red-400 text-sm mb-1">Initial Evergreen CPL</div>
              <div className="text-2xl font-bold text-red-300">$20-25</div>
              <div className="text-xs text-gray-400 mt-1">Increasing daily</div>
            </div>
            <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4 text-center">
              <div className="text-red-400 text-sm mb-1">After New Ads CPL</div>
              <div className="text-2xl font-bold text-red-300">$12-15</div>
              <div className="text-xs text-gray-400 mt-1">Still not enough</div>
            </div>
            <div className="bg-yellow-600/10 border border-yellow-500/30 rounded-lg p-4 text-center">
              <div className="text-yellow-400 text-sm mb-1">Target CPL</div>
              <div className="text-2xl font-bold text-yellow-300">$5</div>
              <div className="text-xs text-gray-400 mt-1">For profitability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Task */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-yellow-900/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-700/50 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-yellow-400">Task</h2>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            With no support from the agency, I knew I needed to do the heavy lifting on the ads front. I need to figure out a way to …
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Reduce CPL to $5",
              "Secure high-quality leads that would convert to sales",
              "Rapidly diagnose and fix the CPL issue before the agency decides to let me go or fire the client"
            ].map((task, index) => (
              <div key={index} className="bg-yellow-600/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-yellow-200">{task}</span>
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
              <Lightbulb className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-purple-400">Action</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I remembered a concept, in which the total addressable market is made of people who will only buy after they read ads with certain angles.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              So I divided the market for this offer into 4 major pain points and their desires.
            </p>

            {/* Pain Points Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { number: 1, pain: "No freedom" },
                { number: 2, pain: "No flexibility" },
                { number: 3, pain: "Dying feeling of impact" },
                { number: 4, pain: "Not enough compensation" }
              ].map((point) => (
                <div key={point.number} className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      {point.number}
                    </div>
                    <span className="text-purple-200 font-medium">Pain point {point.number}: {point.pain}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-purple-300 font-semibold text-lg mb-4">Strategic Implementation</h3>
              <div className="space-y-3 text-gray-300">
                <p>And I wrote 5 ad copy, 5 headlines, and 5 creative copy for each of these pain points.</p>
                <p>And I did this for both …</p>
                <div className="ml-4 space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span>Solution Aware Market</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span>Problem Aware Market</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I started running these ads with a $5/day budget and slowly scaled the winners to $1000/day.
              </p>
              <p>
                Right now the client has 7 ads that are individually scalable to $1000/day.
              </p>
              <p>
                The CPL now is averagely $1.7, some days it even goes down to less than $1.
              </p>
              <p className="font-medium text-purple-300">
                The COO told me that I am bringing the lowest CPL in their entire competitor base and they are using this as a USP to stand out from the market.
              </p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$1.7</div>
              <div className="text-green-300 font-medium">Average CPL</div>
              <div className="text-sm text-gray-400 mt-1">Sometimes &lt; $1</div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">5X</div>
              <div className="text-green-300 font-medium">Evergreen ROAS</div>
              <div className="text-sm text-gray-400 mt-1">Consistent delivery</div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$30K</div>
              <div className="text-green-300 font-medium">Monthly Budget</div>
              <div className="text-sm text-gray-400 mt-1">Scaled up</div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$100-120K</div>
              <div className="text-green-300 font-medium">Monthly Revenue</div>
              <div className="text-sm text-gray-400 mt-1">Evergreen sales</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-green-300">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">CPL: $1.7</span>
            </div>
            <div className="flex items-center space-x-2 text-green-300">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Evergreen webinar ROAS: 5X</span>
            </div>
            <div className="flex items-center space-x-2 text-green-300">
              <DollarSign className="w-5 h-5" />
              <span className="font-semibold">Monthly budget $30K</span>
            </div>
            <div className="flex items-center space-x-2 text-green-300">
              <Target className="w-5 h-5" />
              <span className="font-semibold">Monthly Revenue: About $100K - $120K in evergreen webinar sales</span>
            </div>
          </div>

          {/* Competitive Advantage */}
          <div className="mt-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
              <span className="text-green-300 font-semibold">Industry Leadership: Lowest CPL in entire competitor base - now used as competitive USP</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case2;