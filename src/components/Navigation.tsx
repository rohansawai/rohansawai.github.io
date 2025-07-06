'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navHeight = 80;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50"
      style={{
        height: navHeight,
        background: 'rgba(10, 25, 47, 0.95)',
        borderBottom: '1px solid #233554',
        boxShadow: '0 2px 8px 0 rgba(2,12,27,0.7)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" style={{ height: navHeight }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#64ffda' }}>
            <span className="font-bold text-lg" style={{ color: '#0a192f' }}>RS</span>
          </div>
          <span className="text-xl font-bold" style={{ color: '#ccd6f6' }}>Rohan Sawai</span>
        </motion.div>

        {/* Desktop Navigation - always visible on >=sm screens */}
        <div className="hidden sm:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.href)}
              className="font-medium transition-colors"
              style={{ color: '#8892b0', fontSize: 16, letterSpacing: '0.03em' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#64ffda'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#8892b0'}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Mobile menu button - only visible on <sm screens */}
        <div className="sm:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: '#8892b0' }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#64ffda'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#8892b0'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation - only visible on <sm screens when open */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden"
          style={{ backgroundColor: '#0a192f', borderTop: '1px solid #233554', paddingBottom: 16 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 rounded-md transition-colors"
                style={{ color: '#8892b0' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement
                  target.style.color = '#64ffda'
                  target.style.backgroundColor = '#112240'
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement
                  target.style.color = '#8892b0'
                  target.style.backgroundColor = 'transparent'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation 