import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-row px-4 md:px-20 py-4 justify-center md:justify-end items-center bg-gradient-to-r from-transparent to-lightPinkole via-lightPinkole text-sm md:text-md font-rosario'>
      <div className="flex flex-row space-x-20">
        <Link href="#about">About</Link>
        <Link href="#work">Work</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar