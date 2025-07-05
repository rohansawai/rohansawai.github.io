'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'ML & Data Science', icon: Code, items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'NLP', 'Deep Learning'] },
    { name: 'Backend', icon: Database, items: ['Python', 'Node.js', 'Java', 'REST APIs'] },
    { name: 'Tools', icon: Globe, items: ['Git', 'Docker', 'AWS', 'Linux'] },
    { name: 'Frontend', icon: Smartphone, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  ]

  return (
    <section id="about" style={{ backgroundColor: '#0a192f', padding: '100px 0' }}>
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-left"
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
            className="space-y-6"
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
                        key={item}
                        className="px-2 py-1 text-sm rounded-md"
                        style={{ backgroundColor: '#233554', color: '#8892b0' }}
                      >
                        {item}
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