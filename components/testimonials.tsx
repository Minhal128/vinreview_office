const testimonials = [
  {
    id: 1,
    name: "Alice Williams",
    role: "Auto Dealer",
    image: "/images/team/01.jpg",
    content:
      "I recently bought a used car and was worried about its history. Vinreview provided a detailed VIN verification report, and I was able to confirm that the car had no prior accidents or issues. The process was quick, easy, and incredibly reassuring. I feel much more confident in my purchase now!",
    background: "/images/testimonial/01.jpg",
  },
  {
    id: 2,
    name: "Michael Bean",
    role: "Car Dealer",
    image: "/images/team/02.jpg",
    content:
      "As a small dealership owner, I rely on Vinreview to verify the authenticity and condition of the cars I sell. Their reports are thorough, and the ability to access detailed history instantly saves me time and helps me make informed decisions. It's an invaluable tool for my business.",
    background: "/images/testimonial/02.jpg",
  },
  {
    id: 3,
    name: "Felica Queen",
    role: "Auto Dealer",
    image: "/images/team/03.jpg",
    content:
      "I've been in the automotive industry for years, and I've never come across a service as reliable as Vinreview. The VIN verification tool is easy to use, and I trust the data I receive. Whether I'm buying or selling, I always turn to CarInsights to ensure the vehicle's background checks out.",
    background: "/images/testimonial/03.jpg",
  },
]

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="h-48 overflow-hidden">
            <img
              src={testimonial.background || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-gray-50 p-6 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-white"
              />
            </div>

            <div className="text-center mt-12">
              <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm mb-4">{testimonial.role}</p>

              <p className="text-gray-600 italic relative">
                {testimonial.content}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600 absolute -bottom-8 right-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

