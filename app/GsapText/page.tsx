"use client";
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link';

function page() {
    useEffect(()=>{
        gsap.to("#txt",{y:0,opacity:1,ease:'power1.inOut', scale:1.6})

        gsap.fromTo("#para1",{opacity:0,y:20},{opacity:1,y:0,delay:1,ease:'power1.in', stagger:0.5})
        gsap.fromTo("#para2",{opacity:0,y:20},{opacity:1,y:0,delay:1.2,ease:'power1.in', stagger:0.5})
        gsap.fromTo("#para3",{opacity:0,y:20},{opacity:1,y:0,delay:1.4,ease:'power1.in', stagger:0.5})
        gsap.fromTo("#para4",{opacity:0,y:20},{opacity:1,y:0,delay:1.6,ease:'power1.in', stagger:0.5})
        gsap.fromTo("#para5",{opacity:0,y:20},{opacity:1,y:0,delay:1.8,ease:'power1.in', stagger:0.5})
    },[])
  return (
    <div>
      <h1 className='text-center mt-17 text-2xl opacity-0 translate-y-10' id='txt'>Gsap Text Animation......!</h1>
      <p className='mt-10 text-2xl' id='para1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
         impedit accusantium! Tempore dolorum impedit modi omnis minus minima maxime, provident repudiandae nulla,
          nostrum fugit, corporis optio. Labore culpa ullam aspernatur eaque, nemo praesentium vitae, corporis
           asperiores reprehenderit omnis iusto quasi quis delectus quidem id, doloribus nisi
            ad deleniti rem?</p><br></br>
            <p id='para2' className='text-xl'>Reiciendis vero et magni at nobis ipsum deleniti similique adipisci, nam rem vitae vel, quae rerum atque!
             Tempore blanditiis ea ipsam corporis deserunt iusto, repudiandae dolore quisquam reiciendis omnis modi explicabo, 
             magnam consectetur animi</p><br></br>
              <p id='para3' className='text-lg'>natus quos quaerat! Quo, eum laborum corporis quibusdam labore quis ab soluta optio deleniti 
             a necessitatibus excepturi et, dolorum nulla eligendi dignissimos amet
              molestiae minus beatae libero doloremque ducimus.</p><br></br>
              <p id='para4' className='text-sm'>Neque, minima asperiores? Voluptatibus, ducimus enim. Libero quis deleniti molestias laboriosam autem tempore officia
               voluptates. Mollitia sint consequatur impedit molestias rem facilis unde fugit nemo tempore eius odio voluptas ab enim culpa
                quae dicta molestiae est, esse a dolores deleniti hic architecto. Magnam explicabo eum aspernatur <br></br>
                mollitia nihil ipsam cum</p> <br></br>
                <p id='para5' className='text-xs'>repellendus vel est laudantium? Optio natus neque id doloremque mollitia blanditiis quas molestias veritatis, quasi eaque 
                nihil suscipit quis dolore a, labore enim! Beatae vel cumque voluptas laborum! Sapiente beatae saepe corrupti aliquam 
                repellendus id quasi natus ab.
                </p>

                 <button className="bg-yellow-600 rounded-xl w-65 h-15  ml-120">
      
      <Link href={"/"} className="text-2xl ">←  Back To Home</Link>
    </button>

    </div>
  )
}

export default page
