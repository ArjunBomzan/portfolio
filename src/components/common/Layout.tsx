import React, { Children, ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-no-repeat bg-cover'>
      <Header/>
        {children}
       <Footer/>

    </div>
  )
}

export default Layout