"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What information is included in a vehicle history report?",
    answer:
      "Our vehicle history reports include ownership history, title information, accident records, odometer readings, service records, recall information, and more. The specific information varies by package.",
  },
  {
    question: "How accurate is the information in your reports?",
    answer:
      "We source our data from reliable databases including state DMVs, insurance companies, auto auctions, and service facilities. While we strive for 99.9% accuracy, we recommend using our reports as one tool in your decision-making process.",
  },
  {
    question: "How long does it take to get a report?",
    answer:
      "Reports are generated instantly after purchase. You'll be able to view your report online immediately, and you can also download a PDF version for your records.",
  },
  {
    question: "Can I use your reports for vehicles outside the United States?",
    answer:
      "Currently, our comprehensive reports are only available for vehicles registered in the United States and Canada. We're working on expanding our coverage to other countries.",
  },
  {
    question: "What if I find inaccurate information in my report?",
    answer:
      "If you believe there's an error in your report, please contact our customer support team. We'll investigate the issue and make corrections if necessary.",
  },
  {
    question: "How long can I access my report after purchase?",
    answer:
      "You'll have unlimited access to your report for 30 days after purchase. You can view it online or download a PDF copy during this period.",
  },
]

export default function ServiceFAQ() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Find answers to common questions about our vehicle history reports.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

