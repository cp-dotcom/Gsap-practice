"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import { ArrowLeftCircleIcon } from 'lucide-react'

function page() {
    useEffect(()=>{
        gsap.to("#stagg",{y:550,duration:2,ease:'power1.inOut',repeat:-1,yoyo:true,rotation:100,
            stagger:.5,
            scale:6,
           
        })
    },[])
  return (
    <div>
      <h1 className='text-center mt-10 text-5xl text-orange-500'>Gsap Stagger method....!</h1>

            <div className='mt-30 ml-80 flex gap-9'>
                <div className="w-10 h-18 rounded-3xl bg-orange-100" id='stagg' />
                <div className="w-10 h-18 rounded-3xl bg-orange-200" id='stagg' />
                <div className="w-10 h-18 rounded-3xl bg-orange-300" id='stagg' />
                <div className="w-10 h-18 rounded-3xl bg-orange-400" id='stagg' />
                <div className="w-10 h-18 rounded-3xl bg-orange-500" id='stagg' />
                <div className="w-10 h-18 rounded-3xl bg-orange-600" id='stagg' />
                <div className="w-10 h-18 rounded-3xl bg-orange-700" id='stagg' />
                <div className="w-10 h-18 rounded-3xl bg-orange-800" id='stagg' />
                <div className="w-10 h-18 rounded-3xl bg-orange-900" id='stagg' />
            </div>
        
       <button  className="bg-orange-600 rounded-xl w-65 h-15 mt-60 ml-130">
      <Link href={"/"} className="text-2xl ">←  Back To Home</Link>
    </button>
   

    </div>
  )
}

export default page
