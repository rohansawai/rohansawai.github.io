'use client'

import { motion } from 'framer-motion'
import { FaUniversity, FaGraduationCap, FaLaptopCode, FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Citi Bank',
      location: 'Pune, India',
      period: 'July 2023 - January 2025',
      icon: FaUniversity,
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
      icon: FaGraduationCap,
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
      icon: FaLaptopCode,
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

        {/* True Alternating Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-[#233554] opacity-60 -translate-x-1/2 z-0" />
          <div className="flex flex-col gap-16 z-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="grid grid-cols-9 items-center w-full">
                  {/* Left card */}
                  <div className={`col-span-4 ${isLeft ? '' : 'hidden md:block'}`}>
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#112240] rounded-lg shadow-lg p-6"
                      >
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-2xl font-bold" style={{ color: '#ccd6f6' }}>{exp.title}</h3>
                          <span className="text-base font-semibold" style={{ color: '#8892b0' }}>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm mb-2" style={{ color: '#8892b0' }}>
                          <span className="flex items-center space-x-1">
                            <FaMapMarkerAlt style={{ color: '#64ffda', width: 18, height: 18 }} />
                            <span>{exp.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <FaRegCalendarAlt style={{ color: '#64ffda', width: 18, height: 18 }} />
                            <span>{exp.period}</span>
                          </span>
                        </div>
                        <ul className="space-y-2 mt-2">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <span className="mt-1" style={{ color: '#64ffda' }}>•</span>
                              <span style={{ color: '#8892b0' }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                  {/* Timeline node */}
                  <div className="col-start-5 col-span-1 flex flex-col items-center z-10">
                    <div className="z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 border-[#0a192f] bg-[#64ffda] shadow-lg">
                      {exp.icon && <exp.icon size={24} color="#0a192f" />}
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="h-full w-1 bg-[#233554] opacity-60" style={{ minHeight: 40 }} />
                    )}
                  </div>
                  {/* Right card */}
                  <div className={`col-start-6 col-span-4 ${isLeft ? 'hidden md:block' : ''}`}>
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#112240] rounded-lg shadow-lg p-6"
                      >
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-2xl font-bold" style={{ color: '#ccd6f6' }}>{exp.title}</h3>
                          <span className="text-base font-semibold" style={{ color: '#8892b0' }}>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm mb-2" style={{ color: '#8892b0' }}>
                          <span className="flex items-center space-x-1">
                            <FaMapMarkerAlt style={{ color: '#64ffda', width: 18, height: 18 }} />
                            <span>{exp.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <FaRegCalendarAlt style={{ color: '#64ffda', width: 18, height: 18 }} />
                            <span>{exp.period}</span>
                          </span>
                        </div>
                        <ul className="space-y-2 mt-2">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <span className="mt-1" style={{ color: '#64ffda' }}>•</span>
                              <span style={{ color: '#8892b0' }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                  {/* Mobile: always show card below node */}
                  <div className="col-span-9 md:hidden mt-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-[#112240] rounded-lg shadow-lg p-6"
                    >
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-2xl font-bold" style={{ color: '#ccd6f6' }}>{exp.title}</h3>
                        <span className="text-base font-semibold" style={{ color: '#8892b0' }}>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm mb-2" style={{ color: '#8892b0' }}>
                        <span className="flex items-center space-x-1">
                          <FaMapMarkerAlt style={{ color: '#64ffda', width: 18, height: 18 }} />
                          <span>{exp.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <FaRegCalendarAlt style={{ color: '#64ffda', width: 18, height: 18 }} />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                      <ul className="space-y-2 mt-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <span className="mt-1" style={{ color: '#64ffda' }}>•</span>
                            <span style={{ color: '#8892b0' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 