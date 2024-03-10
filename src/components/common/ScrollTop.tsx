import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
function ScrollTop() {

const handleClick=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  return (
    <div className='fixed right-10
     flex bottom-6 
      bg-green-600 h-8 
       w-8 justify-center 
       items-center 
       rounded-full
       '>

<button className='' onClick={handleClick}>
<FaLongArrowAltUp  className='text-[25px]'/>
</button>

    </div>
  )
}

export default ScrollTop