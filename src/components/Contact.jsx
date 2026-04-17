import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact</h2>
      <h3 className="contact-subtitle">Let's Connect</h3>
      
      <div className="contact-content">
        <p className="contact-description">
          I'm actively seeking entry-level Full Stack / Python Developer roles. If you have an opportunity, 
          a project idea, or just want to chat about tech — I'd love to hear from you!
        </p>
        
        <div className="contact-grid">
          <a href="tel:+9337174963" className="contact-card">
            <div className="contact-icon">📱</div>
            <h4>Phone</h4>
            <p>+91 9337174963</p>
          </a>
          
          <a href="mailto:ankitanup9999@gmail.com" className="contact-card">
            <div className="contact-icon">✉️</div>
            <h4>Email</h4>
            <p>ankitanup9999@gmail.com</p>
          </a>
          
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h4>Location</h4>
            <p>Odisha, India</p>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            Instagram
          </a>
          <a href="https://wa.me/9337174963" target="_blank" rel="noopener noreferrer" className="social-link">
            WhatsApp
          </a>
        </div>
        
        <div className="hire-cta">
          <div className="cta-badge">🚀 OPEN TO WORK</div>
          <h3>Hire Me Today</h3>
          <p>Available immediately for full-time entry-level positions in Full Stack or Python development.</p>
          <a href="mailto:ankitanup9999@gmail.com" className="cta-button">Send an Email ✉️</a>
        </div>
      </div>
      
      <footer className="footer">
        <p>© 2025 Ankit Anup Nayak · Built with React + Vite ⚡</p>
      </footer>
    </section>
  )
}

export default Contact
