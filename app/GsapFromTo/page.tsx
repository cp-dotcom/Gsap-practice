"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

function page() {
    useEffect(()=>{
        gsap.fromTo("#blue",{
            x:0,border:"0%",
            rotate:0
        },
            
            {x:550,duration:1,borderRadius:"100%" ,scale:2,repeat:-1,yoyo:true,ease:'power1.inOut',rotate:100})
    },[])
  return (
    <div>
      <h1 className='text-center mt-10 text-5xl text-blue-500'>Gsap FromTo method...!</h1>
      <div className='w-30 h-30 bg-blue-500 rounded-2xl mt-30' id='blue'></div>

      <button  className="bg-blue-600 rounded-xl w-65 h-15 mt-40 ml-130">
      
      <Link href={"/"} className="text-2xl ">←  Back To Home</Link>
    </button>
    </div>
  )
}

export default page

