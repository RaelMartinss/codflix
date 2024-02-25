'use client'

import React, { useState } from 'react'

export default function BuggyButton() {
    const [cliecked, setCliecked] = useState(false);

    if (cliecked) {
        throw new Error("OH NO! Something went wrong");
    }
  return (
    <button className='bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700'
        onClick={() => {
            setCliecked(true);
        }}
        >
            Trigger Error
    </button>
  )
}
