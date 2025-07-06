'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'
import { FaPython, FaReact, FaNodeJs, FaJava, FaDocker, FaGitAlt, FaAws, FaLinux } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiScikitlearn, SiDjango, SiPostgresql, SiTypescript, SiTailwindcss, SiNextdotjs, SiQgis } from 'react-icons/si'

const About = () => {
  const skills = [
    {
      name: 'ML & Data Science',
      icon: Code,
      items: [
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'scikit-learn', icon: SiScikitlearn },
        { name: 'NLP', icon: Code },
        { name: 'Deep Learning', icon: Code },
      ]
    },
    {
      name: 'Backend',
      icon: Database,
      items: [
        { name: 'Python', icon: FaPython },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Java', icon: FaJava },
        { name: 'Django', icon: SiDjango },
        { name: 'Postgres', icon: SiPostgresql },
        { name: 'REST APIs', icon: Database },
      ]
    },
    {
      name: 'Tools',
      icon: Globe,
      items: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'Docker', icon: FaDocker },
        { name: 'AWS', icon: FaAws },
        { name: 'Linux', icon: FaLinux },
        { name: 'GIS', icon: SiQgis },
      ]
    },
    {
      name: 'Frontend',
      icon: Smartphone,
      items: [
        { name: 'React', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ]
    },
  ]

  return (
    <section id="about" style={{ backgroundColor: '#0a192f', padding: '20px 0 100px 0' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#ccd6f6' }}>About My Research Interests</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#8892b0' }}>
            My research interests lie in machine learning, deep learning, and natural language processing. I am particularly interested in building robust, scalable ML systems and exploring new algorithms for real-world impact. I have hands-on experience with research projects in NLP, computer vision, and large-scale data analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-left w-full max-w-full"
          >
            <h3 className="text-2xl font-bold" style={{ color: '#ccd6f6' }}>Background</h3>
            <p className="leading-relaxed" style={{ color: '#8892b0' }}>
              I have contributed to research and engineering projects at Citi Bank and during my graduate studies. My work spans deep learning, NLP, and data-driven systems. I am eager to collaborate on research that advances the state of the art in ML and AI.
            </p>
            <p className="leading-relaxed" style={{ color: '#8892b0' }}>
              I am currently seeking research assistantships, internships, or collaborations in the ML/AI domain.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 w-full max-w-full"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#ccd6f6' }}>Technical Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: '#112240' }}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <skill.icon className="w-5 h-5" style={{ color: '#64ffda' }} />
                    <h4 className="font-semibold" style={{ color: '#ccd6f6' }}>{skill.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item.name}
                        className="px-2 py-1 text-sm rounded-md flex items-center gap-1"
                        style={{ backgroundColor: '#233554', color: '#8892b0' }}
                      >
                        <item.icon className="inline-block" style={{ color: '#64ffda', width: 16, height: 16 }} />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 