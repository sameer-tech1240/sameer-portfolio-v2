import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const deliverItems = [
  {
    title: "Reliable Backend Systems",
    desc: "Stable, predictable backend services with strong validation and error handling.",
  },
  {
    title: "Clean & Maintainable Code",
    desc: "Readable, structured code using proper architecture and separation of concerns.",
  },
  {
    title: "Scalable API Design",
    desc: "APIs built to handle increasing load with optimized performance.",
  },
  {
    title: "Real-world Problem Solving",
    desc: "Solutions based on actual use-cases like payments and onboarding systems.",
  },
  {
    title: "Performance Optimization",
    desc: "Reduced latency with caching and efficient queries.",
  },
  {
    title: "Secure Development",
    desc: "Authentication, validation, and secure backend practices.",
  },
]

export function WhatIDeliver() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="deliver" className="py-24 bg-white dark:bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            What I Deliver
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Backend systems that are reliable, scalable, and production-ready.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {deliverItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="
                group p-6 rounded-xl

                border border-gray-300
                dark:border-gray-700

                bg-white
                dark:bg-[#0a0a0a]

                hover:border-red-500
                hover:shadow-md
                dark:hover:border-red-500

                transition-all duration-300
              "
            >
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white group-hover:text-red-500 transition">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}