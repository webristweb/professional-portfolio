import React from 'react'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      year: '2021 — 2025',
      icon: '🎓',
      degree: 'B.Tech — Computer Engineering',
      institution: 'Trident Academy of Technology · Odisha, India',
      description: 'Specialized in Full Stack Development, Data Structures, OOP, and Database Management. Active member of the College Cultural Committee.',
      subjects: ['Python Programming', 'Web Development', 'Database Management', 'OOP Principles']
    },
    {
      year: '2019 — 2021',
      icon: '📚',
      degree: 'SSC — Class XII',
      institution: 'Dev International School · India',
      description: 'Completed Higher Secondary education with focus on Science and Mathematics, building a strong analytical foundation.',
      subjects: ['Physics', 'Mathematics', 'Chemistry', 'Computer Science']
    },
    {
      year: '2008 — 2019',
      icon: '🏫',
      degree: 'HSC — Class X',
      institution: 'DAV Public School · India',
      description: 'Completed foundational schooling with a strong academic record and participation in extracurricular activities.',
      subjects: ['Mathematics', 'Science', 'English', 'Extracurriculars']
    }
  ]

  return (
    <section className="education" id="education">
      <h2 className="section-title">Academic Background</h2>
      <h3 className="education-subtitle">My Education</h3>
      
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-year">{edu.year}</div>
            <div className="education-content">
              <div className="education-icon">{edu.icon}</div>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.description}</p>
              <div className="education-subjects">
                {edu.subjects.map((subject, idx) => (
                  <span key={idx} className="subject-tag">{subject}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
