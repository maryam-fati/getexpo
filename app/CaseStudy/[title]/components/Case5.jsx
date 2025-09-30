'use client'
import { motion } from 'framer-motion'

import React from 'react';
import { TrendingDown, TrendingUp, Target, Lightbulb, CheckCircle, AlertTriangle, Users, Crown, Filter, Layers, DollarSign, Award, Network } from 'lucide-react';

const Case5 = () => {
    return (
        <div className="min-h-screen mt-[100px] font-poppins  text-white">
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
                            CASE STUDY 5
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            How broad targeting strategy reduced CPL by 60% while attracting high-caliber CEOs to an exclusive Vancouver mastermind
                        </p>
                    </div>
                </div>
            </div>

            {/* Backstory + Situation */}
            <section className="container mx-auto px-6 py-12">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                            <Crown className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-blue-400">Backstory + Situation</h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Internet Mastermind is one of the fastest-growing masterminds in Vancouver, known for its exclusive network of CEOs, executives, and high-level entrepreneurs. The mastermind's CEO had crafted a unique onboarding process:
                        </p>
                    </div>

                    {/* Unique Process Steps */}
                    <div className="mt-6 bg-blue-600/10 border border-blue-500/30 rounded-lg p-6">
                        <h3 className="text-blue-300 font-semibold text-lg mb-4">Unique 3-Step Onboarding Process</h3>
                        <div className="space-y-4">
                            {[
                                { step: 1, title: "Facebook Ads", description: "Run Facebook ads to invite potential members to a dinner." },
                                { step: 2, title: "Exclusive Dinner", description: "Host the dinner with a mix of current mastermind members and new prospects." },
                                { step: 3, title: "Live Pitch", description: "During the dinner, pitch the mastermind group, allowing prospects to experience its value and culture firsthand." }
                            ].map((item) => (
                                <div key={item.step} className="flex items-start bg-blue-700/20 rounded-lg p-4">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                                        {item.step}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-blue-200 font-medium">{item.title}</div>
                                        <div className="text-gray-300 text-sm mt-1">{item.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            However, the campaign wasn't delivering the desired results. The CEO wasn't getting qualified leads—the majority of prospects were far from the target demographic of high-earning CEOs and executives.
                        </p>
                        <p>
                            Instead, he was attracting individuals who weren't financially ready or professionally aligned with the mastermind's goals.
                        </p>
                    </div>

                    {/* Problem Alert */}
                    <div className="mt-6 bg-red-600/10 border border-red-500/30 rounded-lg p-4">
                        <div className="flex items-center">
                            <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                            <span className="text-red-400 font-semibold">Poor Lead Quality: Attracting unqualified prospects instead of high-earning CEOs and executives</span>
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

                    <p className="text-gray-300 mb-6 leading-relaxed">
                        The CEO faced two critical challenges:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                                    1
                                </div>
                                <Crown className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-red-300 font-semibold mb-2">Lead Quality Challenge</h3>
                            <p className="text-gray-300 text-sm">
                                Attracting qualified leads (CEOs, executives, and high-level entrepreneurs).
                            </p>
                        </div>

                        <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                                    2
                                </div>
                                <DollarSign className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-red-300 font-semibold mb-2">Cost Challenge</h3>
                            <p className="text-gray-300 text-sm">
                                Keeping the cost per lead (CPL) under $20 to ensure the campaign remained profitable.
                            </p>
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
                        I was brought in to:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { number: 1, task: "Optimize targeting to attract qualified leads." },
                            { number: 2, task: "Maintain a CPL under $20 while improving the quality of leads." }
                        ].map((item) => (
                            <div key={item.number} className="bg-yellow-600/10 border border-yellow-500/30 rounded-lg p-6">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                                        {item.number}
                                    </div>
                                    <Filter className="w-6 h-6 text-yellow-400" />
                                </div>
                                <span className="text-yellow-200">{item.task}</span>
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
                        {/* Strategy 1 - Targeting */}
                        <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                                    1
                                </div>
                                <h3 className="text-purple-300 font-semibold text-lg">Testing Targeting Strategies</h3>
                            </div>

                            <div className="space-y-4 text-gray-300 text-sm">
                                <p>Initially, the CEO wanted to use interest-based targeting to narrow down audiences.</p>
                                <p>However, I recommended a broad targeting approach, allowing the ad copy to qualify the audience instead of relying on Facebook's interest feature.</p>

                                <div className="bg-purple-700/20 rounded-lg p-4 mt-4">
                                    <h4 className="text-purple-300 font-medium mb-3">Why Broad Targeting?</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                                            <span>Broad targeting lets the algorithm optimize reach and identify the right audience based on behavior, not just interests.</span>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                                            <span>It provides more scalability and avoids restricting the audience pool.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-indigo-700/20 rounded-lg p-4">
                                    <h4 className="text-indigo-300 font-medium mb-3">Test Structure</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-indigo-800/30 rounded p-3">
                                            <div className="text-indigo-300 font-medium">50% Budget</div>
                                            <div className="text-sm">Interest-based targeting (CEO's preference)</div>
                                        </div>
                                        <div className="bg-indigo-800/30 rounded p-3">
                                            <div className="text-indigo-300 font-medium">50% Budget</div>
                                            <div className="text-sm">Broad targeting (my recommendation)</div>
                                        </div>
                                    </div>
                                </div>

                                <p className="font-medium text-purple-300">
                                    The results were clear: Broad targeting outperformed interest-based targeting in both CPL and lead quality.
                                </p>
                            </div>
                        </div>

                        {/* Strategy 2 - Ad Copy */}
                        <div className="bg-indigo-600/10 border border-indigo-500/30 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                                    2
                                </div>
                                <h3 className="text-indigo-300 font-semibold text-lg">Crafting Persuasive Ad Copy</h3>
                            </div>

                            <div className="space-y-4 text-gray-300 text-sm">
                                <p>The success of broad targeting relied heavily on creating precise, qualifying ad copy. I wrote ad copy that:</p>

                                <div className="space-y-3">
                                    {[
                                        "Highlighted the exclusivity of the mastermind.",
                                        "Addressed pain points specific to CEOs and executives (e.g., desire for meaningful connections, high-level business discussions).",
                                        "Qualified leads by emphasizing the financial and professional criteria required to join."
                                    ].map((point, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2"></div>
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-indigo-700/20 rounded-lg p-4 mt-4">
                                    <h4 className="text-indigo-300 font-medium mb-3">Example Ad Copy</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-indigo-300 font-medium text-xs mb-1">Example headline:</div>
                                            <div className="italic bg-indigo-800/30 p-3 rounded">"Network with Vancouver's Top CEOs Over Dinner – Exclusive Invitation for Executives Only."</div>
                                        </div>
                                        <div>
                                            <div className="text-indigo-300 font-medium text-xs mb-1">Example body copy:</div>
                                            <div className="italic bg-indigo-800/30 p-3 rounded">"This isn't your typical networking event. Join a private mastermind dinner with Vancouver's top CEOs and entrepreneurs. Share ideas, build connections, and gain access to an exclusive group that's shaping the future of business. Apply now to reserve your seat."</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Strategy 3 - Funnel */}
                        <div className="bg-teal-600/10 border border-teal-500/30 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                                    3
                                </div>
                                <h3 className="text-teal-300 font-semibold text-lg">Refining the Funnel</h3>
                            </div>

                            <div className="space-y-4 text-gray-300 text-sm">
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2"></div>
                                        <span>The ad directed prospects to a landing page with a short application form.</span>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2"></div>
                                        <span>The form included qualifying questions, such as income level, industry, and job title, to filter out unqualified leads before they reached the dinner stage.</span>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2"></div>
                                        <span>This ensured only prospects who met the mastermind's standards progressed further.</span>
                                    </div>
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

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
                            <div className="text-4xl font-bold text-green-400 mb-2">$8-10</div>
                            <div className="text-green-300 font-medium">Average CPL</div>
                            <div className="text-sm text-gray-400 mt-1">Reduced from $20+</div>
                        </div>
                        <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
                            <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
                            <div className="text-green-300 font-medium">CPL Reduction</div>
                            <div className="text-sm text-gray-400 mt-1">Significant savings</div>
                        </div>
                        <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 text-center">
                            <Crown className="w-12 h-12 text-green-400 mx-auto mb-2" />
                            <div className="text-green-300 font-medium">Premium Leads</div>
                            <div className="text-sm text-gray-400 mt-1">CEOs & Executives</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2 text-green-300">
                                <TrendingDown className="w-5 h-5" />
                                <span className="font-semibold">CPL: Reduced the cost per lead from $20+ to an average of $8-10 per lead.</span>
                            </div>
                            <div className="flex items-center space-x-2 text-green-300">
                                <Crown className="w-5 h-5" />
                                <span className="font-semibold">Lead Quality: Attracted high-caliber prospects (CEOs, executives, and business owners) who were financially and professionally ready to join the mastermind.</span>
                            </div>
                            <div className="flex items-center space-x-2 text-green-300">
                                <Award className="w-5 h-5" />
                                <span className="font-semibold">Mastermind Growth: The mastermind gained new members from these qualified leads, boosting revenue and reinforcing its reputation as an exclusive, high-value group in Vancouver.</span>
                            </div>
                        </div>
                    </div>

                    {/* Success Highlight */}
                    <div className="mt-6 bg-gradient-to-r from-green-600/20 to-indigo-600/20 border border-green-500/30 rounded-lg p-4">
                        <div className="flex items-center">
                            <Network className="w-6 h-6 text-green-400 mr-3" />
                            <span className="text-green-300 font-semibold">Strategic Success: Broad targeting + qualifying ad copy delivered both cost efficiency and premium lead quality</span>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Case5;