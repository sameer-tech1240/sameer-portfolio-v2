import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <p className="text-foreground font-medium text-lg">
            Sameer Siddiqui
          </p>
          
          <p className="text-primary text-sm font-mono">
            Java Backend Developer
          </p>

          <p className="text-muted-foreground text-sm mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
