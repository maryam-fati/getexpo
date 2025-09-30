'use client'
import { motion } from 'framer-motion'

import React from 'react';
import { TrendingDown, TrendingUp, Target, Lightbulb, CheckCircle, AlertTriangle } from 'lucide-react';

const Case1 = () => {
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
            <h1 className="text-5xl xl:text-6xl font-bold mb-4 text-white text-transparent">
              CASE STUDY 1
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we turned a failing Facebook ads campaign into a success story for an EKG training program
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
              I managed Facebook ads for a client specializing in EKG interpretation for nurse practitioners—a skill where accuracy could mean the difference between life and death. She had a course in which she taught other Nurse Practitioners who wanted to learn EKGs.
            </p>
            <p>
              As the Head media buyer, my role was crucial: generate quality leads affordably. Initially, we celebrated an incredible win, slashing the cost per lead (CPL) from $8 to $5. This 62% reduction in the CPL marked the initial success at our agency.
            </p>
          </div>

          {/* Success Metric */}
          <div className="mt-6 bg-green-600/10 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center">
              <TrendingDown className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-semibold">Initial Success: CPL reduced from $8 to $5 (62% reduction)</span>
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
              Six months in, my world turned upside down. Our once-stellar CPL skyrocketed past $5, and ad fatigue hit us like a huge tidal wave.
            </p>
            <p>
              Backend sales plummeted, and my stomach churned as I watched the numbers decline day after day.
            </p>
            <p>
              The client, understandably panicked, wanted to stop the ads and fire the agency. But the COO convinced her to run ads for another month where we improve our metrics and bring back the good days.
            </p>
            <p>
              After much convincing and back and forth, she finally agreed to keep running the ads for the next 4 weeks. But she slashed our ad budget by more than 70%.
            </p>
            <p className="font-medium text-red-300">
              Suddenly, I felt the weight of the entire campaign—and perhaps my career—on my shoulders.
            </p>
            <p>
              Every morning, I woke up with a knot in my stomach, dreading to check the ad performance. The fear of failure consumed me. What if I couldn't turn this around? Would I be known as the media buyer who lost a crucial medical education client? The thought of letting down not just the client, but potentially impacting the quality of healthcare through our training, kept me up at night.
            </p>
          </div>

          {/* Crisis Metrics */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-400 font-semibold">CPL skyrocketed past $5</span>
              </div>
            </div>
            <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-400 font-semibold">Budget slashed by 70%</span>
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
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-yellow-400">Task</h2>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            As the head media buyer, I faced a mountain that seemed almost impossible to climb:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Dramatically reduce the spiraling CPL",
              "Secure high-quality leads that would convert to sales",
              "Rapidly diagnose and fix the cost issue before it was too late",
              "The clock was ticking, and I could feel the client's trust slipping away with each passing day"
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

          <div className="space-y-8">
            {/* Initial Frustration */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-red-300 mb-3">Initial Frustration</h3>
              <p className="text-gray-300 leading-relaxed">
                I revised the ads frantically. But none of those new ads worked. My heart was sinking with every day passing by. as each attempt fell flat. The feeling of helplessness was overwhelming.
              </p>
            </div>

            {/* Market Insight Epiphany */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Market Insight Epiphany</h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Obviously I wrote more new ads. But nothing worked. The copy was great, the creatives looked amazing that could stop the scroll, and based on the previous data with this client and this industry, I was writing the perfect ads and designing the perfect creatives.
                </p>
                <p>
                  But still the lead cost wasn't coming down. And another problem was, the leads that I was bringing in, the feedback loop was slow.
                </p>
                <p>
                  That is, we only had 1 live webinar a week, so even if I spent more to bring leads, I only had one shot --- 1 webinar a week --- to see if my leads bought the backend product. So the leads that came in with these new ads I wrote, they didn't buy at all.
                </p>
                <p className="font-medium text-blue-300">
                  This is where I realized that the market has shifted.
                </p>
                <p>
                  According to Eugene Schwartz, there are many different awareness levels to the market. I looked back at my previous controls, I was primarily writing product and solution aware ads.
                </p>
                <p>
                  I felt as we churned through the entire Top of the Funnel market – that we circled around the Most aware, product aware, and solution aware market.
                </p>
                <p>
                  I noticed that none of the ads I wrote were targeting problem aware people. I pursued this idea.
                </p>
              </div>
            </div>

            {/* Pivot Strategy */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-300 mb-3">Pivot to Problem-Aware Audience</h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  With renewed hope, I crafted new ads targeting problem-aware prospects.
                </p>
                <p>
                  <strong className="text-green-300">Creative Testing:</strong> Racing against time, I poured my energy into testing emotionally engaging images. Every day felt like walking a tightrope, balancing between innovation and the fear of further failure.
                </p>
                <p>
                  For the first week of running these problem aware ads, I saw no lift in the number of leads or reduction in lead cost. Another webinar came and went by no major movement on the ads front, BUT we did get a few backend sales.
                </p>
                <p className="font-medium text-green-300">
                  After about 7 days, I saw lead cost decrease from $5 to $3. Then a couple days after, I saw a CPL of $1.8 then CPL of $1.5 then a CPL of $1. I knew I've found the right audience, and the new control ads.
                </p>
                <p>
                  But the CPL wasn't stable. So that was my next goal, to stabilize the CPL. And this is where I wrote new angles for ads, and designed more images that appealed to the Problem Aware market.
                </p>
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

          <p className="text-gray-300 mb-6 leading-relaxed font-medium">
            The turnaround felt nothing short of miraculous:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">75%</div>
              <div className="text-green-300">CPL Reduction</div>
              <div className="text-sm text-gray-400 mt-1">From $8 to $2</div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">4-6X</div>
              <div className="text-green-300">ROAS</div>
              <div className="text-sm text-gray-400 mt-1">Consistent delivery</div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">✓</div>
              <div className="text-green-300">Trust Renewed</div>
              <div className="text-sm text-gray-400 mt-1">Client satisfaction</div>
            </div>
          </div>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              We achieved a CPL reduction from $8 to $2—a 75% cut that seemed impossible just weeks before.
            </p>
            <p>
              Backend sales stabilized, consistently delivering a 4-6X ROAS.
            </p>
            <p>
              The client's trust renewed and which brought me professional validation. And this case study became a testament to perseverance in the face of adversity.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Case1;