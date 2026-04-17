import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">Who I Am</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="https://via.placeholder.com/300" alt="Ankit" className="profile-img" />
          <div className="degree-badge">B.Tech 2025</div>
        </div>
        <div className="about-text">
          <h2>Who I Am</h2>
          <p>
            I'm a motivated Computer Engineering graduate from Trident Academy of Technology (Class of 2025), 
            with a deep passion for building modern web applications.
          </p>
          <p>
            My expertise lies in Python full-stack development — from backend APIs with Django to dynamic frontends. 
            I love turning ideas into clean, working software.
          </p>
          <p>
            Outside of code, I've been an active member of the College Cultural Committee, which sharpened my 
            communication and leadership skills.
          </p>
          <div className="about-features">
            <div className="feature-card">
              <h3>🎯 Goal Oriented</h3>
              <p>Focused on delivering clean, efficient solutions to real-world problems.</p>
            </div>
            <div className="feature-card">
              <h3>🤝 Team Player</h3>
              <p>Experienced working in teams, sharing ideas and hitting goals together.</p>
            </div>
            <div className="feature-card">
              <h3>📚 Fast Learner</h3>
              <p>Continuously learning new technologies and frameworks to stay current.</p>
            </div>
            <div className="feature-card">
              <h3>🔧 Problem Solver</h3>
              <p>Strong analytical mindset — breaks down complex problems into simple steps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
