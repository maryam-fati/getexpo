"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, } from "lucide-react"

import Marquee from 'react-fast-marquee';

const caseStudies = [
  {
    category: "Healthcare Education",
    title: "Medical Education",
    href:'/CaseStudy/case1',
    description:
      "Our client specializes in EKG interpretation training for nurse practitioners where accuracy can mean life or death. When ad fatigue hit and CPL skyrocketed, we pivoted to target problem-aware audiences with entirely new messaging frameworks.",
    results: ["Reduced CPL by 65%", "Increased conversion rate by 180%", "Scaled to $50k/month"],
    color: "from-red-500 to-rose-600",
  },
  {
    category: "Healthcare Business",
    title: "MedSpa Business",
    href:'/CaseStudy/case2',

    description:
      "Our client helps healthcare professionals transition to owning medspas. When they shifted from live to evergreen webinars, we systematically mapped pain points across awareness levels to maintain conversion rates without the urgency of live events.",
    results: ["Maintained 4.2% conversion rate", "Reduced cost per lead by 40%", "Automated lead generation"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    category: "Healthcare Services",
    title: "IV Hydration",
    href:'/CaseStudy/case3',

    description:
      "Our client teaches healthcare professionals about IV therapies. We repositioned the entire offering from clinical procedure training to business opportunity development, creating differentiation in a crowded healthcare education market.",
    results: ["Increased ROAS by 220%", "Expanded to 3 new markets", "Built $2M+ pipeline"],
    color: "from-green-500 to-emerald-600",
  },
  {
    category: "Health & Wellness",
    title: "Supplements",
    href:'/CaseStudy/case4',

    description:
      "Our client needed a systematic approach to launch multiple supplement products simultaneously. We developed a comprehensive ad testing framework across all awareness levels, prioritizing bioavailability as the primary USP.",
    results: ["Launched 5 products successfully", "Achieved 3.8x ROAS average", "Built loyal customer base"],
    color: "from-purple-500 to-violet-600",
  },
  {
    category: "Business Networking",
    title: "Internet Mastermind",
    href:'/CaseStudy/case5',

    description:
      "Our client runs an exclusive CEO network in Vancouver but struggled to attract qualified leads. We implemented broad targeting with qualifying copy that outperformed conventional interest targeting, attracting higher-caliber executives.",
    results: ["Increased lead quality by 300%", "Reduced cost per qualified lead by 55%", "Filled mastermind program"],
    color: "from-orange-500 to-amber-600",
  },
  {
    category: "Skincare",
    href:'/CaseStudy/case1',

    title: "Skinlycious",
    description:
      "Our client needed to differentiate in a crowded skincare market. We developed a comprehensive content strategy that positioned them as experts in acne treatment, resulting in significant improvements in conversion and customer acquisition.",
    results: ["40% increase in conversion rate", "25% lower customer acquisition costs", "Built brand authority"],
    color: "from-pink-500 to-rose-600",
  },

]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20  my-10 relative px-4 sm:px-6 lg:px-8 ">
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `
            radial-gradient( circle at 35% 2%, rgba(99, 102, 241, 0.4) 0%, transparent 20%), 
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) 
          `,
          // Ensure the background covers the entire div
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[100px]  bg-gradient-to-b from-black via-black/50   "></div>
      </div>
      <div className="container mx-auto">
        <div

          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-8xl font-poppins font-medium text-white mb-2 lg:mb-6">
            Real World{" "}
            <span className=" text-blue-300">
              Success Stories
            </span>
          </h2>
          <p className="text-sm md:text-2xl font-poppins font-extralight text-blue-50 max-w-5xl mt-32 mx-auto leading-relaxed">
            Dive into the detailed journeys of businesses we've helped scale from mediocre results to consistent
            profitability. Each case study reveals exactly how we identified critical scaling barriers, implemented
            strategic solutions, and delivered measurable ROI.
          </p>
        </div>

        <div className="relative ">
          <div className="absolute left-0 !z-[100]  top-0 h-full w-[2%] md:w-[10%] bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none "></div>

          {/* Right fade overlay */}
          <div className="absolute right-0 !z-[100]  top-0 h-full w-[2%] md:w-[10%] bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none "></div>
          {/* </div> */}
          <Marquee
            speed={50}
            direction={'left'}
            pauseOnHover={true}
            // gradient={false}
            className=""
          >
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="mx-6 lg:mx-16 relative p-2 lg:p-5 rounded-2xl group "

              >
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-2xl">
                  {/* <span className="  text-blue-500 border-b border-blue-400 pb-2 font-semibold text-4xl cursor-pointer  font-raleway  transition-all duration-300">
                    Learn More
                  </span>
                   */}

                  <motion.div  className=" group/button relative w-[215px] font-poppins cursor-pointer  hover:text-blue-400 text-pink-400  overflow-hidden h-[50px]    ">
                    <a href={study.href} className="group-hover:translate-x-[-210px] flex gap-3 transition-all duration-500 ease-in-out">
                      <motion.span className=" items-center gap-1 text-3xl border-b group-hover/button:border-blue-500 border-pink-400    inline-flex"><ArrowUpRight size={32} /> Learn&nbsp;More </motion.span>
                      <motion.span className=" items-center gap-1 text-3xl border-b group-hover/button:border-blue-500 border-pink-400  inline-flex">Learn&nbsp;More <ArrowUpRight size={32} /></motion.span>

                    </a>

                  </motion.div>
                </div>

                <div
                  className="absolute inset-0 z-0 rounded-2xl"
                  style={{
                    background: `
            radial-gradient( circle at 70% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 45%), 
            radial-gradient(circle at 20% 80%,  rgba(236, 72, 153, 0.4) 0%, transparent 45%), 
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) 
          `,
                    // Ensure the background covers the entire div
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
                <div className="bg-white/5 border  w-[300px] md:w-[550px] h-[460px] md:min-h-[560px] flex flex-col items-center justify-around  max-h-full rounded-2xl backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105">
                  <div className="p-6 space-y-12">
                    {/* <Badge className={`bg-gradient-to-r ${study.color} text-white mb-4`}>{study.category}</Badge> */}
                    <h3 className="text-xl md:text-5xl  font-poppins text-white mb-3">
                      {study.title.includes(" ") ? (
                        <>
                          <span className="text-blue-400">{study.title.split(" ")[0]}</span>{" "}
                          {study.title.split(" ").slice(1).join(" ")}
                        </>
                      ) : (
                        study.title
                      )}
                    </h3>
                    <p className="text-blue-50 tracking-wider  font-poppins leading-relaxed text-sm md:text-xl">{study.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm md:text-xl font-semibold text-blue-500 uppercase tracking-wide">Key Results:</h4>
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-xs md:text-xl font-poppins  text-blue-50">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section >
  )
}
