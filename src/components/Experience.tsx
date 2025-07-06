'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaLaptopCode, FaMapMarkerAlt, FaRegCalendarAlt, FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    // Education
    {
      type: 'education',
      title: 'MS in Computer Engineering',
      company: 'Virginia Tech',
      location: 'Blacksburg, VA',
      period: 'Jan. 2025 – Present',
      startDate: '2025-01',
      icon: FaGraduationCap,
      description: [
        'GPA: 3.90/4.00',
        'While at Citi bank, I realized I wanted to go deeper into ML and LLMs, so I headed to Virginia Tech for my master’s.',
        'Now I’m focused on research in LLMs especially agentic workflows, vector DBs and memory component.',
        'Coursework: Advanced Machine Learning, Applications of Machine Learning, Compiler Optimizations',
      ]
    },
    {
      type: 'education',
      title: 'B.Tech in ECE',
      company: 'Veermata Jijabai Technological Institute (VJTI)',
      location: 'Mumbai, India',
      period: 'Aug. 2019 – Jun. 2023',
      startDate: '2019-08',
      icon: FaGraduationCap,
      description: [
        'During my undergrad at VJTI, I got deeply involved in side projects and hackathons—building everything from speech recognition systems to web apps. This hands-on work sparked my passion for ML and set me on the path to research and engineering.',
        'Graduated with distinction. Senior project: "Propoganda detection using BERT"',
        'Relevant coursework: Probability & Statistics, Digital Signal Processing, Machine Learning.'
      ]
    },
    // Work Experience
    {
      type: 'work',
      title: 'Software Developer',
      company: 'Center for Geospatial Information Technology, Virginia Tech',
      location: 'Blacksburg, VA',
      period: 'Feb. 2025 – Present',
      startDate: '2025-02',
      icon: FaLaptopCode,
      description: [
        'Part of my work at CGIT was to build AI tools that let police and city officials ask questions like "Show me severe crashes in Fairfax County in the last 2 weeks?” and see the results directly on interactive maps.',
        'I prompt-engineered LLMs to turn complex natural language queries into optimized multilevel SQL/PostGIS queries, then visualized the answers as map points, heatmaps, and spatial layers using GeoDjango and Leaflet.',
        'This work helped transform raw map data into actionable, location-based insights for public safety.'
      ]
    },
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'Citi Bank',
      location: 'Pune, India',
      period: 'July 2023 – Jan. 2025',
      startDate: '2023-07',
      icon: FaBriefcase,
      description: [
        'At Citi Bank, I wasn’t just writing code, I was collaborating with data scientists, experimenting with LLMs, and learning how to turn research into production systems.',
        'Integrated LLMs (OpenAI GPT-3/4) for automated financial report generation and natural language analytics, reducing analyst workload.',
        'Ensured production ML systems met enterprise security and compliance standards (JWT, SonarQube, Black Duck).' 
      ]
    },
    {
      type: 'work',
      title: 'Software Engineer Intern',
      company: 'InterAct Software',
      location: 'Mumbai, India',
      period: 'Jun. 2022 – Aug. 2022',
      startDate: '2022-06',
      icon: FaLaptopCode,
      description: [
        'My first real taste of industry ML/AI! I loved seeing how research ideas could become features that real users rely on.',
        'I developed RESTful APIs and backend services for ML-powered web apps.',
        'Assisted in building NLP pipelines for user feedback analysis and sentiment classification (spaCy, NLTK).',
        'Worked with product managers to translate ML research into production features, improving user engagement and retention.'
      ]
    }
  ]

  // Sort by startDate descending (latest first)
  const sortedExperiences = [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate));

  return (
    <section id="experience" className="py-20" style={{ backgroundColor: '#0a192f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#ccd6f6' }}>Work Experience</h2>
            <p className="text-xl" style={{ color: '#8892b0' }}>
              My professional journey in software development
            </p>
          </motion.div>
        </div>

        {/* True Alternating Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-[#233554] opacity-60 -translate-x-1/2 z-0" />
          <div className="flex flex-col gap-16 z-10">
            {sortedExperiences.map((exp, index) => (
              <div key={index} className="w-full">
                {/* Desktop: alternating timeline */}
                <div className="hidden md:grid grid-cols-9 items-center w-full">
                  {/* Left card */}
                  <div className={`col-span-4 ${index % 2 === 0 ? '' : 'hidden md:block'}`}>
                    {index % 2 === 0 && (
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
                    <div className="z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 border-[#0a192f] bg-[#64ffda] shadow-lg">
                      {exp.icon && <exp.icon size={36} color="#0a192f" />}
                    </div>
                    {index < sortedExperiences.length - 1 && (
                      <div className="h-full w-1 bg-[#233554] opacity-60" style={{ minHeight: 40 }} />
                    )}
                  </div>
                  {/* Right card */}
                  <div className={`col-start-6 col-span-4 ${index % 2 === 0 ? 'hidden md:block' : ''}`}>
                    {index % 2 !== 0 && (
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
                {/* Mobile: vertical stack */}
                <div className="md:hidden flex flex-col items-center w-full mb-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-[#0a192f] bg-[#64ffda] shadow-lg mb-2">
                    {exp.icon && <exp.icon size={36} color="#0a192f" />}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#112240] rounded-lg shadow-lg p-6 w-full max-w-full"
                  >
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-2xl font-bold" style={{ color: '#ccd6f6' }}>{exp.title}</h3>
                      <span className="text-base font-semibold" style={{ color: '#8892b0' }}>{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center space-x-4 text-sm mb-2" style={{ color: '#8892b0' }}>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 