import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = formState.email.trim()

    if (email !== email.toLowerCase()) return alert('Use lowercase email')
    if (!email.endsWith('@gmail.com')) return alert('Only Gmail allowed')

    const gmailRegex = /^[a-z0-9._%+-]+@gmail\.com$/
    if (!gmailRegex.test(email)) return alert('Invalid email')

    const blocked = ['test', 'fake', 'example', 'abc', '123']
    if (blocked.some((w) => email.includes(w))) return alert('Use real email')

    setLoading(true)

    emailjs
      .send(
        'service_ydp1i9p',
        'template_52omyeb',
        {
          from_name: formState.name,
          from_email: email,
          message: formState.message,
        },
        'RT8kWWEZN5j-vqNc0'
      )
      .then(() => {
        setIsSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        setLoading(false)
        setTimeout(() => setIsSubmitted(false), 3000)
      })
      .catch(() => {
        alert('Failed ❌')
        setLoading(false)
      })
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Let’s connect — I’ll respond quickly 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="space-y-4">

            {[
              { icon: <Mail size={16} />, text: "Email", link: "mailto:sameer.tech953@gmail.com" },
              { icon: <Linkedin size={16} />, text: "LinkedIn", link: "https://www.linkedin.com/in/sameer-s-653b7b265/" },
              { icon: <Github size={16} />, text: "GitHub", link: "https://github.com/sameer-tech1240" },
              { icon: <MessageCircle size={16} />, text: "WhatsApp", link: "https://wa.me/918828456078?text=Hi%20Sameer,%20I%20visited%20your%20portfolio%20and%20want%20to%20connect." },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="
                  group flex justify-between items-center p-4 rounded-xl

                  border border-gray-300
                  dark:border-gray-600

                  bg-white dark:bg-black

                  hover:border-red-500
                  dark:hover:border-red-500

                  transition-all duration-300
                "
              >
                <div className="flex gap-3 items-center">
                  {item.icon}
                  <span className="text-black dark:text-white group-hover:text-red-500 transition">
                    {item.text}
                  </span>
                </div>
                <ArrowUpRight className="group-hover:text-red-500 transition" size={16} />
              </a>
            ))}

          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="
                  w-full px-3 py-2 rounded-lg

                  border border-gray-300
                  dark:border-gray-600

                  bg-white dark:bg-black

                  text-black dark:text-white

                  focus:border-red-500
                  dark:focus:border-red-500

                  outline-none transition
                "
                required
              />

              <input
                type="email"
                placeholder="your@email.com"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="
                  w-full px-3 py-2 rounded-lg

                  border border-gray-300
                  dark:border-gray-600

                  bg-white dark:bg-black

                  text-black dark:text-white

                  focus:border-red-500
                  dark:focus:border-red-500

                  outline-none transition
                "
                required
              />

              <textarea
                rows={4}
                placeholder="Your message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="
                  w-full px-3 py-2 rounded-lg

                  border border-gray-300
                  dark:border-gray-600

                  bg-white dark:bg-black

                  text-black dark:text-white

                  focus:border-red-500
                  dark:focus:border-red-500

                  outline-none transition
                "
                required
              />

              <button
                type="submit"
                disabled={loading || isSubmitted}
                className="
                  w-full py-2.5 rounded-lg

                  border border-gray-300
                  dark:border-gray-600

                  text-black dark:text-white

                  hover:border-red-500
                  dark:hover:border-red-500

                  hover:text-red-500
                  dark:hover:text-red-500

                  transition-all duration-300

                  flex items-center justify-center gap-2
                "
              >
                {loading ? 'Sending...' : isSubmitted ? (
                  <>
                    <CheckCircle size={16} /> Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message 🚀
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
} 