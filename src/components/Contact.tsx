'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rohan.sawai@example.com',
      href: 'mailto:rohan.sawai@example.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      href: null
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 (XXX) XXX-XXXX',
      href: 'tel:+91XXXXXXXXXX'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rohansawai',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rohansawai',
      color: 'hover:text-gray-300'
    }
  ]

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#0a192f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#ccd6f6' }}>Get In Touch</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8892b0' }}>
            I&apos;m always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#ccd6f6' }}>Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#64ffda' }}>
                    <info.icon className="w-6 h-6" style={{ color: '#0a192f' }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: '#8892b0' }}>{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="transition-colors"
                        style={{ color: '#ccd6f6' }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#64ffda'}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#ccd6f6'}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p style={{ color: '#ccd6f6' }}>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#ccd6f6' }}>Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md transition-colors"
                    style={{ backgroundColor: '#112240', color: '#8892b0' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#64ffda'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#8892b0'}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg shadow-lg p-8"
            style={{ backgroundColor: '#112240' }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#ccd6f6' }}>Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#8892b0' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ 
                    backgroundColor: '#233554',
                    border: '1px solid #233554',
                    color: '#ccd6f6'
                  }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#8892b0' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ 
                    backgroundColor: '#233554',
                    border: '1px solid #233554',
                    color: '#ccd6f6'
                  }}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#8892b0' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ 
                    backgroundColor: '#233554',
                    border: '1px solid #233554',
                    color: '#ccd6f6'
                  }}
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-medium transition-colors"
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
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 