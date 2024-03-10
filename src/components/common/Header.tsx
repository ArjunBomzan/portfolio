import React from 'react'

function Header() {
  return (
    <>
      <div className=''>

        <div className='container flex justify-between items-center p-4'>
          <div className='font-bold text-[24px] text-white'>
            Portfolio
          </div>
          <div className='flex gap-9 list-none text-white'>
            <li>About </li> 
            <li>Contact</li> 
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Header