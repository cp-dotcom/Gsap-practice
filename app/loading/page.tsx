


"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

export default function SimpleGsapLoading() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {

    
 gsap.to(".circle", {
      rotation: 360,
      repeat: -1,
      duration: 1,
      ease: "linear",
    });
    
   
  }, []);

  return (
    <>
      
      
    

    <div>
      <h1 className='text-center mt-10 text-5xl text-green-500'>Gsap Loading....!</h1>
            <div className="circle  w-16 h-16 border-4 border-gray-500 border-t-green-400 rounded-full ml-150  mt-50"></div>


        
       <button  className="bg-green-600 rounded-xl w-65 h-15 mt-40 ml-130">
      
      <Link href={"/"} className="text-2xl ">←  Back To Home</Link>
    </button>
   

    </div>
         
    
    </>
    
  );
}



