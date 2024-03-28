'use client'
import React, { useState } from 'react'
import Card from './Card'
import { Project,experience } from '@/Data'

import Experience from './Experince'
import Skills from './Skills'
import Education from './Education'
import { FaInstagramSquare,FaLinkedinIn  } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaViber } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { useForm } from 'react-hook-form'
export default function About({ targetRef }: { targetRef: any }) {
    const category: string[] = []
    Project.forEach((el) => {
        if (!category.find((cat) => cat == el.category)) {
            category.push(el.category)
        }
    })
    category.unshift("all")

    const [active, setActive] = useState(0)
    const [aboutActive, setAboutActive] = useState('expericence')
    const [activeCategory, setActiveCategory] = useState('all')


    const handleClick = (index: number, cat: string) => {
        
        setActiveCategory(cat.toLowerCase())
        setActive(index)

    }
    const handleClick1 = (index: number, el: string) => {

        setAboutActive(el.toLowerCase())
    }

type FomrFiled={
    name:string,
    email:string,
    description:string
}

    const tempData = Project.filter((el) => {
        if (activeCategory === "all") {
            return true
        }
        else {
            if (el.category.toLowerCase() === activeCategory)
                return true
        }
    })

    const {register,handleSubmit,setError}=useForm<FomrFiled>()
    const submit=(data:FomrFiled)=>{
  
        
    }
   
    return (
        <>
            <div className='container'>

                <div className='flex justify-center items-center flex-col gap-2'>
                    <p className='text-[36px] font-bold '>About me</p>
                    <div className='flex gap-4'>
                        {
                            ["Expericence", "Skills", "Education"].map((cat, index) => {

                                return <button key={index} className=
                                    {`btn2 ${cat.toLowerCase() == aboutActive ? 'bg-green-700 hover:bg-green-700 text-white' : ''} `

                                    } onClick={() => handleClick1(index, cat)}

                                >


                                    {cat}</button>

                            })
                        }

                    </div>
                </div>
                <div className='m-4 p-3 '>
                    <div className={` ${aboutActive === "expericence" ? 'flex flex-col lg:flex-row  justify-center gap-6' : 'hidden'}`}>
                        {
                            experience.map((el,index) => {

                                return <Experience expericence={el} key={index} />
                            })
                        }
                    </div>
                    <div className={` ${aboutActive === "skills" ? 'flex justify-center gap-3' : 'hidden'}`}>
                        {
                         <Skills/>
                        }
                    </div>
                    <div className={` ${aboutActive === "education" ? 'flex justify-center gap-3' : 'hidden'}`}>
                        {
                            <Education/>
                        }
                    </div>



                </div>
                <div className='flex justify-center items-center flex-col gap-2'>
                    <p className='text-[36px] font-bold '>My Projects</p>
                    <div className='hidden lg:flex gap-4'>
                        {
                            category.map((cat, index) => {

                                return <button key={index} className=
                                    {`btn2 ${index == active ? 'bg-green-700 hover:bg-green-700 text-white' : ''} `

                                    } onClick={() => handleClick(index, cat)}

                                >


                                    {cat}</button>

                            })
                        }

                    </div>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 p-2 gap-3'>

                    {
                       tempData && tempData.map((el) => {
                            return <Card key={el.title} detail={el} />
                        })
                    }


                </div>
                <section className='container  rounded-lg bg-green-500 bg-opacity-[0.7] md:flex '>

                    <div className="" ref={targetRef} >
                        <p className="text-3xl font-bold text-center pt-4">Hire Me</p>

                        <form className="m-10 ">
                            <div className="flex flex-col">
                                <label htmlFor="company" className="text-sm font-medium mb-2">Company Name</label>
                                <input 
                                type="text" 
                                 className="shadow-sm 
                                 p-2 rounded-md focus:outline-none 
                                 focus:ring focus:ring-blue-500
                                  focus:ring-opacity-50" 
                                  required 
                                  {...register("name",{
                                    required:true
                                  })}
                                  
                                  />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm font-medium mb-2">Company Email</label>
                                <input
                                 type="email"
                                 className="shadow-sm p-2 rounded-md focus:outline-none focus:ring
                                  focus:ring-blue-500 focus:ring-opacity-50" required 
                                  {...register("email",{
                                    required:true
                                  })}
                                  />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="description" className="text-sm font-medium mb-2">Project Description</label>
                                <textarea  className="shadow-sm p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                 {...register("description")}
                                />
                            </div>

                            <div className="flex justify-center mt-5">
                                <button 
                                 className="py-2 px-4 bg-blue-500 text-white font-medium rounded-md
                                  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                  
                                  onClick={handleSubmit(submit)}
                                  >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    <div className='container my-10 '>
                        <p className="text-3xl font-bold text-center mb-8">Contact me</p>
                        <div className='flex w-[90%] '>
                        <div className=''>
                            <p className='font-bold text-[26px]'>Email:</p>
                            <p className='ml-10 underline'>tamangarjun9841@gmail.com</p>
                            <p className='font-bold text-[26px]'>Phone:</p>
                            <p className='ml-10'>+9779848911142</p>
                        
                        </div>
                        <div className='flex gap-1 flex-col cursor-pointer list-none'>
                        <li><FaFacebookF className='inline mr-3' />Facebook</li>
                        <li><FaInstagramSquare className='inline mr-3' />Instgram</li>
                        <li><FaViber className='inline mr-3' />Viber</li>
                        <li><IoLogoWhatsapp className='inline mr-3' />WhatsApp</li>
                        <li><FaLinkedinIn className='inline mr-3' />LinkIN</li>
                    
                        </div>
                        </div>
                    </div>
                </section>
            </div >

        </>
    )
}

