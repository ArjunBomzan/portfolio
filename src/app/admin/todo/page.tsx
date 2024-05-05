'use client'
import WithProtectedRoute from '@/components/ProtectedComponent'

import React from 'react'
import Todo from './Todo'

function page() {
  return (
    <div className=' w-full container'>
      <Todo/>
    </div>
  )
}

export default WithProtectedRoute(page)