import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'


function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <Hero/>
    </div>
  )
}

export default Home
