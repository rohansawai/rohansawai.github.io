'use client'

import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { FaRegFileAlt } from 'react-icons/fa'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0a192f', padding: '60px 0 10px 0' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* Subtitle */}
          <div className="mb-2">
            <span className="uppercase tracking-widest text-sm font-mono" style={{ color: '#64ffda', letterSpacing: '0.1em' }}>
              Machine Learning Researcher & Software Engineer
            </span>
          </div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold" style={{ color: '#ccd6f6', lineHeight: 1.1 }}>
              Hi, I&apos;m <span style={{ color: '#64ffda' }}>Rohan Sawai</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto" style={{ color: '#8892b0' }}>
              I work on geospatial tools, Language Model inference and scalable systems.<br /><br />
              When I’m not coding, you’ll find me on the soccer field, at the gym, or grinding LeetCode.
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl max-w-2xl mx-auto" style={{ color: '#8892b0' }}>
              I will be in the job market in 2026 for internship/full-time opportunities in ML Inference, Software and Applied ML. If you want to chat about research, code, working out, or even soccer, let’s connect!
            </p>
          </motion.div>


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center mb-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors shadow-lg text-base mr-4"
              style={{ 
                backgroundColor: 'transparent',
                color: '#64ffda',
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.backgroundColor = 'transparent'
              }}
              onClick={scrollToContact}
            >
              <MdEmail size={16} />
              <span>Contact Me</span>
            </motion.button>
            {/* Vertical Divider */}
            <div className="hidden sm:block h-8 w-px mx-2" style={{ backgroundColor: '#64ffda', opacity: 0.9 }} />
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors shadow-lg text-base ml-4"
              style={{ 
                backgroundColor: 'transparent',
                color: '#64ffda',
              }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFileAlt size={16} />
              <span>Show CV</span>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero 