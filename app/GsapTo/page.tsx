"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import { ArrowLeftCircleIcon } from 'lucide-react'

function page() {
    useEffect(()=>{
        gsap.to("#red",{x:550,duration:2,ease:'power1.inOut',repeat:-1,yoyo:true,rotation:100})
    },[])
  return (
    <div>
      <h1 className='text-center mt-10 text-5xl text-red-500'>Gsap To method....!</h1>
      <div className='w-30 h-30 rounded-2xl bg-red-500 mt-30' id='red'></div>

        
       <button  className="bg-red-600 rounded-xl w-65 h-15 mt-40 ml-130">
      
      <Link href={"/"} className="text-2xl ">←  Back To Home</Link>
    </button>
   

    </div>
  )
}

export default page

