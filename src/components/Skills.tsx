import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const sections = [
  {
    title: "Backend",
    desc: "Designing and building scalable backend services and APIs.",
    content: [
      {
        heading: "Core Stack",
        items: ["Java", "Spring Boot", "Spring MVC", "REST APIs"],
      },
      {
        heading: "Architecture",
        items: ["Microservices", "Layered Design", "API Structuring"],
      },
    ],
  },
  {
    title: "Security & Access",
    desc: "Handling authentication, authorization, and endpoint protection.",
    content: [
      {
        heading: "Auth Systems",
        items: ["Spring Security", "JWT", "OAuth2"],
      },
      {
        heading: "Access Control",
        items: ["RBAC", "Role-based Access", "Validation"],
      },
    ],
  },
  {
    title: "Data & Persistence",
    desc: "Managing data flow, storage, and optimization strategies.",
    content: [
      {
        heading: "Databases",
        items: ["MySQL", "PostgreSQL", "MongoDB"],
      },
      {
        heading: "ORM Layer",
        items: ["Hibernate", "JPA", "Query Optimization"],
      },
    ],
  },
  {
    title: "DevOps & Workflow",
    desc: "Deployment pipelines and development tooling.",
    content: [
      {
        heading: "Deployment",
        items: ["Docker", "AWS", "CI/CD"],
      },
      {
        heading: "Tools",
        items: ["Git", "Postman", "Linux", "Maven"],
      },
    ],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-28 bg-white dark:bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Technical Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Focused backend skills with real-world experience in APIs,
            system design, and production-ready development.
          </p>
        </motion.div>

        {/* LIST */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="
                group p-6 rounded-xl

                border border-gray-300
                dark:border-gray-700

                bg-white
                dark:bg-[#0a0a0a]

                transition-all duration-300

                hover:border-red-500
                hover:shadow-md
                dark:hover:border-red-500
              "
            >

              <div className="grid md:grid-cols-12 gap-6">

                {/* LEFT */}
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white group-hover:text-red-500 transition">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {section.desc}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="md:col-span-8 space-y-5">
                  {section.content.map((block) => (
                    <div key={block.heading}>
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                        {block.heading}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {block.items.map((item) => (
                          <span
                            key={item}
                            className="
                              px-3 py-1.5 text-xs rounded-full

                              border border-gray-300
                              dark:border-gray-700

                              bg-gray-100 text-gray-700
                              dark:bg-gray-900 dark:text-gray-300

                              transition-all duration-200

                              hover:border-red-500
                              hover:text-red-500
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}