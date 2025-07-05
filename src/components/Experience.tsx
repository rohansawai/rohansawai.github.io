'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, GraduationCap, Laptop } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Citi Bank',
      location: 'Pune, India',
      period: 'July 2023 - January 2025',
      icon: Briefcase,
      description: [
        'Developed and maintained production code for Citivelocity applications using Spring framework for backend and React framework for frontend',
        'Worked on Research Data Catalogue and Commodities Pulsar teams',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented new features and improvements based on business requirements',
        'Participated in code reviews and contributed to team best practices'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'Center for Geospatial Information Technology (CGIT), Virginia Tech',
      location: 'Blacksburg, Virginia',
      period: 'January 2023 - June 2023',
      icon: GraduationCap,
      description: [
        'Conducted research on geospatial data analysis and machine learning applications for environmental monitoring',
        'Developed algorithms for processing and analyzing large-scale geospatial datasets using Python and GIS tools',
        'Collaborated with faculty and graduate students on research projects involving remote sensing and spatial analysis',
        'Implemented machine learning models for land use classification and environmental change detection',
        'Presented research findings at departmental seminars and contributed to academic publications'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Interact Software',
      location: 'Remote',
      period: 'May 2022 - August 2022',
      icon: Laptop,
      description: [
        'Developed and maintained web applications using modern JavaScript frameworks and cloud technologies',
        'Collaborated with senior developers to implement new features and improve existing functionality',
        'Participated in agile development processes including sprint planning, code reviews, and daily standups',
        'Worked on database design and optimization for improved application performance',
        'Gained hands-on experience with full-stack development and software engineering best practices'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20" style={{ backgroundColor: '#0a192f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#ccd6f6' }}>Work Experience</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8892b0' }}>
            My professional journey in software development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg shadow-lg p-8"
              style={{ backgroundColor: '#112240' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#233554' }}>
                    <exp.icon className="w-8 h-8 flex-shrink-0 object-contain" style={{ color: '#64ffda', display: 'block' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#ccd6f6' }}>{exp.title}</h3>
                    <div className="flex items-center space-x-4" style={{ color: '#8892b0' }}>
                      <span>{exp.company}</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: '#64ffda' }} />
                        <span>{exp.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-5 h-5 flex-shrink-0" style={{ color: '#64ffda' }} />
                        <span>{exp.period}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <span className="mt-1" style={{ color: '#64ffda' }}>•</span>
                    <span style={{ color: '#8892b0' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 