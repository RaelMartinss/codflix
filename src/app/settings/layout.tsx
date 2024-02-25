import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <h1 className='text-2xl font-bold'>Layout Wrapper</h1>
        <div className='bg-[#141414] text-white scrollbar-hide'>
            {children}
        </div>
    </div>
  )
}
