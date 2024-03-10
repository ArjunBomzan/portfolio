import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='container'>

        <div>this is blog</div>
        <Link href={"/blogs/1"}>Go to 1st blog</Link>
      </div>
    </>
  )
}
