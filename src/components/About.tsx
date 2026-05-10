import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, Server } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-24 bg-white dark:bg-black" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Backend-focused developer building scalable systems using Java & Spring Boot.
            I focus on performance, clean architecture, and real-world problem solving.
          </p>
        </motion.div>

        {/* MAIN TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="space-y-5 mb-16"
        >
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I design backend systems that are clean, reliable, and easy to maintain.
            My work revolves around building REST APIs, handling business logic,
            and managing structured data flow.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I’ve built real-world backend systems like payment processing modules
            and account onboarding flows, handling validation, transaction states,
            and database consistency.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I don’t just write code — I focus on building systems that scale,
            perform well under load, and remain maintainable over time.
          </p>
        </motion.div>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="
            group p-6 rounded-xl

            border border-gray-300
            dark:border-gray-600

            bg-white dark:bg-black

            hover:border-red-500
            dark:hover:border-red-500

            hover:-translate-y-1
            hover:shadow-lg
            dark:hover:shadow-black/40

            transition-all duration-300
          ">
            <Code2 className="w-5 h-5 text-black dark:text-white mb-3 group-hover:text-red-500 transition" />
            <h3 className="font-semibold mb-2 text-black dark:text-white">
              API Development
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Building structured REST APIs with validation, error handling,
              and clean architecture patterns.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="
            group p-6 rounded-xl

            border border-gray-300
            dark:border-gray-600

            bg-white dark:bg-black

            hover:border-red-500
            dark:hover:border-red-500

            hover:-translate-y-1
            hover:shadow-lg
            dark:hover:shadow-black/40

            transition-all duration-300
          ">
            <Database className="w-5 h-5 text-black dark:text-white mb-3 group-hover:text-red-500 transition" />
            <h3 className="font-semibold mb-2 text-black dark:text-white">
              Data Handling
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Managing relational data using JPA/Hibernate with optimized queries
              and consistency-focused design.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="
            group p-6 rounded-xl

            border border-gray-300
            dark:border-gray-600

            bg-white dark:bg-black

            hover:border-red-500
            dark:hover:border-red-500

            hover:-translate-y-1
            hover:shadow-lg
            dark:hover:shadow-black/40

            transition-all duration-300
          ">
            <Server className="w-5 h-5 text-black dark:text-white mb-3 group-hover:text-red-500 transition" />
            <h3 className="font-semibold mb-2 text-black dark:text-white">
              System Design
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Thinking in systems — scalability, performance, and maintainability
              are always part of the design.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}