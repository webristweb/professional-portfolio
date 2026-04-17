# Ankit Nayak - Portfolio Website (HTML/CSS/JS Version)

Modern, responsive portfolio website built with HTML5, CSS3, JavaScript, and PHP.

## 🌟 Features

- 🎨 Modern dark theme with gradient effects
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎯 Clean and professional layout
- 📧 PHP contact form functionality
- 🎭 Dynamic content loading with JavaScript
- 📊 Skills progress bars with animations
- 🚀 Fast loading and optimized performance

## 📋 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Personal information and key features
3. **Skills** - Technical skills with progress indicators
4. **Projects** - Portfolio of completed and ongoing projects
5. **Education** - Academic background timeline
6. **Contact** - Contact information and social links

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (ES6+)
- PHP (for contact form)
- JSON (for data management)

## 📦 Installation & Setup

### For XAMPP Users:

1. Copy the entire project folder to `C:\xampp\htdocs\portfolio`
2. Start Apache server from XAMPP Control Panel
3. Open browser and navigate to: `http://localhost/portfolio`

### For Other Local Servers:

1. Place files in your web server's document root
2. Ensure PHP is enabled
3. Access via your local server URL

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── contact.php         # PHP contact form handler
├── data.json          # Portfolio data in JSON format
├── css/
│   ├── style.css      # Global styles
│   ├── hero.css       # Hero section styles
│   ├── about.css      # About section styles
│   ├── skills.css     # Skills section styles
│   ├── projects.css   # Projects section styles
│   ├── education.css  # Education section styles
│   └── contact.css    # Contact section styles
└── js/
    ├── data.js        # Data definitions
    └── main.js        # Main JavaScript logic
```

## 🎨 Customization

### Update Personal Information:
Edit `data.json` or `js/data.js` to update:
- Personal details
- Skills and expertise
- Projects
- Education history

### Modify Styles:
Edit CSS files in the `css/` folder to customize:
- Colors (CSS variables in `style.css`)
- Layout and spacing
- Animations and effects

### Contact Form:
Update email address in `contact.php` (line 38):
```php
$to = "your-email@example.com";
```

## 🎨 Color Scheme

```css
--primary-color: #6366f1 (Indigo)
--secondary-color: #8b5cf6 (Purple)
--dark-bg: #0f172a (Dark Blue)
--card-bg: #1e293b (Slate)
--text-primary: #f1f5f9 (Light Gray)
--text-secondary: #94a3b8 (Gray)
--accent: #22d3ee (Cyan)
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 How to Run

1. **Using XAMPP:**
   - Place folder in `htdocs`
   - Start Apache
   - Visit `http://localhost/portfolio`

2. **Using PHP Built-in Server:**
   ```bash
   php -S localhost:8000
   ```
   - Visit `http://localhost:8000`

3. **Using Live Server (VS Code):**
   - Install Live Server extension
   - Right-click `index.html`
   - Select "Open with Live Server"

## 📧 Contact Form Setup

The contact form uses PHP to send emails. To enable it:

1. Configure your server's mail settings
2. Update recipient email in `contact.php`
3. Test the form submission

For XAMPP users, you may need to configure `sendmail` in `php.ini`.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Desktop: > 768px
- Mobile: ≤ 768px

## ⚡ Performance

- Minimal dependencies
- Optimized CSS and JavaScript
- Fast loading times
- Smooth animations

## 📄 License

This project is open source and available for personal use.

## 📧 Contact

- Email: ankitanup9999@gmail.com
- Phone: +91 9337174963
- Location: Odisha, India

---

Built with ❤️ by Ankit Anup Nayak
