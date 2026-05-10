import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { ArrowDown, Github, Linkedin, Mail, FileText, Download } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      
      {/* Subtle background */}
      <div className="absolute inset-0 bg-background" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-3"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight leading-tight"
            >
              Sameer Siddiqui
            </motion.h1>

            {/* Experience Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  Java Backend Developer
                </span>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-snug">
                Building backend systems that{' '}
                <span className="gradient-text">actually run in production.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base text-muted-foreground mb-4 h-8"
            >
              <Typewriter
                options={{
                  strings: [
                    'Designing scalable microservices',
                    'Crafting clean architecture',
                    'Building robust APIs',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 50,
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground max-w-md mb-8 leading-relaxed"
            >
              Passionate fresher with strong foundations in Java, Spring Boot, and
              distributed systems. Ready to build the next generation of backend infrastructure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-5"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all text-sm"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-secondary/50 hover:border-primary/30 transition-all text-sm text-foreground"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Resume Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a
                href="/Sameer_Siddiqui_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 bg-primary/5 hover:bg-primary/10 hover:border-primary/60 transition-all text-sm font-medium text-foreground"
              >
                <FileText size={15} className="text-primary" />
                View Resume
              </a>

              <a
                href="/Sameer_Siddiqui_Resume.pdf"
                download="Sameer_Siddiqui_Resume.pdf"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Download size={15} className="group-hover:text-primary transition-colors" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-2">
              <a href="https://github.com/sameer-tech1240" target="_blank"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/sameer-s-653b7b265/" target="_blank"><Linkedin size={18} /></a>
              <a href="mailto:sameer.tech953@gmail.com"><Mail size={18} /></a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image (FIXED) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 blur-3xl scale-110" />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="relative w-52 md:w-64 lg:w-72 rounded-2xl overflow-hidden border border-border">
                  <img
                    src="/profiles.png"
                    alt="Sameer Siddiqui"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <ArrowDown size={18} />
        </motion.div>

      </div>
    </section>
  )
}