"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExample() {
  useEffect(() => {
    gsap.to("#first",{y:5,duration:1,scale:1.3 ,ease:"power4.out"})

    gsap.to(".box1", {
      x: 100,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".box1",
        start: "top 90%",   
        end: "tpo 10%",
        scrub: true,
      },
    });

    gsap.fromTo(
      ".box2",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1.5,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".box2",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          markers:true
        },
      }
    );

    gsap.fromTo(".box3", {
      scale:2,opacity:3
    },{
      x:-180,
      rotation: 100,
      scale:1,
      opacity:1,
      yoyo:true,
      backgroundColor: "#f50b80ff",
      duration: .5,
      scrollTrigger: {
        trigger: ".box3",
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });

 gsap.fromTo(".box4",{
  scale:3,opacity:3
 },{
  scale:.5,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".box4",
    start:"top 60%",
    end:"bottom 40%",
    scrub:true
  }
 })

    gsap.from(".pin-text", {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".pin-text",
        start: "top center",
        end: "+=200",
        pin: true, 
        scrub: true,
      },
    });

    gsap.to("#text",{y:4,opacity:1,ease:"power1.inOut", scrollTrigger: {
        trigger: "#text",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },})
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <h1 className="text-center pt-10 text-4xl font-bold text-green-400" id="first">
        Gsap ScrollTrigger...!
      </h1>

      <section className="h-screen flex justify-center items-center">
        <div className="box1 w-24 h-24 bg-red-500 rounded-xl" />
      </section>

      <section className="h-screen flex justify-center items-center">
        <div className="box2 w-24 h-24 bg-blue-500 rounded-xl" />
      </section>

      <section className="h-screen flex justify-center items-center">
        <div className="box3 w-24 h-24 bg-red-500 rounded-xl" />
      </section>

      <section className="h-screen flex justify-center items-center">
        <div className="box4 w-24 h-24 bg-yellow-500 rounded-xl" />
      </section>

      <section className="h-screen flex justify-center items-center">
        <h2 className="pin-text text-5xl font-bold text-yellow-400" id="text">
          ScrollTrigger 
        </h2>
      </section>

       <button className="bg-yellow-600 rounded-xl w-65 h-15 mt-40 ml-120">
      
      <Link href={"/"} className="text-2xl ">←  Back To Home</Link>
    </button>
    </div>
  );
}
