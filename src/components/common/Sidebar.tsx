'use client'
import React, { useState, MouseEvent } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
const sideBarItems = ["Todo", "Financial", "Notes", "Settings"]
function Sidebar() {
  const [active, setActive] = useState("todo")
  const router = useRouter()
  const handleClick = (el:string) => {
    const element = el.toLowerCase()
    setActive(element)
    router.push(`/admin/${element}`)
  }



  return (
    <div className=' bg-green-400 w-[20%] h-[100vh]'>
      <p>General</p>
      <ul className='flex flex-col gap-3'>
        {sideBarItems.map((el, index) => {
          return (
            <li key={index} className={classNames(
              'list_item cursor-pointer',
              {
                'bg-[green] text-white hover:bg-[green]': active == el.toLowerCase()
              }

            )}
              onClick={() => handleClick(el)}
            >{el}</li>


          )
        })}
      </ul>

    </div>
  )
}

export default Sidebar