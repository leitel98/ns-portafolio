import React from 'react'

const Pinkline = () => {
  return (
    <div className="hidden md:block px-8 mb-10">
      <div className="relative mx-auto">
        <div className="flex flex-row items-center justify-between">
          <div className="h-5 w-5 bg-pinkole rounded-full" />
          <div className="h-5 w-5 bg-pinkole rounded-full left" />
          <div className="h-5 w-5 bg-pinkole rounded-full" />
          <div className="h-5 w-5 bg-pinkole rounded-full" />
          <div className="h-5 w-5 bg-pinkole rounded-full" />
          <div className="h-5 w-5 bg-pinkole rounded-full" />
        </div>
        <div className="absolute w-full h-1 bg-pinkole top-2 " />
      </div>
    </div>
  )
}

export default Pinkline