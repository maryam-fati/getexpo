import React from 'react'

const Footer = () => {
    return (
        <footer className="relative z-10 border-t  font-poppins border-white/10 mt-24">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-2xl font-bold text-gradient-primary mb-4">GetExposure</div>
                        <p className="text-blue-100/80 mb-4">
                            Transform your ad spend into real customers with our data-driven approach to digital advertising.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-blue-100/80">
                            <li>Campaign Scaling</li>
                            <li>Performance Optimization</li>
                            <li>Campaign Setup</li>
                            <li>Creative Development</li>
                            <li>Cross-Channel Integration</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Case Studies</h4>
                        <ul className="space-y-2 flex flex-col  text-blue-100/80">
                            <a href="/CaseStudy/case1">Case 1</a>
                            <a href="/CaseStudy/case2">Case 2</a>
                            <a href="/CaseStudy/case3">Case 3</a>
                            <a href="/CaseStudy/case4">Case 4</a>
                            <a href="/CaseStudy/case5">Case 5</a>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-blue-100/80">
                            <li>Vancouver, BC, Canada</li>
                            <li>+1 778 712 3301</li>
                            <li>team@getexposure.ca</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t flex items-center justify-around border-white/10 mt-8 pt-8 text-center text-blue-100/80">
                    © 2025 GetExposure. All rights reserved.
                    <span className='flex items-center gap-2'>
                        <span> Designed by </span>
                        <span className='font-extralight text-blue-500 font-raleway text-2xl'>
                            <a target='_blank' href="https://www.linkedin.com/in/maryam-fatima-rajput/">
                                Maryam Fatima
                            </a>
                        </span>
                        From
                        <span className='font-medium text-blue-400 font-raleway text-xl'>
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
