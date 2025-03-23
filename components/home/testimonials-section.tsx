"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alice Williams",
    role: "Car Buyer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    content:
      "I recently bought a used car and was worried about its history. Vinreview provided a detailed VIN verification report, and I was able to confirm that the car had no prior accidents or issues. The process was quick, easy, and incredibly reassuring. I feel much more confident in my purchase now!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Bean",
    role: "Car Dealer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    content:
      "As a small dealership owner, I rely on Vinreview to verify the authenticity and condition of the cars I sell. Their reports are thorough, and the ability to access detailed history instantly saves me time and helps me make informed decisions. It's an invaluable tool for my business.",
    rating: 5,
  },
  {
    id: 3,
    name: "Felica Queen",
    role: "Auto Enthusiast",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    content:
      "I've been in the automotive industry for years, and I've never come across a service as reliable as Vinreview. The VIN verification tool is easy to use, and I trust the data I receive. Whether I'm buying or selling, I always turn to Vinreview to ensure the vehicle's background checks out.",
    rating: 4,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "First-time Buyer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    content:
      "As a first-time car buyer, I was nervous about getting scammed. Vinreview gave me the confidence to make my purchase. The report showed me everything I needed to know about the vehicle's history, and I was able to negotiate a better price based on the information provided.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Hear from our satisfied customers about their experience with our vehicle history reports.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                initial={false}
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 rounded-2xl p-8 relative">
                      <Quote className="absolute top-6 right-6 h-12 w-12 text-gray-200" />

                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>

                      <p className="text-gray-700 italic relative z-10">"{testimonial.content}"</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${activeIndex === index ? "bg-primary-600" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

