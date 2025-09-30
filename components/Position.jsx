import React, { useState, useEffect, useRef } from 'react'
import { TrendingUp, ArrowUpRight, Target, Rocket as RocketIcon } from "lucide-react"
import RocketScene from './RocketScene'
import PartsScene from './PartsScene'
import Station from "./Station"
import StarfieldCanvas from './StarfieldCanvas'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Rocket = () => {
    return (
        <div className='' style={{ position: "relative", width: 500, height: 500 }}>
            <StarfieldCanvas />
            <RocketScene />
        </div>
    )
}

const Position = () => {
    const router = useRouter()
    const containerRef = useRef(null)
    const [selected, setSelected] = useState("rocket")

    // Define the sequence of sections
    const sections = ["rocket", "station", "parts"]

    const toSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
    }

    const handleRedirect = (title) => {
        const slug = toSlug(title)
        router.push(`/Solution/${slug}`)
    }

    const data = {
        rocket: {
            title: "Looking to Scale?",
            subtitle: "Ready to scale above $25k-$30k daily",
            description: "If you're ready to scale your campaign above 25k - 30k a day, we can do it by following our proven 6 step scaling strategy.",
        },
        station: {
            title: "Looking to Optimize?",
            subtitle: "Already spending but need better performance",
            description: "If you're spending consistently on ads but the performance has dropped, we can help you with our customized 6 step process.",
        },
        parts: {
            title: "Just Starting?",
            subtitle: "New to advertising and need guidance",
            description: "Ready to launch your first Facebook ad campaign but unsure where to begin? We'll guide you through the entire process step by step.",
        },
    }

    return (
        <div className=''>
            <div
                ref={containerRef}
                className='container mx-auto min-h-auto  '
            >
                <div className='w-auto  flex items-center justify-center'>
                    <div className=" rounded-full relative  p-2 px-4">
                        <div
                            className="absolute inset-0 z-0 rounded-full"
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

                        <nav className='flex items-center backdrop-blur-sm  py-4 rounded-full px-8 bg-[#00000041] gap-4 w-fit '>
                            {[
                                {
                                    id: "rocket",
                                    text: "Looking to Scale?",
                                    gradient: "from-green-700 to-emerald-700",
                                },
                                {
                                    id: "station",
                                    text: "Looking to Optimize?",
                                    gradient: "from-blue-700 to-cyan-800",
                                },
                                {
                                    id: "parts",
                                    text: "Just Starting?",
                                    gradient: "from-[rgb(99,102,241)] to-pink-800",
                                },
                            ].map(({ id, icon, text, gradient }) => (
                                <button
                                    key={id}
                                    onMouseEnter={() => setSelected(id)}
                                    className={`group flex items-center gap-2  px-4 py-2 rounded-full cursor-pointer transition-all ease-in-out duration-300
                                ${selected === id ? `bg-gradient-to-r ${gradient} text-white` : "bg-transparent hover:bg-white/10"}
                            `}
                                >
                                    <span
                                        className={`md:block hidden font-raleway tracking-wide transition-colors duration-300 ${selected === id ? "text-white " : "text-white group-hover:text-white/80"
                                            }`}
                                    >
                                        {text}
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>

                </div>


                {/* Content sections - Keep all components mounted */}
                <div className="relative max-w-7xl px-6 mx-auto font-poppins min-h-[600px]">
                    {/* Rocket Section */}
                    <div
                        className={`flex lg:flex-nowrap flex-wrap flex-row-reverse items-center w-full transition-all duration-400 ${selected === 'rocket' ? 'opacity-100 visible' : 'opacity-0 invisible absolute top-0 left-0'
                            }`}
                    >
                        <div className=' relative bg-black'>
                            <div className="absolute top-0 left-0 w-full h-[130px]  bg-gradient-to-b  rounded-full !z-[100] from-black via-black/20 to-transparent"></div>
                            <div className="absolute top-0 right-0 w-[130px]   h-full  bg-gradient-to-l   !z-[100] from-black via-black/20 to-transparent"></div>
                            <div className="absolute top-0 left-0 w-[130px]   h-full bg-gradient-to-r   !z-[100] from-black via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0  left-0 w-full h-[130px]  bg-gradient-to-t  rounded-full  !z-[100] from-black via-black/20 to-transparent"></div>

                            <Rocket />
                        </div>
                        <div className='text-start flex items-start flex-col mx-auto gap-10'>
                            <div className='space-y-3'>
                                <h1 className='text-2xl lg:text-5xl'>{data.rocket.title}</h1>
                                <h3 className='text-2xl text-emerald-500'>{data.rocket.subtitle}</h3>
                            </div>
                            <p className='text-start text-xl text-gray-200 font-poppins font-light md:w-3/4'>{data.rocket.description}</p>
                            <div >
                                <motion.div onClick={() => handleRedirect("Looking to Scale")} className=" group relative w-[145px] font-poppins cursor-pointer text-emerald-500  overflow-hidden h-[50px]    ">
                                    <div className="group-hover:translate-x-[-140px] flex gap-3 transition-all duration-500 ease-in-out">
                                        <motion.span className=" items-center gap-1 text-xl border-b border-emerald-500 inline-flex"><ArrowUpRight size={22} /> Learn&nbsp;More </motion.span>
                                        <motion.span className=" items-center gap-1 text-xl border-b border-emerald-500 inline-flex">Learn&nbsp;More <ArrowUpRight size={22} /></motion.span>

                                    </div>

                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Station Section */}
                    <div
                        className={`flex justify-center   flex-row-reverse lg:flex-nowrap flex-wrap items-center w-full transition-all duration-400 ${selected === 'station' ? 'opacity-100 visible' : 'opacity-0 invisible absolute top-0 left-0'
                            }`}
                    >
                        <Station />
                        <div className='text-start flex    items-start flex-col mx-auto gap-10'>
                            <div className='space-y-6'>
                                <h1 className='text-2xl lg:text-5xl'>{data.station.title}</h1>
                                <h3 className='text-2xl text-[#4B98DF]  '>{data.station.subtitle}</h3>
                            </div>
                            <p className='text-start text-xl text-gray-200  font-light md:w-3/4'>{data.station.description}</p>
                            <div>
                                <motion.div onClick={() => handleRedirect("Looking to Optimize")} className=" group relative w-[145px] font-poppins cursor-pointer text-[#4B98DF] overflow-hidden h-[50px]    ">
                                    <div className="group-hover:translate-x-[-140px] flex gap-3 transition-all duration-500 ease-in-out">
                                        <motion.span className=" items-center gap-1 text-xl border-b border-[#4B98DF]  inline-flex"><ArrowUpRight size={22} /> Learn&nbsp;More </motion.span>
                                        <motion.span className=" items-center gap-1 text-xl border-b border-[#4B98DF] inline-flex">Learn&nbsp;More <ArrowUpRight size={22} /></motion.span>

                                    </div>

                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Parts Section */}
                    <div
                        className={`flex   lg:flex-nowrap flex-wrap items-end    w-full transition-all duration-400 ${selected === 'parts' ? 'opacity-100 visible' : 'opacity-0 invisible absolute top-0 left-0'
                            }`}
                    >

                        <div className='text-start   flex flex-wrap items-start justify-center  flex-col mx-auto  gap-10'>
                            <div className='space-y-6'>
                                <h1 className='text-2xl lg:text-5xl'>{data.parts.title}</h1>
                                <h3 className='text-2xl text-pink-400  '>{data.parts.subtitle}</h3>
                            </div>
                            <p className='text-start text-xl text-gray-200  font-light md:w-3/4'>{data.parts.description}</p>
                            <div>

                                <motion.div onClick={() => handleRedirect("Just Starting")} className=" group relative w-[145px] font-poppins cursor-pointer text-pink-400  overflow-hidden h-[50px]    ">
                                    <div className="group-hover:translate-x-[-140px] flex gap-3 transition-all duration-500 ease-in-out">
                                        <motion.span className=" items-center gap-1 text-xl border-b border-pink-400    inline-flex"><ArrowUpRight size={22} /> Learn&nbsp;More </motion.span>
                                        <motion.span className=" items-center gap-1 text-xl border-b border-pink-400  inline-flex">Learn&nbsp;More <ArrowUpRight size={22} /></motion.span>

                                    </div>

                                </motion.div>
                            </div>
                        </div>
                        <div className=''>

                            <PartsScene />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Position