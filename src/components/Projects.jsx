import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      icon: '📝',
      status: 'Completed',
      title: 'Django Blog Platform',
      description: 'A full-featured blog application built with Django. Includes user authentication, CRUD posts, comments, and an admin dashboard. Styled with Bootstrap.',
      tech: ['Python', 'Django', 'SQLite', 'Bootstrap', 'HTML/CSS'],
      codeLink: '#',
      demoLink: '#'
    },
    {
      icon: '📊',
      status: 'Completed',
      title: 'Student Data Analyzer',
      description: 'A data analysis tool using Pandas and NumPy to process student records, generate insights, visualize grade distributions, and export reports.',
      tech: ['Python', 'Pandas', 'NumPy', 'Jupyter', 'Matplotlib'],
      codeLink: '#',
      demoLink: '#'
    },
    {
      icon: '🌐',
      status: 'This Project',
      title: 'Portfolio Website',
      description: 'Personal portfolio site built with React and Vite. Features smooth animations, responsive layout, and modern UI design to showcase skills and projects.',
      tech: ['React', 'Vite', 'CSS3', 'JavaScript'],
      codeLink: '#',
      demoLink: '#'
    },
    {
      icon: '🏗️',
      status: 'Completed',
      title: 'OOP Management System',
      description: 'A Python-based library management system demonstrating OOP principles — encapsulation, inheritance, polymorphism — with file-based data persistence.',
      tech: ['Python', 'OOP', 'File Handling', 'Exception Handling'],
      codeLink: '#',
      demoLink: '#'
    },
    {
      icon: '🛒',
      status: 'In Progress',
      title: 'E-Commerce REST API',
      description: 'RESTful API backend for an e-commerce platform using Django REST Framework. Features product listings, cart, and order management endpoints.',
      tech: ['Python', 'Django REST', 'SQLite', 'JSON'],
      codeLink: '#',
      demoLink: '#'
    },
    {
      icon: '🌤️',
      status: 'Completed',
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that fetches live data from a public API and displays temperature, humidity, and weekly forecasts with dynamic UI updates.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'REST API', 'JSON'],
      codeLink: '#',
      demoLink: '#'
    }
  ]

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Work</h2>
      <h3 className="projects-subtitle">Featured Projects</h3>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div className={`project-status ${project.status === 'Completed' ? 'status-completed' : 'status-progress'}`}>
                {project.status}
              </div>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.codeLink} className="project-link link-code">View Code</a>
                <a href={project.demoLink} className="project-link link-demo">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
