"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

function page() {
    const Timeline=gsap.timeline({
        repeat:-1,repeatDelay:1,yoyo:true 
    })
    useEffect(()=>{
        Timeline.to("#yellow",{x:617,rotate:100,yoyo:true,duration:1,ease:'power1'})
        Timeline.to("#yellow",{y:-200,rotation:200,borderRadius:"100%",scale:.5,duration:2,ease:'back.inOut'})
        Timeline.to("#yellow",{x:400,rotation:360,borderRadius:"4xl",scale:3.7,duration:2,ease:'back.inOut'})
    },[])
  return (
    <div>
      <h1 className='text-center mt-10 text-5xl text-yellow-500'>Gsap Timeline method...!</h1>
      <div className='w-30 h-30 bg-yellow-500 rounded-2xl mt-30' id='yellow'></div>
        <button onClick={()=>{
         if(Timeline.paused()){
          Timeline.play()
         }else(
          Timeline.pause()
         )
      }}  className='w-40 h-20 bg-gray-600 rounded-2xl ml-30' >Play/Pause</button>
      <button className="bg-yellow-600 rounded-xl w-65 h-15 mt-40 ml-50">
      
      <Link href={"/"} className="text-2xl ">←  Back To Home</Link>
    </button>
    </div>
  )
}

export default page