'use client'
import ParticleBackground from "@/components/particle-background"
import VantaNetBackground from "@/components/vanta-net-background"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MoveRight } from 'lucide-react';
import Contact from "@/components/Contact"
// import RocketScene from "@/components/RocketScene";
import Position from '@/components/Position'
// import StarfieldCanvas from "@/components/StarfieldCanvas"
import { useRouter } from 'next/navigation'
// import HeroAnalyticsDashboard from "@/components/hero-analytics-dashboard"
import RealisticCustomerMachine from "@/components/RealisticCustomerMachine"
import Type from "@/components/Type"
import LogoMarquee from '@/components/LogoMarquee'
export default function HomePage() {
  const router = useRouter();
  const handleScroll = () => {
    const element = document.getElementById("solutions");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const toSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleRedirect = (title) => {
    const slug = toSlug(title);
    router.push(`/Solution/${slug}`);
  };
  const logos = [
    '/brands/1.png',
    '/brands/2.png',
    '/brands/3.png',
    '/brands/4.png',
    '/brands/5.png',
    '/brands/6.png',
    '/brands/7.png',
    '/brands/8.png'
  ]
  return (
    <div className="xl:h-auto md:min-h-screen relative overflow-hidden">




      {/* 🦸‍♂️ Hero Section */}
      <main className="relative z-10">
        <div
          className="relative w-full min-h-screen flex items-center justify-center font-poppins overflow-hidden"
          style={{
            // Set a dark base background color for the section
            backgroundColor: '#000', // Black background
          }}
        >
          <div className="absolute w-full h-[200px] bg-gradient-to-t   z-[100] from-black via-black/50 to-transparent bottom-0 left-0">

          </div>
          {/* Overlay for the elegant gradient effect */}
          {/* Using multiple radial gradients to create a subtle, layered color blend */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.4) 0%, transparent 40%), /* Indigo glow bottom-left */
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 40%), /* Pink glow top-right */
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) /* Central dark fade */
          `,
              // Ensure the background covers the entire div
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>

          <div className="container mx-auto xl:h-auto min-h-screen flex items-center justify-center relative z-10">
            <div className="">
              {/* Left Column - Hero Content */}
              <div className="space-y-14 px-4 md:px-0"> {/* Added padding for smaller screens */}
                {/* Main Headline */}
                <div className="space-y-4 flex items-center justify-center flex-col">
                  <h1 className="text-5xl md:text-8xl text-center font-poppins">
                    <span className="block text-white font-medium">Transform Your Ad Spend </span>
                    <span className="flex md:flex-row flex-col items-center gap-4 justify-center">
                      <span className="font-medium text-white">Into Real</span>
                      <span
                        className="flex md:flex-row flex-col items-center gap-2 justify-center"
                        style={{
                          // Applying a gradient to the text itself for "Customer", "Revenue", "Profit"
                          backgroundImage: 'linear-gradient(to right, #6366f1, #ec4899)', // Indigo to Pink
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          color: 'transparent', // Fallback
                        }}
                      >
                        {/* Assuming Type component is available and correctly imported */}
                        <Type data={['Customer', 'Revenue', 'Profit']} loop={true} speed={100} delay={100} style="" />
                        {/* Placeholder for Type component if not available */}
                        {/* <span className="text-white">Customer</span> */}
                      </span>
                    </span>
                  </h1>
                </div>

                {/* Value Proposition */}
                <div className="space-y-10 mx-auto">
                  <h2 className="text-2xl md:text-[40px] font-poppins text-center text-white">And Bring The Growth You Deserve</h2>
                  <p className="text-lg text-center w-[90%] md:w-[65%] mx-auto text-gray-300 leading-relaxed">
                    We’ll pinpoint where you are in your advertising journey <br /> and deliver customized solutions that maximize your ROI
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="w-full flex justify-center"> {/* Centered the button */}
                  {/* Assuming Button component is available and correctly imported */}
                  {/* <Button className="btn-primary mx-auto flex group font-poppins hover:scale-105 item-center justify-between gap-4 !px-6 !py-4 text-sm rounded-full !font-extralight">
                Work With Us
                <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <MoveRight size={18} />
                </span>
              </Button> */}
                  {/* Placeholder for Button component if not available */}
                  <button className="bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white px-6 py-4 rounded-full text-sm font-extralight hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
                    Work With Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-[150px] mx-auto relative">
          <LogoMarquee logos={logos} speed={40} />

          {/* Left fade overlay */}
          <div className="absolute left-0  z-[100] top-0 h-full w-[20%] bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none "></div>

          {/* Right fade overlay */}
          <div className="absolute right-0 z-[100] top-0 h-full w-[20%] bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none "></div>
        </div>
        <RealisticCustomerMachine />

        <section
          className="relative font-poppins w-full h-auto   md:h-screen xl:h-[80vh] flex items-center justify-center overflow-hidden"
          style={{
            // Set a dark base background color for the section
            backgroundColor: '#000', // Black background
          }}
        >
          {/* Overlay div for the elegant gradient effect */}
          {/* Using multiple radial/linear gradients to create a subtle, layered color blend */}
          <div className="absolute w-full h-[200px] bg-gradient-to-b   z-[100] from-black via-black/40 to-transparent top-0 left-0">
          </div>

          <div className="absolute w-full h-[200px] bg-gradient-to-t   z-[100] from-black via-black/50 to-transparent bottom-0 left-0">
          </div>

          <div
            className="absolute inset-0 z-0"
            style={{
              background: `
            radial-gradient(circle at 5% 5%, rgba(255, 255, 255, 0.11) 0%, transparent 60%), /* Darker glow top-right */

            radial-gradient(circle at 10% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 100%), /* Darker glow top-right */

            radial-gradient(circle at 10% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 70%), /* Darker glow mid-left */
            radial-gradient(circle at 80% 30%, rgba(99, 102, 241, 0.4) 0%, transparent 60%), /* Darker glow top-right */
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%)

          `,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>

          {/* Giant background text with fade effect */}
          <h1
            className="absolute text-[100px] text-stroke text-white/5  select-non lg:text-[350px] font-bold select-none z-10"


          >
            $600K
          </h1>

          {/* Foreground content */}
          <div className="z-10 text-center space-y-1 md:space-y-3 "> <h2 className="text-white text-xl md:text-4xl "> Get Exposure has profitably spent over </h2> <h2 className="text-xl md:text-4xl "> <span className="text-gradient-animated font-semibold"> $600K in Ad spend </span>{' '} <span className="text-white"> and generated over $2.4M.</span> </h2>
          </div>
        </section>

        {/* Enhanced Where Are You Section */}
        <div className="relative  ">
          {/* <div className="absolute top-0 left-0 right-0 h-[200px]  bg-gradient-to-b from-[#090916]/ to-transparent z-10" /> */}

          <div id="solutions" className="max-w-7xl mx-auto px-6 mb:py-16 lg:py-16 text-center">
            <h2 className="text-4xl  font-raleway  text-white mb-8 ">
              <span className="font-medium font-poppins md:text-5xl xl:text-8xl ">Where Are You in Your</span> <br /> <span className="md:text-5xl lg:text-7xl text-gradient-animated">Advertising Journey?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto xl:mb-0 leading-loose lg:mb-12">
              We start by pinpointing exactly where you are in your advertising journey. <br /> Every business is unique, and
              your challenges require tailored solutions.
            </p>
          </div>



          <Position />

        </div>


      </main>
    </div>
  )
}
