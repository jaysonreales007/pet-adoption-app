import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="bg-amber-50">
      <div className="container mt-24 mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="max-w-xl text-left mt-28 md:mt-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Find Your Furry <p className="text-amber-600">Best Friend</p>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Give a loving home to a dog in need. Our adoption process is easy, and the love you'll receive is
              priceless.
            </p>

            <div className="mt-8">
              <Link
                to="/adopt"
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'
              >
                Adopt a Dog Now
              </Link>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-start-1">
            <div className="aspect-w-5 aspect-h-6 sm:aspect-w-3 sm:aspect-h-4">
              <img
                src="/images/image-10.jpg"
                className="object-cover rounded-lg shadow-lg"
                alt="A dogs looking at the camera"
                width={640}
                height={640}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
