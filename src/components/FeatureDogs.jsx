import React from 'react'
import { Link } from 'react-router-dom';

const featuredDogs = [
  { id: "1", name: "Max", breed: "Labrador", age: "3 years", imageUrl: "/images/image-3.jpg" },
  { id: "2", name: "Bella", breed: "German Shepherd", age: "2 years", imageUrl: "/images/image-4.jpg" },
  { id: "3", name: "Charlie", breed: "Golden Retriever", age: "4 years", imageUrl: "/images/image-2.jpg" },
  { id: "4", name: "Lucy", breed: "Beagle", age: "1 year", imageUrl: "/images/image-8.jpg" },
];

function FeatureDogs() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Adorable Dogs
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            These furry friends are waiting for their forever homes
          </p>
        </div>

        {/* Feature Grid */}

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDogs.map((dog) => (
            <div key={dog.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={dog.imageUrl || "/placeholder.svg"}
                  alt={dog.name}
                  height={300}
                  width={300}
                  className='object-cover object-center group-hover:opacity-75 transition-opacity duration-300'
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div className='text-left'>
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link to={`/dogs/${dog.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {dog.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {dog.breed}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">{dog.age}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/dogs"
            className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'
          >
            View All Dogs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeatureDogs
