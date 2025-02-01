import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from "lucide-react"

const faqitems = [
  {
    question: "What are the requirements for adopting a dog?",
    answer:
      "Requirements typically include being at least 18 years old, providing proof of residence, and in some cases, a home check. We also consider your lifestyle and living situation to ensure a good match with the dog you're interested in.",
  },
  {
    question: "How much does it cost to adopt a dog?",
    answer:
      "Adoption fees vary depending on the dog's age, breed, and medical needs. Generally, fees range from $50 to $300. This fee covers vaccinations, spaying/neutering, and initial health checks.",
  },
  {
    question: "Can I adopt if I live in an apartment?",
    answer:
      "Yes, many dogs can thrive in apartments. We'll work with you to find a dog that suits your living situation, considering factors like size, energy level, and noise tolerance.",
  },
  {
    question: "How long does the adoption process take?",
    answer:
      "The process typically takes 1-2 weeks, including application review, meet-and-greet sessions, and home checks if required. We strive to make the process as smooth and quick as possible.",
  },
  {
    question: "What if the adoption doesn't work out?",
    answer:
      "We have a 2-week trial period. If you find that the dog isn't a good fit for your home, you can return them and we'll refund the adoption fee. Our goal is to ensure happy, lasting matches.",
  },
]

const FAQ = () => {

  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section className='bg-amber-50 py-12 sm:py-16 lg:py-20'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className='mt-4 text-xl text-gray-600'>Find answers to common questions about dog adoption</p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqitems.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="flex w-full items-center justify-between py-4 text-left"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {item.question}
                </span>

                {openItem === index ? (
                  <ChevronUp className="h-6 w-6 text-amber-600" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-amber-600" />
                )}
              </button>

              {openItem === index && (
                <div className="pb-4 pr-4 text-justify">
                  <p className='text-base text-gray-700'>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
