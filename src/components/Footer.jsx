import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-800 text-white text-center'>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className='flex-col items-start space-y-2 max-w-md hidden md:block'>
            <Link to="/">
              <img src="/logo.png" alt="Pet Adoption Logo" className="h-12 w-auto" />
            </Link>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa at eveniet voluptatibus! Omnis veritatis provident laboriosam, obcaecati quasi amet consequatur ipsum voluptatem hic porro quia possimus, totam a molestias.</p>
          </div>

          <div className='flex flex-col items-start space-y-2 mt-0 md:mt-6'>
            <h3 className='font-bold text-lg md:text-xl'>Quick Links</h3>
            <ul className="flex flex-col items-start space-x-4">
              <li>
                <Link className='hover:text-blue-600' to='/'>Home</Link>
              </li>
              <li>
                <Link className='hover:text-blue-600' to='/about'>About</Link>
              </li>
              <li>
                <Link className='hover:text-blue-600' to='/contact'>Contact</Link>
              </li>
              <li>
                <Link className='hover:text-blue-600' to='/privacy-policy'>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start space-y-2 mt-6">
            <h3 className='font-bold text-lg md:text-xl'>Follow Us</h3>
            <div className="flex flex-col justify-center items-start space-x-4">
              <Link to='https://facebook.com' className='hover:underline'>Facebook</Link>
              <Link to='https://twitter.com' className='hover:underline'>Twitter</Link>
              <Link to='https://instagram.com' className='hover:underline'>Instagram</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4'>
        <p>&copy; { currentYear } Pet Adoption. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
