import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Adopting my dog from this platform was the best decision ever! The process was smooth and easy.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Sarah Lee",
    feedback: "Such a wonderful platform! I found my perfect companion and the adoption process was seamless.",
    image: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Michael Smith",
    feedback: "This website helped me find my furry best friend. Highly recommend to anyone looking to adopt!",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function Testimonials() {
  return (
    <section className='bg-gray-100 py-16'>
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className='text-4xl font-bold text-center text-gray-800 mb-10'>What Our Adopters Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className='bg-white p-6 rounded lg-shadow flex flex-col items-center text-center'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-20 h-20 rounded-full mb-4 object-cover'
              />
              <p className='text-gray-700 italic'>{testimonial.feedback}</p>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{testimonial.name}</h3>
            </motion.div>
          )) }
        </div>
      </div>
    </section>
  )
}

export default Testimonials
