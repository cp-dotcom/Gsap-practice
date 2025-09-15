"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

function page() {
    useEffect(()=>{
        gsap.from("#green",{x:550,duration:1,repeat:-1,yoyo:true,ease:'power1.inOut',rotate:100})
    },[])
  return (
    <div>
      <h1 className='text-center mt-10 text-5xl text-green-500'>Gsap from method...!</h1>
      <div className='w-30 h-30 bg-green-500 rounded-2xl mt-30' id='green'></div>

      <button  className="bg-green-600 rounded-xl w-65 h-15 mt-40 ml-130">
      <Link href={"/"} className="text-2xl ">←  Back To Home</Link>
    </button>
    </div>
  )
}

export default page

