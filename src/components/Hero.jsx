import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="bg-cover bg-center h-screen text-white">
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Pet Adoption</h1>
        <p className="text-lg md:text-2xl mb-8">Find your new best friend today</p>
        <Link to="/adopt" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Adopting</Link>
      </div>
    </div>
  )
}

export default Hero
