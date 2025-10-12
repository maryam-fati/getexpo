import React from 'react'
import Link from "next/link"


const Footer = () => {
    return (
        <footer className="relative bg-[black] backdrop-blur-2xl z-10 border-t  font-raleway border-white/5 mt-24">
            <div
                className="absolute inset-0 -z-50 blur-sm"
                style={{
                    background: `
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 30%), /* Indigo glow bottom-left */
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 30%), /* Pink glow top-right */
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) /* Central dark fade */
          `,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>

            <div className="relative z-[100] xl:container xl:px-0 lg:px-10 w-full mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center  gap-5 md:gap-8">
                    <div className="space-y-4">
                        {/* <div className="text-2xl text-white font-bold  mb-4">GetExposure</div> */}
                        <Link href="/" className=" cursor-pointer">
                            <img src="/logo.png" alt="" className="w-[150px] brightness-[3]  object-cover" />
                        </Link>
                        <p className="text-white/80 mb-4">
                            Transform your ad spend into real customers with our data-driven approach to digital advertising.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-white/80">
                            <li>Campaign Scaling</li>
                            <li>Performance Optimization</li>
                            <li>Campaign Setup</li>
                            <li>Creative Development</li>
                            <li>Cross-Channel Integration</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Case Studies</h4>
                        <ul className="space-y-2 flex flex-col  text-white/80">
                            <a href="/CaseStudy/case1">Case Study 1</a>
                            <a href="/CaseStudy/case2">Case Study 2</a>
                            <a href="/CaseStudy/case3">Case Study 3</a>
                            <a href="/CaseStudy/case4">Case Study 4</a>
                            <a href="/CaseStudy/case5">Case Study 5</a>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 font-poppins text-white/80">
                            <li>Vancouver, BC, Canada</li>
                            <li>+1 778 712 3301</li>
                            <li>team@getexposure.ca</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t flex flex-wrap items-center justify-around border-white/10 mt-8 pt-8 text-center text-white/90">
                    © 2025 GetExposure. All rights reserved.
                    <span className='flex flex-wrap justify-center  items-end gap-2'>
                        <span> Designed by </span>
                        <span className='font-medium italic  pb-[0.5px] border-b-[0.5px] border-white/70 text-white font-poppins text-lg md:text-xl'>
                            <a target='_blank' href="https://www.linkedin.com/in/maryam-fatima-rajput/">
                                Maryam Fatima
                            </a>
                        </span>
                        <span className='font-medium text-blue-500 flex gap-1 font-raleway text-xs'>
                            From
                            <a target='_blank' href="https://codagentic.software/">
                                CODAGENTIC

                            </a>
                        </span>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
