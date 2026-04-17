// Navigation Functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.8)';
            navbar.style.boxShadow = 'none';
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

// Dynamic Role Animation
function initRoleAnimation() {
    const roles = [
        'Full Stack Developer',
        'Python Engineer',
        'Problem Solver',
        'Django Developer'
    ];
    
    const roleDynamic = document.getElementById('roleDynamic');
    let currentIndex = 0;
    
    function typeRole(text, callback) {
        let charIndex = 0;
        roleDynamic.textContent = '';
        
        const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
                roleDynamic.textContent += text[charIndex];
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(callback, 2000); // Wait 2 seconds before erasing
            }
        }, 80); // Typing speed
    }
    
    function eraseRole(callback) {
        let text = roleDynamic.textContent;
        
        const eraseInterval = setInterval(() => {
            if (text.length > 0) {
                text = text.slice(0, -1);
                roleDynamic.textContent = text;
            } else {
                clearInterval(eraseInterval);
                setTimeout(callback, 300); // Wait before typing next role
            }
        }, 50); // Erasing speed
    }
    
    function animateRole() {
        typeRole(roles[currentIndex], () => {
            eraseRole(() => {
                currentIndex = (currentIndex + 1) % roles.length;
                animateRole();
            });
        });
    }
    
    // Start animation
    animateRole();
}

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

// Render Experience Section
function renderExperience() {
    const experienceGrid = document.getElementById('experienceGrid');
    
    experienceData.forEach(exp => {
        const experienceCard = document.createElement('div');
        experienceCard.className = 'experience-card';
        
        // Check if this is a showcase card with links
        if (exp.isShowcase && exp.links) {
            const links = exp.links.map(link => 
                `<a href="${link.url}" target="_blank" class="showcase-link">
                    <span class="showcase-icon">${link.icon}</span>
                    <span class="showcase-name">${link.name}</span>
                    <span class="showcase-arrow">→</span>
                </a>`
            ).join('');
            
            experienceCard.innerHTML = `
                <div class="experience-header">
                    <div class="experience-icon-wrapper">
                        <div class="experience-icon">${exp.icon}</div>
                    </div>
                    <div class="experience-title-wrapper">
                        <h3>${exp.title}</h3>
                        <div class="experience-period">${exp.period}</div>
                    </div>
                </div>
                <p>${exp.description}</p>
                <div class="showcase-links">
                    ${links}
                </div>
            `;
        } else {
            // Regular experience card
            const tags = exp.tags.map(tag => 
                `<span class="experience-tag">${tag}</span>`
            ).join('');
            
            experienceCard.innerHTML = `
                <div class="experience-header">
                    <div class="experience-icon-wrapper">
                        <div class="experience-icon">${exp.icon}</div>
                    </div>
                    <div class="experience-title-wrapper">
                        <h3>${exp.title}</h3>
                        <div class="experience-period">${exp.period}</div>
                    </div>
                </div>
                <p>${exp.description}</p>
                <div class="experience-tags">
                    ${tags}
                </div>
            `;
        }
        
        experienceGrid.appendChild(experienceCard);
    });
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

// Render Achievements Section
function renderAchievements() {
    const achievementsGallery = document.getElementById('achievementsGallery');
    
    achievementsData.forEach((achievement, index) => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card';
        achievementCard.setAttribute('data-index', index);
        
        achievementCard.innerHTML = `
            ${index === 0 ? '<div class="achievement-badge">LATEST</div>' : ''}
            <img src="${achievement.image}" alt="${achievement.title}" class="achievement-image" onerror="this.src='https://via.placeholder.com/400x500/8b5cf6/ffffff?text=Certificate'">
        `;
        
        // Add click/tap event to open modal
        achievementCard.addEventListener('click', (e) => {
            e.preventDefault();
            openAchievementModal(achievement);
        });
        
        // Add touch event for better mobile support
        achievementCard.addEventListener('touchend', (e) => {
            e.preventDefault();
            openAchievementModal(achievement);
        });
        
        achievementsGallery.appendChild(achievementCard);
    });
    
    // Create modal
    createAchievementModal();
}

// Create Achievement Modal
function createAchievementModal() {
    const modal = document.createElement('div');
    modal.className = 'achievement-modal';
    modal.id = 'achievementModal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeAchievementModal()">×</button>
            <img src="" alt="Certificate" class="modal-image" id="modalImage">
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeAchievementModal();
        }
    });
    
    // Close on background touch
    modal.addEventListener('touchend', (e) => {
        if (e.target === modal) {
            closeAchievementModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAchievementModal();
        }
    });
}

// Open Achievement Modal
function openAchievementModal(achievement) {
    const modal = document.getElementById('achievementModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = achievement.image;
    modalImage.alt = achievement.title;
    modalImage.onerror = function() {
        this.src = 'https://via.placeholder.com/800x600/8b5cf6/ffffff?text=' + encodeURIComponent(achievement.title);
    };
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Prevent scroll on modal
    modal.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });
}

// Close Achievement Modal
function closeAchievementModal() {
    const modal = document.getElementById('achievementModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Scroll to Top Button
function initScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
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
    initRoleAnimation(); // Initialize role animation
    renderSkills();
    renderProgressBars();
    renderExperience(); // Initialize experience section
    renderProjects();
    renderEducation();
    renderAchievements(); // Initialize achievements section
    initScrollTopButton(); // Initialize scroll to top button
    
    // Add fade-in animation to sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
});
