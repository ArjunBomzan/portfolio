'use client'
import Dashboard from '@/components/Dashbord/Dashboard'
import WithProtectedRoute from '@/components/ProtectedComponent'


import React from 'react'

function Page() {
  return (
    <div className='flex'>
    
        <Dashboard />
        
      
    </div>
  )
}

export default WithProtectedRoute(Page)
