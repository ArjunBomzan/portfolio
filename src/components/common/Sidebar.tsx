import React from 'react'

function Sidebar() {
  return (
    <div className=' bg-red-600 w-[20%] h-[100vh]'>
        <p>General</p>
        <ul className='flex flex-col
         gap-3 ml-5'>
          <li>Todo</li>
          <li>Income </li>
          <li>Expenses</li>
          <li>Quates</li>
          <li>Settings</li>
        </ul>
        </div>
  )
}

export default Sidebar