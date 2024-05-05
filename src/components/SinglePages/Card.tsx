import React from 'react'
import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa"
import { LocalImage } from '../constanst/constants';
import Link from 'next/link';


function Card({ detail }: { detail: any }) {
  
    return (
        <div className='border border-green-300 group '>
            <div className='relative 
                            before:content-[""]
                             before:h-full
                             before:w-full
                             before:absolute
                             before:top-0
                             before:z-900
                             before:bg-transparent
                             before:opacity-50
                             before:transition-all
                             before:duration-500
                             before:hover:bg-green-600
         
                          '>
                <img src={`${LocalImage}/${detail.image}`} alt="logo" 
                    className='h-[200px] object-cover overflow-hidden' />
                <div className='absolute top-3 left-3'>
                    <p>{detail.title}</p>

                </div>
                <div className='absolute 
                                left-[30%]
                                top-[30%] 
                                hidden
                                group-hover:block '>
                    <div className='flex gap-3 justify- flex-col'>
                        <div className='flex gap-8'>
                            <p>Live</p>
                            <p>Front</p>
                            <p>Back</p>
                        </div>
                        <div className='flex gap-8'>
                             <Link href={detail.liveLink} target='blank' className='bg-black bg-opacity-50 p-2'><IoLinkOutline /></Link>
                             <Link href={detail.gitLink} target='blank' className='bg-black bg-opacity-50 p-2'><FaGithub /></Link>
                            <button className='bg-black bg-opacity-50 p-2'><FaGithub /></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card