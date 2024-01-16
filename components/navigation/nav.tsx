'use client'

import { useState } from 'react'
import Link from 'next/link'
import PitchforkLogo from '../logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="md:flex-auto items-center flex-shrink-0 text-white mr-6">
          <PitchforkLogo />
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-500 hover:border-blue-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex nav-item`}>
          <Link href='/'>Home</Link>
          <Link href='/'>Menu</Link>
          <Link href='/'>Order Online</Link>
          <Link href='/'>Reservations</Link>
        </div>
      </nav>
    </>
  )
}

export { Navbar }