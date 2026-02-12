import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiPaperAirplane } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Toast } from './Toast'

const SOCIAL = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Siddhantham-Naveen' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/naveen-siddhantham/' },
  { icon: HiMail, label: 'Email', href: 'mailto:snaveen6281@gmail.com' },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [toast, setToast] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setForm({ name: '', email: '', message: '' })
    setToast(true)
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-4"
        >
          Let's build together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-400 mb-8"
        >
          Get in touch for opportunities or collaboration.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:snaveen6281@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-white/20 text-slate-300 hover:text-white hover:border-indigo-400/40 transition-colors"
          >
            <HiMail className="text-lg" />
            snaveen6281@gmail.com
          </a>
          <span className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-white/10 text-slate-500">
            <HiPhone className="text-lg" />
            +91 9xxxxxxxxx
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-14 h-14 rounded-full glass-card border border-white/20 flex items-center justify-center text-2xl text-slate-400 hover:text-white hover:border-indigo-400/50 hover-lift transition-all"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-6 sm:p-8 text-left space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400/50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400/50 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400/50 transition-colors resize-none"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
          >
            <HiPaperAirplane />
            Send Message
          </button>
        </motion.form>
      </div>

      <Toast message="Message sent! I'll get back to you soon." visible={toast} onClose={() => setToast(false)} />
    </section>
  )
}
