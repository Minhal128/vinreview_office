"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alice Williams",
    role: "Car Buyer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    content:
      "I recently bought a used car and was worried about its history. Vinreview provided a detailed VIN verification report, and I was able to confirm that the car had no prior accidents or issues. The process was quick, easy, and incredibly reassuring.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Bean",
    role: "Car Dealer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    content:
      "As a small dealership owner, I rely on Vinreview to verify the authenticity and condition of the cars I sell. Their reports are thorough, and the ability to access detailed history instantly saves me time and helps me make informed decisions.",
    rating: 5,
  },
  {
    id: 3,
    name: "Felica Queen",
    role: "Auto Enthusiast",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    content:
      "I've been in the automotive industry for years, and I've never come across a service as reliable as Vinreview. The VIN verification tool is easy to use, and I trust the data I receive. Whether I'm buying or selling, I always turn to Vinreview.",
    rating: 4,
  },
]

export default function ServiceTestimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Testimonials</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">See what our customers have to say about our vehicle history reports.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>

                <p className="text-gray-700">"{testimonial.content}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

