import { ExperienceType } from '@/Data'
import React from 'react'

function Experience({ expericence }: { expericence: ExperienceType }) {
    const data = expericence.caterogry
    return <>
        <div className=' lg:flex '>
            <div className='border-[2px] border-[green] p-10'>
                {
                    data.map((el) => {
                        return <>

                            <ul className='' key={el.title}>
                                <li className='font-semibold'>{el.title}</li>
                                <small className='ml-10'>-{el.position} @{el.company} </small>

                            </ul>
                        </>
                    })
                }


            </div>
        </div>
    </>



}

export default Experience