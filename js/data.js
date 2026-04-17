// Skills Data
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
];

const progressBars = [
    { name: 'Python', percentage: 85 },
    { name: 'Object-Oriented Programming', percentage: 80 },
    { name: 'SQL & Databases', percentage: 70 },
    { name: 'Frontend (HTML/CSS/JS)', percentage: 72 },
    { name: 'Pandas & NumPy', percentage: 65 },
    { name: 'Django Framework', percentage: 68 }
];

// Professional Experience Data
const experienceData = [
    {
        icon: '🐍',
        title: 'Python Full Stack',
        period: '6 Month Experience',
        description: 'Gained hands-on experience in full-stack Python development, working with Django framework, building web applications, and implementing both frontend and backend solutions.',
        tags: ['Python', 'Django', 'Full Stack', 'Web Development']
    },
    {
        icon: '💻',
        title: 'Advanced Diploma in Computer Application (ADCA)',
        period: '1 Year Experience',
        description: 'Completed comprehensive training in computer applications, covering programming fundamentals, software development, database management, and practical application development.',
        tags: ['Programming', 'Software Development', 'Database', 'MS Office']
    },
    {
        icon: '🎓',
        title: 'Graduate Employability Enhancement Training (GEET)',
        period: 'Training Program',
        description: 'A career readiness program for college students and graduates, focusing on soft skills, interview preparation, resume building, and professional development.',
        tags: ['Soft Skills', 'Career Development', 'Communication', 'Professional Growth']
    },
    {
        icon: '🚀',
        title: 'Live Projects & Portfolio Showcase',
        period: 'View My Work',
        description: 'Explore my complete portfolio of live projects, websites, and professional work. Click on any link below to see real-world examples of my development skills and experience.',
        tags: [],
        isShowcase: true,
        links: [
            { name: 'My Website', url: 'https://helloclient.flyfaitrip.com/', icon: '🌐' },
            { name: 'My Portfolio', url: 'https://webristweb.github.io/myportfolio3/', icon: '💼' },
            { name: 'My Resume', url: 'https://webristweb.github.io/aresume/', icon: '📄' },
            { name: 'My Repository', url: 'https://portfolio.flyfaitrip.com/', icon: '📦' },
            { name: 'Our Business Website', url: 'https://brandrisedigital.flyfaitrip.com/', icon: '🏢' }
        ]
    },
    {
        icon: '🌐',
        title: 'Full Website Development',
        period: 'Ongoing Experience',
        description: 'Experienced in building all types of websites from scratch, including custom admin panels for easy content management. I work closely with clients to understand their needs and deliver fully functional, responsive websites tailored to their requirements. From e-commerce platforms to business websites, portfolio sites to web applications, I handle complete development cycles including design, coding, database integration, and deployment. Every project includes responsive design, SEO optimization, and cross-browser compatibility.',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'JSON', 'Admin Panel', 'Custom Development', 'Responsive Design', 'SEO']
    },
    {
        icon: '🎯',
        title: 'Event Coordination',
        period: 'Oct 2024',
        description: 'Led the planning, coordination, and execution of Cyberanya 3.0, ensuring smooth delivery of all event activities, including PPT presentations, debugging challenges, and module presentations. Managed a team of volunteers, coordinated with speakers and participants, handled logistics, and ensured seamless event flow. Successfully organized technical sessions, interactive workshops, and networking activities. Demonstrated strong organizational skills, time management, and ability to handle multiple tasks simultaneously while maintaining quality standards.',
        tags: ['Event Management', 'Leadership', 'Coordination', 'Public Speaking', 'Team Management', 'Time Management']
    }
];

// Projects Data
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
        description: 'Personal portfolio site built with HTML, CSS & JavaScript. Features smooth animations, responsive layout, and modern UI design to showcase skills and projects.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
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
];

// Education Data
const educationData = [
    {
        year: '2025 — 2027',
        icon: '🎓',
        degree: 'Master of Computer Application (MCA)',
        institution: 'Galgotias University, Greater Noida, Uttar Pradesh',
        description: 'Currently pursuing MCA with focus on advanced software development, system design, and emerging technologies to enhance expertise in computer applications.',
        subjects: ['Advanced Programming', 'System Design', 'Software Engineering', 'Cloud Computing', 'AI & ML']
    },
    {
        year: '2022 — 2025',
        icon: '🎓',
        degree: 'Bachelor of Computer Application (BCA)',
        institution: 'L.N.D. College, Motihari, Bihar 845401',
        description: 'Completed BCA with specialization in Full Stack Development, Python Programming, and Database Management. Built strong foundation in computer applications and software development.',
        subjects: ['Python & Django', 'Web Development', 'Data Structures', 'Database Management', 'OOP']
    },
    {
        year: '2022',
        icon: '📚',
        degree: 'Intermediate (12th) I.SC',
        institution: 'Govt. High School, Gayghat, East Champaran',
        description: 'Completed Intermediate education with Science stream, building strong analytical and problem-solving foundations in core subjects.',
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science']
    },
    {
        year: '2020',
        icon: '🏫',
        degree: 'Matric (10th)',
        institution: 'A Vidyapith Laxmipur S Saraiya, E-Champaran BR',
        description: 'Completed Matriculation with excellent academic performance, establishing a solid educational foundation for higher studies.',
        subjects: ['Mathematics', 'Science', 'English', 'Social Studies']
    }
];

// Achievements Data
const achievementsData = [
    {
        image: 'certificates/image1.png',
        title: 'Python Programming Excellence',
        issuer: 'Tech Academy',
        date: '2024'
    },
    {
        image: 'certificates/image2.png',
        title: 'Full Stack Web Development',
        issuer: 'Coding Institute',
        date: '2024'
    },
    {
        image: 'certificates/image3.png',
        title: 'Django Framework Mastery',
        issuer: 'Python Foundation',
        date: '2024'
    },
    {
        image: 'certificates/image4.png',
        title: 'Database Management & SQL',
        issuer: 'Data Academy',
        date: '2023'
    },
    {
        image: 'certificates/image5.png',
        title: 'Advanced JavaScript & React',
        issuer: 'Frontend Masters',
        date: '2023'
    },
    {
        image: 'certificates/image6.png',
        title: 'Cloud Computing & Deployment',
        issuer: 'Cloud Institute',
        date: '2024'
    }
];
