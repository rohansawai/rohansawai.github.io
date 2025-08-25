'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Citi Bank',
      description: 'Full-stack application for financial data management and analysis, with ML-driven analytics and real-time dashboards.',
      tech: ['React', 'Python', 'D3.js', 'WebSockets', 'Prometheus'],
      github: '#',
      live: '#'
    },
  ]

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#0a192f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#ccd6f6' }}>Featured Projects</h2>
            <p className="text-xl" style={{ color: '#8892b0' }}>
              Here are some of the projects I&apos;ve worked on
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg p-6 hover:shadow-lg transition-shadow w-full max-w-full mb-8 md:mb-0"
              style={{ backgroundColor: '#112240' }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: '#ccd6f6' }}>{project.title}</h3>
              <p className="mb-4" style={{ color: '#8892b0' }}>{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{ backgroundColor: '#233554', color: '#8892b0' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 transition-colors"
                  style={{ color: '#8892b0' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#64ffda'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#8892b0'}
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center space-x-2 transition-colors"
                  style={{ color: '#8892b0' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#64ffda'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#8892b0'}
                >
                  <ExternalLink size={20} />
                  <span>Live</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 