import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const experienceData = [
  {
    title: "Backend Development Focus",
    description:
      "Focused on building scalable backend systems using Java and Spring Boot. Worked on designing APIs, handling business logic, and structuring applications for maintainability.",
    points: [
      "Designed REST APIs with proper validation",
      "Implemented layered architecture",
      "Handled exception management and error handling",
    ],
  },
  {
    title: "System Design & Architecture",
    description:
      "Developed understanding of scalable system design and backend architecture patterns.",
    points: [
      "Microservices fundamentals",
      "Database schema design",
      "Performance optimization techniques",
    ],
  },
  {
    title: "Real-world Projects",
    description:
      "Built backend applications simulating real production systems with proper workflows and state management.",
    points: [
      "Payment Processing System",
      "Digital Account Opening System",
      "Transaction lifecycle handling",
    ],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            What I’ve Been Working On
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Focused on backend development, system design, and building practical
            applications that simulate real-world scenarios.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border rounded-xl p-6 hover:border-primary/40 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-1.5">
                {item.points.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}