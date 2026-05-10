import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    id: "01",
    category: "FINTECH",
    title: "Payment Processing System",
    challenge:
      "Building a reliable payment flow required handling multiple transaction states while ensuring data consistency, validation, and failure recovery in real-time scenarios.",
    approach:
      "Designed a structured backend system using REST APIs with layered validation, ensuring smooth transaction lifecycle handling and robust error management.",
    highlights: [
      "Payment initiation and transaction tracking APIs",
      "Robust validation and exception handling mechanisms",
      "Managed transaction states (Success, Failed, Pending)",
      "Consistent database operations with ACID principles",
      "API testing and debugging using Postman",
      "Clean layered backend architecture",
    ],
    tech: ["Java 8", "Spring Boot", "REST API", "MySQL", "Hibernate", "Maven"],
    contribution:
      "Built core APIs, handled validation logic, managed transaction flows, and ensured reliable data persistence.",
  },
  {
    id: "02",
    category: "BANKING",
    title: "Digital Account Opening System",
    challenge:
      "Traditional onboarding processes lacked validation and automation, making it difficult to ensure accurate customer data.",
    approach:
      "Developed a backend-driven onboarding system with validation workflows ensuring smooth account creation.",
    highlights: [
      "Customer registration APIs",
      "Input validation flow",
      "Account approval lifecycle",
      "Hibernate integration",
      "Postman testing",
      "Spring Boot backend",
    ],
    tech: ["Java 8", "Spring Boot", "REST API", "MySQL", "Hibernate", "Maven"],
    contribution:
      "Developed onboarding APIs, validation logic, and ensured reliable account flow.",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Backend systems built around real-world workflows.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Scalable APIs, structured data, and production-ready backend systems.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="
                group grid md:grid-cols-2 gap-10 p-8 rounded-2xl

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

              {/* LEFT */}
              <div>
                <p className="text-xs text-red-500 font-mono mb-2">
                  {project.id} {project.category}
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white group-hover:text-red-500 transition">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1 text-xs rounded-md

                        border border-gray-300
                        dark:border-gray-700

                        bg-gray-100 text-gray-700
                        dark:bg-gray-900 dark:text-gray-300

                        hover:border-red-500 hover:text-red-500
                        transition
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-red-500 mb-1">CHALLENGE</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-red-500 mb-1">APPROACH</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.approach}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-red-500 mb-2">HIGHLIGHTS</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                    {project.highlights.map((f, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-red-500">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs text-red-500 mb-1">MY ROLE</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.contribution}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}