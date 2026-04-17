# 🚀 Quick Start Guide - Portfolio Website

## Step 1: Setup XAMPP

1. Download XAMPP from: https://www.apachefriends.org/
2. Install XAMPP (default location: `C:\xampp`)
3. Open XAMPP Control Panel

## Step 2: Copy Files

1. Copy your portfolio folder to: `C:\xampp\htdocs\portfolio`
2. Your folder structure should look like:
   ```
   C:\xampp\htdocs\portfolio\
   ├── index.html
   ├── contact.php
   ├── data.json
   ├── css/
   ├── js/
   └── ...
   ```

## Step 3: Start Server

1. Open XAMPP Control Panel
2. Click "Start" next to Apache
3. Wait for Apache to turn green

## Step 4: Open in Browser

1. Open your web browser
2. Go to: `http://localhost/portfolio`
3. Your portfolio should now be live! 🎉

## 🎨 Customization

### Change Your Information:

Edit `js/data.js` and update:
- Name, email, phone
- Skills and technologies
- Projects
- Education details

### Change Colors:

Edit `css/style.css` and modify CSS variables:
```css
:root {
    --primary-color: #6366f1;  /* Change this */
    --accent: #22d3ee;         /* And this */
}
```

### Add Your Photo:

Replace the placeholder image URL in `index.html`:
```html
<img src="your-photo.jpg" alt="Your Name" class="profile-img">
```

## 📧 Contact Form Setup

To enable email sending:

1. Open `contact.php`
2. Change line 38:
   ```php
   $to = "your-email@example.com";  // Put your email here
   ```

## 🔧 Troubleshooting

### Portfolio not loading?
- Check if Apache is running (green in XAMPP)
- Make sure files are in `htdocs/portfolio`
- Try: `http://localhost/portfolio/index.html`

### Styles not working?
- Check if `css` folder exists
- Verify file paths in `index.html`

### JavaScript not working?
- Check browser console (F12)
- Verify `js` folder exists
- Check file paths in `index.html`

## 📱 Test on Mobile

1. Find your computer's IP address:
   - Windows: Open CMD, type `ipconfig`
   - Look for "IPv4 Address" (e.g., 192.168.1.5)

2. On your phone (connected to same WiFi):
   - Open browser
   - Go to: `http://YOUR-IP/portfolio`
   - Example: `http://192.168.1.5/portfolio`

## ✅ Checklist

- [ ] XAMPP installed
- [ ] Files copied to htdocs
- [ ] Apache started
- [ ] Portfolio opens in browser
- [ ] All sections visible
- [ ] Animations working
- [ ] Mobile responsive
- [ ] Contact form configured

## 🎉 You're Done!

Your portfolio is now live on localhost. Share it by:
1. Deploying to a web host
2. Using services like Netlify, Vercel, or GitHub Pages

## 📚 Next Steps

1. Add your real projects
2. Upload your actual photo
3. Update social media links
4. Test contact form
5. Deploy to live server

---

Need help? Check README-HTML.md for detailed documentation.
