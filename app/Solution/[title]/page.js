'use client'
import React, { useRef, useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from '@gsap/react';
import PricingSection from "@/components/pricing-section"
import StatsSection from '@/components/stats-section'
import EnhancedContactForm from "@/components/Contact"
import ServicesSection from "@/components/services-section"
gsap.registerPlugin(ScrollTrigger);


import { MoveRight } from 'lucide-react';
import Casestudies from '../../../components/Casestudies';
const FullData = {
    page_2_3: [
        {
            title: "Foundation & Strategy Development",
            description: `We'll start by understanding your business goals, target audience, and unique selling proposition. You'll receive a comprehensive advertising plan tailored specifically to your business needs and budget. This includes customer persona development, competitive analysis, and clear KPI benchmarks. We'll create easy to understand tracking sheets that will show clear metrics and
give us a picture of where your campaigns are headed from day one.`
        },
        {
            title: "Account & Campaign Setup",
            description: `We'll handle the technical heavy lifting by properly setting up your advertising accounts with the right structure for a sustainable future growth. This includes implementing conversion tracking, creating custom audiences, and establishing your initial campaign architecture. We'l ensure everything is properly connected and tested before launching`
        },
        {
            title: "Initial Creative Development ",
            description: `Using our Creative Testing Matrix", we'll develop your first set of ads designed to connect with your audience and generate results, instead of guessing what might work, we'll create a strategic variety of messages and visuals that will help us quickly identify what resonates with your customers. This approach sets you up with reliable creative insights from the very beginning.`
        },
        {
            title: "Controlled Launch & Testing",
            description: `We'll implement a methodical launch strategy that starts with small, targeted tests to validate our approach before scaling your spend while avoiding wasting budget and establishing baseline performance metrics. We'll monitor campaigns closely during this critical phase, making real-time adjustments to optimize initial performance.`
        },
        {
            title: "Audience Expansion",
            description: `Once we've identified your most responsive audiences, we'll methodically expand your reach to similar high-potential segments. We'll help you build valuable custom audiences based on website visitors and engagement,
creating a sustainable foundation for remarketing and lookalike audiences that will become increasingly valuable over time.`
        },
        {
            title: " Performance Scaling & Optimization ",
            description: `As your campaigns gain traction, we'll implement our Phase-based Scaling Approach to gradually increase your budget while maintaining or improving performance metrics. We'll conduct regular performance reviews and continuously refine your strategy based on real data, ensuring your
advertising foundation supports long-term, sustainable growth`
        },
    ],
    page_2_2:
        [
            {
                title: "Performance Analysis & Efficiency Roadmap",
                description: `We will conduct a thorough analysis of your current campaigns to identify
what’s working and where the leaks are happening. You will receive a detailed
optimization blueprint showing exactly which metrics need improvement and
how we will fix them. This includes audience targeting refinements, creative
performance evaluation, and conversion path analysis. Our strategy stays
flexible to adapt to market changes, with clear contingency plans to maintain
performance even when conditions shift.`
            },
            {
                title: "Campaign Structure Refinement",
                description: `We'll preserve your performing campaigns while strategically rebuilding your
underperforming ones. Our approach will focus on eliminating wasted spend
and creating a more efficient campaign architecture. Based on your priorities,
we'll implement proven optimization techniques like audience consolidation,
advanced bidding strategies, and budget redistribution-all specifically
designed to improve efficiency without disrupting what's already working.`
            },
            {
                title: "Creative Refresh Implementation",
                description: `Using our Creative Testing Matrix™, we'll identify which messages and visuals
actually connect with your audience. We'll develop a pipeline of fresh, high-
converting creatives that prevent ad fatigue and generate consistent results.
These improved ads will not only boost your existing campaigns but also help
us discover new audience segments that respond to different messaging
aboroaches.`
            },
            {
                title: "Optimization Protocol Execution",
                description: `Instead of making random changes, we'll implement our Systematic
Optimization Framework™ to methodically improve performance. Our real-
time monitoring system identifies issues before they impact your results,
allowing us to make data-driven adjustments that steadily improve your ROAS
and conversion rates without disrupting account stability.`
            },
            {
                title: "Sustained Performance & Growth",
                description: `We'll start working on expanding winning strategies, creatives, messaging
across multiple platforms, creating a cohesive ecosystem that maximizes your
total addressable market while maintaining efficiency. This doesn't mean we'll
simply copy paste. Instead, it means we'll identify what digital assets you
need before we switch platforms and then start working on those.`
            },


        ],

    page_2_1: [
        {
            title: "Performance Audit & Scaling Roadmap",
            description: `We'll dive deep into your account, analyzing every metric that matters to identify exactly what's working and what's holding you back in terms of audience targeting, creative performance, and conversion efficiency. You' receive a detailed scaling blueprint with clear milestones and timelines. We' identify all growth opportunities and share a comprehensive strategy that addresses your specific business objectives. And since markets often shift and consumer behaviors evolve, our strategy remains flexible by design- incorporating pivot points and contingency plans to keep your campaigns performing regardless of market conditions.`
        },
        {
            title: "Campaign Architecture Optimization ",
            description: `We won't disrupt your current campaigns that are performing well. Instead, well preserve what's working while strategically enhancing your campaign structure to support high-volume spend without performance drops. Depending on your available ad budget, we can tackle all growth opportunities simultaneously or prioritize them one by one. Our approach Includes some proven scaling techniques like refining your highest-potential audiences, implementing advanced bidding strategies, and creating a flexible budget allocation system that adapts as your campaigns scale-all specifically designed for high-growth accounts.`
        },
        {
            title: "Creative Amplification System",
            description: `W'll use our Creative Testing Matrix to ideate impactful concepts and then create ads that resonate perfectly with your audience. While scaling, your pipeline will always be full of diverse high-converting creatives. These fresh ads will not only prevent ad fatigue from killing your existing momentum, but also help us expand into new audiences and opportunities.`
        },
        {
            title: "Controlled Scaling Execution",
            description: `If you're new to scaling, we won't just double your ad budget overight and risk tanking your results. Instead, we use our Phase-based Scaling Approach to gradually increase your spend while keeping your performance stable. We constantly monitor your campaigns and fix issues before they become problems, helping you confidently reach higher spending levels without the usual headaches.`
        },
        {
            title: " Cross-Channel Integration ",
            description: `We'll start working on expanding winning strategies, creatives, messaging across multiple platforms, creating a cohesive ecosystem that maximizes your total addressable market while maintaining efficiency. This doesn't mean we'll simply copy paste. Instead, it means we'll identify what digital assets you need before we switch platforms and then start working on those.`
        },
        {
            title: "Continuous Optimization & Growth",
            description: `Our team will implement advanced optimization protocols, conduct weekly performance reviews, and continuously refine workflows to ensure sustained growth and prevent performance plateaus.`
        },
    ]
};

const page = () => {
    const [data, setData] = useState([])
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState()
    const [video, setVideo] = useState('')

    const params = useParams();
    const titleRef = useRef(null)
    const greetRef = useRef(null)
    const textRefs = useRef([]);
    const textRefs2 = useRef([]);
    const progressRef = useRef(null);

    const indexRef = useRef()

    const fromSlug = (slug) => {
        return slug
            .split('-')                  // Split on hyphens
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize
            .join(' ');                  // Join with spaces
    };

    const title = fromSlug(params.title)
    const title2 = params.title

    const handleScroll = () => {
        const element = document.getElementById("pricing");
        element.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);

        const handleResize = () => setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    useEffect(() => {
        if (title2 == 'looking-to-optimize') {
            setData(FullData.page_2_2)
            setVideo('https://drive.google.com/file/d/1RxJmPPzr6I2qCUS9y687jQPqg0As7cp0/preview')

        } else if (title2 == "looking-to-scale") {
            setData(FullData.page_2_1)
            setVideo('https://drive.google.com/file/d/1VNI3AONMVuR8Q-7zbVUOJcoMk8jwOj6F/preview')


        } else if (title2 == "just-starting") {
            setData(FullData.page_2_3)
            setVideo('https://drive.google.com/file/d/1VNI3AONMVuR8Q-7zbVUOJcoMk8jwOj6F/preview')

        } else {
            setData(FullData.page_2_1)

        }


    }, [params])

    const mobileSettings = {
        end: '+=1500',
    };
    const desktopSettings = {
        end: '+=9000',

    };

    useGSAP(() => {
        gsap.to(
            '.Title',
            {
                opacity: 0.1,
                y: 10,
                rotateX: -20,
                duration: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.Titlecont',
                    start: "bottom 50%",
                    end: "bottom center",
                    scrub: 1,
                },
            }
        );
        gsap.from('.Video', {
            scale: 0.6,
            opacity: 0.7,
            y: 10,
            duration: 2,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: '.Videocont',
                start: "bottom bottom",
                end: "bottom 85%",
                scrub: 2,
            },

        })
    }, []);



    useGSAP(() => {

        if (!textRefs.current.length || data.length === 0) return;


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.Steps',
                pin: true,
                start: "top top",
                scrub: 1,
                onUpdate: (self) => {
                    if (progressRef.current) {
                        gsap.to(progressRef.current, {
                            height: `${self.progress * 100}%`,
                            ease: "power2.out",
                            duration: 0.1,
                        });
                    }
                    const total = data.length;
                    const stepProgress = self.progress * total;
                    const index = Math.floor(stepProgress);

                    if (index !== activeIndex) {
                        setActiveIndex(Math.min(index, total - 1));
                    }
                },
                ...(isMobile ? mobileSettings : desktopSettings),
            },
        });
        data.forEach((_, index) => {
            const descEl = textRefs.current[index];
            const titleEl = textRefs2.current[index];

            const descSplit = new SplitType(descEl, { types: "words" });
            const titleSplit = new SplitType(titleEl, { types: "words" });

            gsap.set([...descSplit.words, ...titleSplit.words], { opacity: 0, y: 10 });

            tl.to([titleEl, descEl], {
                opacity: 1,
                onStart: () => setActiveIndex(index),
            });

            tl.to([...titleSplit.words, ...descSplit.words], {
                opacity: 1,
                y: 0,
                // stagger: 1,
                duration: 2,
                scrub: 1,

                ease: "power1.inOut",
            });

            tl.to([titleEl, descEl], {
                opacity: 0,
                duration: 0.2,
                scrub: 1,

                y: -30,
            },);
        });

    }, [isMobile, data]);



    return (
        <>

            <div className='relative pb-40'>
                <div className="absolute w-full h-[200px] bg-gradient-to-t   z-[100] from-black via-black/30 to-transparent bottom-0 left-0">
                </div>

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
                <div className='container relative mx-auto py-16'>

                    <div className='Titlecont min-h-[50vh]   flex item-center justify-evenly  flex-col px-4 md:px-0'>
                        <h1 className='Title text-xl xl:text-8xl font-poppins lg:text-5xl  text-center  '>{title}</h1>

                        <p className='text-center leading-normal w-full md:w-[65%] xl:text-2xl lg:text-xl text-gray-300 mx-auto'>Hey, nice to meet you. Since you're already spending on ads but not seeing optimal results, here's what your journey might look like once we start working together.</p>
                    </div>
                    <div className="Videocont w-full flex my-20 items-center justify-center px-4 md:px-0">

                        {/* <iframe className='Video' width="761" height="428" src="https://1drv.ms/v/c/c3b46c3c90c89740/EfbC42Md-edDnojwy-bVlrIBpvZLQBx5yQPD72FZe8SBaQ?e=7uiAw8" title="Why You’re Not Seeing Results in Your Marketing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                        {/* <video width="761" height="428" src={video} controls></video> */}
         <iframe
        src={video}
        width="640"
        height="360"
        allow="autoplay"
        allowFullScreen
      ></iframe>
                    </div>

                </div>
                <div className="w-full flex justify-center">

                    <div onClick={handleScroll} className="mx-auto">

                        <Button className="btn-primary flex group hover:scale-105 item-center justify-between gap-4  !px-6 !py-6 text-lg rounded-full !font-extralight">
                            Get Started Today!
                            <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">

                                <MoveRight size={18} />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>


            <div className="Steps h-screen bg-[rgba(99,101,241,0.05)] relative overflow-hidden">
                <div className="absolute w-full h-[100px] bg-gradient-to-b  z-[100] from-black via-black/30 to-transparent top-0 left-0"></div>
                <div className="absolute w-full h-[200px] bg-gradient-to-t   z-[100] from-black via-black/30 to-transparent bottom-0 left-0"></div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 !z-[-50] backdrop-blur-lg rounded-2xl"
                    style={{
                        background: `
            radial-gradient( circle at 20% 80%, rgba(99, 102, 241, 0.2) 0%, transparent 55%), 
            radial-gradient(circle at 80% 20%,  rgba(236, 72, 153, 0.2) 0%, transparent 55%), 
            radial-gradient(circle at center, rgba(0, 0, 0, 0.7) 0%, transparent 70%) 
          `,
                        // Ensure the background covers the entire div
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></motion.div>
                <div className="sticky container  mx-auto top-0 h-screen  flex items-center justify-center">

                    {data.map((text, index) => (
                        <React.Fragment key={index}>
                            <div className="fixed top-1/2 -translate-y-1/2 right-1 md:right-10 rounded-full h-[40vh] w-1 bg-black z-50">
                                <div
                                    ref={progressRef}
                                    className="bg-[rgb(236,72,153)] w-full rounded-full"
                                    style={{ height: `0%` }}
                                />
                            </div>
                            <div
                                className={`top-10 text-6xl fixed left-10 text-white transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div
                                ref={el => (textRefs2.current[index] = el)}
                                className={`fixed top-1/4 left-1/2 -translate-x-1/2  text-center text-2xl w-full xl:text-7xl lg:text-5xl   text-white md:w-[70%] leading-tight transition-opacity ${activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                            >
                                {text.title}
                            </div>

                            <div
                                ref={el => (textRefs.current[index] = el)}
                                className={`absolute font-raleway tracking-widest !leading-relaxed !font-extralight top-1/2 left-1/2 container px-2 md:px-0  -translate-x-1/2 text-center text-xl lg:text-xl  text-gray-200 md:w-[100%]  transition-opacity ${activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                                dangerouslySetInnerHTML={{ __html: text.description }}
                            ></div>
                        </React.Fragment>
                    ))}

                </div>
            </div>
            <div>
                <StatsSection />
            </div>
            <Casestudies />


            <EnhancedContactForm />



        </>

    )
}

export default page

