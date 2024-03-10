'use client'
import About from "@/components/SinglePages/About";
import { usePathname } from "next/navigation";
import Typewriter from 'typewriter-effect'
import { useRef } from 'react';
import Experince from "@/components/SinglePages/Experince";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import ScrollTop from "@/components/common/ScrollTop";
export default function Home() {
  const targetRef = useRef<HTMLInputElement | null>(null);
  // let cureent_path = usePathname()
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <ScrollTop/>
      <section className="h-[80vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/bgg.webp)" }}>
        <nav className='container'>
          <div className='container flex justify-between items-center p-4'>
            <div className='font-bold text-[24px] text-white'>
              Portfolio
            </div>
            <div className='flex gap-9 list-none text-white items-center'>
              <li className="navigation hover:active_nav">About</li>
              <li className="navigation hover:active_nav">Contact</li>
              <li className="navigation"><Link href={'/admin'}><FaUserAlt /></Link></li>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className=" w-full lg:w-[50%] mt-8 " >
            <div className=" text-white bg-[#1d1515] bg-opacity-50 p-5">
              <p className="text-[36px] text-white font-semibold">Hello&#44;<span className="text-[#ff4545]">I&apos;am </span></p>
              <div className="text-[36px] font-bold">

                <Typewriter
                  options={{
                    strings: [' Arjun Lama', 'MERN Stack Developer', 'Front-end Engineer'],
                    autoStart: true,
                    loop: true,
                  }}

                />
              </div>

            </div>
            <div className=" flex flex-col justify-center md:flex-row gap-3 mx-10 my-3">
              <button
                onClick={scrollToTarget}
                className="btn">Hire me</button>
                <a href="/assets/officialCV.pdf" download={`Resume.pdf`} >
              <button className="btn" >Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="m-3">
        <About targetRef={targetRef} />
      </div>


    </>
  )
}
