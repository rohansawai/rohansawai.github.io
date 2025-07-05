'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rohan.sawai@example.com',
      href: 'mailto:rohan.sawai@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rohansawai',
      href: 'https://linkedin.com/in/rohansawai'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@rohansawai',
      href: 'https://twitter.com/rohansawai'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/rohansawai',
      href: 'https://github.com/rohansawai'
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#ccd6f6' }}>Get In Touch</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8892b0' }}>
            I&apos;m always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-opacity-10 bg-white rounded-lg p-6 border border-opacity-20 border-white hover:border-opacity-40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <contact.icon 
                    size={24} 
                    style={{ color: '#64ffda' }} 
                    className="mr-3"
                  />
                  <h3 className="text-lg font-semibold" style={{ color: '#ccd6f6' }}>
                    {contact.label}
                  </h3>
                </div>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-lg hover:text-blue-400 transition-colors duration-300"
                    style={{ color: '#8892b0' }}
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-lg" style={{ color: '#8892b0' }}>
                    {contact.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 