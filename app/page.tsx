"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

export default function Home() {
  return (
   <div>
    <h1 className='text-center mt-10 text-5xl text-white'>welcome home.....!   </h1>
    <button  className="bg-red-600 rounded-xl w-40 h-20 mt-25 ml-30">
      <Link href={"/GsapTo"} className="text-3xl text-black ">GsapTo</Link>
    </button>
    <button  className="bg-orange-100 rounded-xl w-40 h-20 mt-25 ml-30">
      <Link href={"/GsapFrom"} className="text-3xl text-black  ">GsapFrom</Link>
    </button>
    <button  className="bg-orange-200 rounded-xl w-50 h-20 mt-25 ml-30">
      <Link href={"/GsapFromTo"} className="text-3xl text-black ">GsapFromTo</Link>
    </button>
     <button  className="bg-orange-300 rounded-xl w-50 h-20 mt-25 ml-30">
      <Link href={"/GsapTimeline"} className="text-3xl text-black ">GsapTimeline</Link>
    </button>
    <button  className="bg-orange-400 rounded-xl w-50 h-20 mt-25 ml-30">
      <Link href={"/GsapStagger"} className="text-3xl text-black ">GsapStagger</Link>
    </button>
    <button  className="bg-orange-500 rounded-xl w-70 h-20 mt-25 ml-30">
      <Link href={"/GsapScrollTrigger"} className="text-3xl text-black ">GsapScrollTrigger</Link>
    </button>
    <button  className="bg-orange-600 rounded-xl w-50 h-20 mt-25 ml-30">
      <Link href={"/GsapText"} className="text-3xl text-black ">GsapText</Link>
    </button>
     <button  className="bg-orange-600 rounded-xl w-50 h-20 mt-25 ml-130">
      <Link href={"/loading"} className="text-3xl text-black ">GsapLoding</Link>
    </button>
   </div>
  );
}
