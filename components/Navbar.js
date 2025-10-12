"use client"

import {  MoveRight } from "lucide-react"

import Link from "next/link"

export default function Navbar({ action , target="_blank"}) {





  return (
    <nav

      className="absolute top-0 left-0 right-0  transition-all py-2 duration-300  bg-transparent z-[100]"
    >
      <div
        className="duration-300"
      >
        <div className="xl:container lg:px-10 xl:px-0 w-full mx-auto px-2 ">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className=" cursor-pointer">
              <img src="/logo.png" alt="" className="w-[100px] md:w-[150px] brightness-[3]  object-cover" />
            </Link>
            <a href={action} target={target} className="flex group  transition-all duration-300 ease-in-out border-gray-200    justify-between gap-4  px-4 md:px-6 py-2  md:py-3  text-sm border ">
              <span className="">Get Started</span>
              <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                <MoveRight size={18} />
              </span>
            </a>



          </div>
        </div>
      </div>
    </nav>
  )
}
