'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0a192f', padding: '100px 0' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="mx-auto w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: '#64ffda' }}
          >
            <span className="font-bold text-3xl" style={{ color: '#0a192f' }}>RS</span>
          </motion.div>

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
              I am passionate about advancing the field of machine learning and artificial intelligence through research and engineering. I enjoy building robust ML systems and exploring new ideas at the intersection of data, algorithms, and real-world impact.
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#8892b0' }}
          >
            Currently seeking research opportunities in ML/AI. Experienced in deep learning, NLP, and large-scale data systems. Open to collaborations and research assistantships.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg"
              style={{ 
                backgroundColor: 'transparent',
                color: '#64ffda',
                border: '1px solid #64ffda'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.backgroundColor = 'transparent'
              }}
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-colors border-2 shadow-lg"
              style={{ 
                backgroundColor: 'transparent',
                color: '#64ffda',
                borderColor: '#64ffda'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.backgroundColor = 'transparent'
              }}
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ color: '#8892b0' }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 