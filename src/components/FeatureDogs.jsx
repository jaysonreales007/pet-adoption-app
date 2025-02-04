import React from 'react'
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion'

const featuredDogs = [
  { id: "1", name: "Max", breed: "Labrador", age: "3 years", imageUrl: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww" },
  { id: "2", name: "Bella", breed: "German Shepherd", age: "2 years", imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: "3", name: "Charlie", breed: "Golden Retriever", age: "4 years", imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww" },
  { id: "4", name: "Lucy", breed: "Beagle", age: "1 year", imageUrl: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y:0, transition: { duration: 0.5 } }
}

function FeatureDogs() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
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

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredDogs.map((dog) => (
            <motion.div
              key={dog.id}
              variants={itemVariants}
            >
              <div className="group relative">
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
            </motion.div>
          ))}
        </motion.div>

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
