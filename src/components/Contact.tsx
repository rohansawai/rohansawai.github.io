'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const contactInfo = [
  {
    icon: MdEmail,
    label: 'Email',
    value: 'sawairohan90@vt.edu',
    href: 'mailto:sawairohan90@vt.edu'
  },
  {
    icon: MdPhone,
    label: 'Phone',
    value: '+1 (540) 824-9544',
    href: 'tel:+15408249544'
  },
  {
    icon: MdLocationOn,
    label: 'Location',
    value: 'Blacksburg, VA',
    href: null
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rohan-sawai-646155169',
    href: 'https://www.linkedin.com/in/rohan-sawai-646155169/'
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    value: '@rohan_sawai',
    href: 'https://x.com/rohan_sawai'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/rohansawai',
    href: 'https://github.com/rohansawai'
  }
]

export default function Contact() {
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
          <div className="flex justify-center w-full">
            <p
              className="text-xl max-w-3xl w-full text-center"
              style={{ color: '#8892b0' }}
            >
              I&apos;m always interested in hearing about new opportunities and exciting projects. <br />
              Feel free to reach out!
            </p>
          </div>
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
                  {React.createElement(contact.icon, {
                    color: '#64ffda',
                    style: { width: 45, height: 45, minWidth: 45, minHeight: 45, marginRight: 8, verticalAlign: 'middle' }
                  })}
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