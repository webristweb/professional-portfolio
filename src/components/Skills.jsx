import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      icon: '🐍',
      title: 'Python Dev',
      skills: ['Python', 'Django', 'OOP', 'Exception Handling', 'File Handling']
    },
    {
      icon: '📊',
      title: 'Data Science',
      skills: ['Pandas', 'NumPy', 'SQL', 'Data Analysis', 'Functions']
    },
    {
      icon: '🌐',
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    },
    {
      icon: '🛠️',
      title: 'Tools',
      skills: ['VS Code', 'Jupyter', 'Git', 'MS Office', 'Notepad++']
    }
  ]

  const progressBars = [
    { name: 'Python', percentage: 85 },
    { name: 'Object-Oriented Programming', percentage: 80 },
    { name: 'SQL & Databases', percentage: 70 },
    { name: 'Frontend (HTML/CSS/JS)', percentage: 72 },
    { name: 'Pandas & NumPy', percentage: 65 },
    { name: 'Django Framework', percentage: 68 }
  ]

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <h3 className="skills-subtitle">My Expertise</h3>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{category.icon}</div>
            <h4>{category.title}</h4>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="progress-section">
        {progressBars.map((skill, index) => (
          <div key={index} className="progress-item">
            <div className="progress-header">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
