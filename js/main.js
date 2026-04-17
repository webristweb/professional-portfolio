// Render Skills Section
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    skillCategories.forEach(category => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        
        const skillTags = category.skills.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');
        
        skillCard.innerHTML = `
            <div class="skill-icon">${category.icon}</div>
            <h4>${category.title}</h4>
            <div class="skill-tags">
                ${skillTags}
            </div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}

// Render Progress Bars
function renderProgressBars() {
    const progressSection = document.getElementById('progressSection');
    
    progressBars.forEach(skill => {
        const progressItem = document.createElement('div');
        progressItem.className = 'progress-item';
        
        progressItem.innerHTML = `
            <div class="progress-header">
                <span>${skill.name}</span>
                <span>${skill.percentage}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 0%;" data-width="${skill.percentage}"></div>
            </div>
        `;
        
        progressSection.appendChild(progressItem);
    });
    
    // Animate progress bars on scroll
    animateProgressBars();
}

// Animate Progress Bars
function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.getAttribute('data-width');
                setTimeout(() => {
                    fill.style.width = width + '%';
                }, 100);
                observer.unobserve(fill);
            }
        });
    }, { threshold: 0.5 });
    
    progressFills.forEach(fill => observer.observe(fill));
}

// Render Projects Section
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const statusClass = project.status === 'Completed' ? 'status-completed' : 'status-progress';
        
        const techTags = project.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-icon">${project.icon}</div>
                <div class="project-status ${statusClass}">
                    ${project.status}
                </div>
            </div>
            <div class="project-body">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
                <div class="project-links">
                    <a href="${project.codeLink}" class="project-link link-code">View Code</a>
                    <a href="${project.demoLink}" class="project-link link-demo">Live Demo</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Render Education Section
function renderEducation() {
    const educationTimeline = document.getElementById('educationTimeline');
    
    educationData.forEach(edu => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';
        
        const subjectTags = edu.subjects.map(subject => 
            `<span class="subject-tag">${subject}</span>`
        ).join('');
        
        educationItem.innerHTML = `
            <div class="education-year">${edu.year}</div>
            <div class="education-content">
                <div class="education-icon">${edu.icon}</div>
                <h3>${edu.degree}</h3>
                <h4>${edu.institution}</h4>
                <p>${edu.description}</p>
                <div class="education-subjects">
                    ${subjectTags}
                </div>
            </div>
        `;
        
        educationTimeline.appendChild(educationItem);
    });
}

// Navigation Functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    renderSkills();
    renderProgressBars();
    renderProjects();
    renderEducation();
});
