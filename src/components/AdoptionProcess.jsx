import React from 'react'
import { CheckCircle, PawPrint, Calendar, Heart, Home } from "lucide-react"

const steps = [
  {
    title: "Browse Available Dogs",
    description: "Look through our list of adorable dogs waiting for their forever homes.",
    icon: PawPrint,
  },
  {
    title: "Submit Application",
    description: "Fill out our adoption application form with your details and preferences.",
    icon: CheckCircle,
  },
  {
    title: "Schedule a Meet & Greet",
    description: "Set up a time to meet your potential new furry friend in person.",
    icon: Calendar,
  },
  {
    title: "Adoption Approval",
    description: "Once approved, complete the adoption process and welcome your new family member.",
    icon: Heart,
  },
  {
    title: "Take Your Dog Home",
    description: "Bring your new best friend to their forever home and start your journey together.",
    icon: Home,
  },
]

function AdoptionProcess() {
  return (
    <section className="bg-amber-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Adoption Process
          </h2>
          <p className='mt-4 text-xl text-gray-600'>Follow these simple steps to bring home your new best friend</p>
        </div>

        {/* Process */}

        <div className='mt-12'>
          <div className='lg:grid lg:grid-cols-5 lg:gap=8'>
            {steps.map((step, index) => (
              <div key={step.title} className="mt-10 lg:mt-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <step.icon className='h-8 w-8' aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    {step.description}
                  </p>
                </div>
                {index > step.length - 1 && (
                  <div className="hidden lg:block lg:h-0.5 lg:w-full lg:bg-gray-200 lg:mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/adopts"
            className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'
          >
            Start Adoption Process
          </a>
        </div>
      </div>
    </section>
  )
}

export default AdoptionProcess
