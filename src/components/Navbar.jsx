import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/public/logo.png" alt="Pet Adoption Logo" className="h-12 w-auto" />
        </Link>

        <ul className="hidden md:flex items-center justify-between space-x-6">
          <li>
            <Link to="/" className='text-gray-700 hover:text-blue-600 transition'>Home</Link>
          </li>
          <li>
            <Link to="/adopt" className='text-gray-700 hover:text-blue-600 transition'>Adopt</Link>
          </li>
          <li>
            <Link to="/about" className='text-gray-700 hover:text-blue-600 transition'>About</Link>
          </li>
          {/* <li>
             <button className='bg-blue-600 text-white px-4 py-2 rounded-md'>
              <Link to="how-to">How To</Link>
             </button>
          </li> */}
        </ul>

        <button className='md:hidden text-gray-700 focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' d="M4 6h16M4 12h16m 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
