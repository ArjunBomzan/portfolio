import React from 'react'
import { IoAdd } from "react-icons/io5";
import { MdFileDownloadDone } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
export default function Todo() {
  return (
    <div className='w-full container' >
      <div className='flex justify-between gap-2 mt-10'>
        <div className='border py-20 px-3 shadow-md'>
          <p className='text-center'>Add Your List </p>
          <div className='flex justify-center items-center gap-3'>
            <input type='search' className='border-b-2 border-[green] focus:outline-none w-[60%] ' />
            <button><IoAdd className='text-[26px] text-black transition-all duration-1000  rounded-full hover:bg-[green]' aria-label='add' /></button>
          </div>
          <ul className='m-3'>
            {[1, 2, 3, 4, 5].map((el, index) => (
              <li className='flex justify-around mt-3'>
                <p>Hello task one</p>
                <div className='flex gap-5 items-center'>
                <button>  <MdFileDownloadDone className='text-[20px]'/></button>
                  <button><MdDeleteForever className='text-red-700 text-[20px]'/></button>
                  </div>
              </li>

            ))}

          </ul>
        </div>







        <div className=''>
          <div className='border py-20 px-3 shadow-md '>
            <p className='text-center'>Add Your Projects </p>
            <div className='flex'>
              <input type='text' className='border-b-2 border-[green] focus:outline-none w-[60%] ' />
              <p>plus</p>
            </div>
            <div>
              {[1, 2, 3, 4, 5].map(() => {
                return (
                  <p>e</p>
                )
              })}

            </div>
          </div>
        </div>
        <div className=''>
          <div className='border py-20 px-3 shadow-md'>
            <p className='text-center'>Add Your List </p>

            <div>
              {[1, 2, 3, 4, 5].map(() => {
                return <p className=''>List here </p>
              })}

            </div>
          </div>
        </div>
        <div className='hidden'>
          <div className='border py-20 px-3 shadow-md'>
            <p className='text-center'>Add Your List </p>
            <div className='flex'>
              <input type='text' className='border-b-2 border-[green] focus:outline-none w-[60%] ' />
              <p>plus</p>
            </div>
            <div>
              {[1, 2, 3, 4, 5].map(() => {
                return <p className=''>List here </p>
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
