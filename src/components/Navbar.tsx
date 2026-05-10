import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#deliver', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass py-3' 
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
         SS
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors group"
                >
                  <span className={`${isActive ? 'text-foreground' : 'text-muted-foreground'} group-hover:text-foreground transition-colors`}>
                    {link.label}
                  </span>
                  {/* Active underline */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '60%' : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-primary/50 rounded-full group-hover:w-[60%] transition-all duration-200" />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all text-foreground"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </motion.div>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass mt-2 mx-6 rounded-lg p-4"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-foreground bg-secondary' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
