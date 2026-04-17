# 🚀 Deployment Guide

## Deployment Options

### 1. 🌐 Traditional Web Hosting (Recommended for PHP)

#### Requirements:
- Web hosting with PHP support
- FTP/SFTP access
- Domain name (optional)

#### Steps:
1. **Get Web Hosting**
   - Hostinger, Bluehost, SiteGround, etc.
   - Ensure PHP 7.4+ support

2. **Upload Files**
   - Use FileZilla or hosting control panel
   - Upload all files to `public_html` or `www` folder
   - Maintain folder structure

3. **Configure**
   - Update `config.php` with your domain
   - Test contact form
   - Check all links

4. **Go Live**
   - Visit your domain
   - Test on mobile devices

---

### 2. 📦 GitHub Pages (Static Only - No PHP)

#### Steps:
1. **Create Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages"
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Save

3. **Access Site**
   - URL: `https://yourusername.github.io/portfolio`

**Note:** Contact form won't work (no PHP support)

---

### 3. ⚡ Netlify (Static + Serverless Functions)

#### Steps:
1. **Sign up** at [netlify.com](https://netlify.com)

2. **Deploy via Git**
   - Connect GitHub repository
   - Build settings: None needed
   - Deploy

3. **Or Deploy via Drag & Drop**
   - Drag your project folder to Netlify
   - Instant deployment

4. **Configure Contact Form**
   - Use Netlify Forms instead of PHP
   - Update form in `index.html`:
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

**URL:** `https://your-site.netlify.app`

---

### 4. 🔷 Vercel (Static Hosting)

#### Steps:
1. **Sign up** at [vercel.com](https://vercel.com)

2. **Deploy**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Or via GitHub**
   - Import repository
   - Auto-deploy on push

**URL:** `https://your-site.vercel.app`

---

### 5. 🐳 Docker Deployment

#### Dockerfile:
```dockerfile
FROM php:8.1-apache

# Copy files
COPY . /var/www/html/

# Enable Apache modules
RUN a2enmod rewrite

# Set permissions
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
```

#### Deploy:
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

---

### 6. ☁️ Cloud Platforms

#### AWS (Amazon Web Services)
- Use EC2 for full control
- Or S3 + CloudFront for static hosting

#### Google Cloud Platform
- Use App Engine
- Or Cloud Storage for static files

#### Microsoft Azure
- Use App Service
- Or Static Web Apps

---

## Pre-Deployment Checklist

### ✅ Content
- [ ] Update all personal information
- [ ] Add real project links
- [ ] Upload your photo
- [ ] Update social media links
- [ ] Test all internal links

### ✅ Configuration
- [ ] Update `config.php` with production settings
- [ ] Set `DEBUG_MODE` to `false`
- [ ] Configure email settings
- [ ] Update site URL

### ✅ Security
- [ ] Remove sensitive information
- [ ] Secure contact form
- [ ] Add HTTPS (SSL certificate)
- [ ] Enable security headers

### ✅ Performance
- [ ] Optimize images
- [ ] Minify CSS/JS (optional)
- [ ] Enable caching
- [ ] Test loading speed

### ✅ SEO
- [ ] Add meta descriptions
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Test mobile responsiveness

### ✅ Testing
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Check all animations
- [ ] Verify responsive design

---

## Post-Deployment

### 1. **Test Everything**
   - All links work
   - Contact form sends emails
   - Mobile responsive
   - Fast loading

### 2. **Set Up Analytics**
   - Google Analytics
   - Or use built-in `analytics.js`

### 3. **Monitor**
   - Check for errors
   - Monitor form submissions
   - Track visitor stats

### 4. **Maintain**
   - Regular backups
   - Update content
   - Fix bugs
   - Add new projects

---

## Custom Domain Setup

### 1. **Buy Domain**
   - Namecheap, GoDaddy, Google Domains

### 2. **Configure DNS**
   - Point A record to your server IP
   - Or CNAME to hosting provider

### 3. **Update Config**
   - Change `SITE_URL` in `config.php`
   - Update social media links

### 4. **Enable HTTPS**
   - Get SSL certificate (Let's Encrypt - free)
   - Force HTTPS in `.htaccess`

---

## Troubleshooting

### Contact Form Not Working
- Check PHP mail configuration
- Verify email settings in `config.php`
- Test with a simple PHP mail script

### Styles Not Loading
- Check file paths (case-sensitive on Linux)
- Verify `.htaccess` is uploaded
- Clear browser cache

### 404 Errors
- Check `.htaccess` is working
- Verify file permissions (644 for files, 755 for folders)
- Check server configuration

---

## Support

Need help deploying? Check:
- Hosting provider documentation
- Platform-specific guides
- Community forums

---

**Good luck with your deployment! 🚀**
