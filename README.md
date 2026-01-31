# Aryan Gupta - Portfolio Website

## 📋 Table of Contents
- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Installation & Setup](#installation--setup)
- [GitHub Workflow](#github-workflow)
- [CSS Concepts Implemented](#css-concepts-implemented)
- [JavaScript Functionality](#javascript-functionality)
- [Responsive Design](#responsive-design)
- [Dark/Light Mode](#darklight-mode)
- [Performance Optimizations](#performance-optimizations)
- [Browser Compatibility](#browser-compatibility)
- [Future Enhancements](#future-enhancements)
- [Learning Outcomes](#learning-outcomes)
- [Screenshots](#screenshots)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## 📖 Overview

This is a fully responsive, multi-page portfolio website built from scratch using pure HTML, CSS, and JavaScript. The website showcases Aryan Gupta's skills, projects, education, and professional experience as a Computer Science Engineering student at Lovely Professional University. The portfolio is designed to be visually appealing, user-friendly, and technically robust while meeting all academic requirements for the "Responsive Portfolio Website with GitHub Collaboration" project.

## 🔗 Live Demo
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen)](https://aryanishan.github.io/portfolio)
*(Replace with your actual GitHub Pages URL after deployment)*

## ✨ Features

### ✅ **Core Features**
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens
- **Dark/Light Mode**: Toggle between themes with CSS variables
- **Four Complete Pages**: Home, About, Projects, Contact
- **Sticky Navigation**: Always accessible navigation bar
- **Form Validation**: Client-side validation for contact form
- **Project Filtering**: Interactive filtering by category
- **Smooth Animations**: CSS transitions and hover effects
- **Accessibility**: Semantic HTML and ARIA labels

### ✅ **Technical Features**
- **No Frameworks**: Built with pure HTML, CSS, and JavaScript
- **Modular Code**: Separate CSS and JavaScript files
- **CSS Variables**: Centralized theming system
- **Mobile-First Approach**: Progressive enhancement
- **Git Version Control**: Complete GitHub workflow
- **Performance Optimized**: Minimal HTTP requests

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup, structure |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript (ES6+)** | Interactivity, form validation, theme switching |
| **Font Awesome** | Icons and visual elements |
| **Google Fonts** | Typography (Poppins & Roboto) |
| **Git/GitHub** | Version control, deployment |

## 📁 Project Structure

```
portfolio-aryan/
├── index.html              # Home page
├── about.html              # About page
├── projects.html           # Projects page
├── contact.html            # Contact page
├── css/
│   ├── style.css           # Main stylesheet
│   └── dark-mode.css       # Dark theme styles
├── js/
│   ├── script.js           # Main JavaScript
│   ├── form-validation.js  # Contact form validation
│   └── projects.js         # Projects filtering
├── images/                 # Image assets
│   └── (placeholder images)
├── README.md               # This file
└── .gitignore              # Git ignore file
```

## 📄 Pages Overview

### 1. **Home Page (`index.html`)**
- Hero section with personal introduction
- Skills showcase organized by category
- Featured projects preview
- Social media links
- Call-to-action buttons

### 2. **About Page (`about.html`)**
- Personal profile and photo placeholder
- Detailed education timeline
- Certificates and achievements display
- Personal details section

### 3. **Projects Page (`projects.html`)**
- Project gallery with filtering options
- Detailed project descriptions
- Technology stack tags
- GitHub and live demo links
- **6 total projects** (2 from CV + 4 additional):
  1. Spam SMS Detector (AI/ML)
  2. Weather Fetching App (Web)
  3. E-commerce Platform (Full Stack)
  4. Business Analytics Dashboard (Data Science)
  5. Task Management Application (Web)
  6. Social Media Sentiment Analysis (AI/ML)

### 4. **Contact Page (`contact.html`)**
- Contact form with validation
- Multiple contact methods
- Location information
- Interactive form feedback

## 🚀 Installation & Setup

### Local Development
1. **Clone the repository:**
   ```bash
   git clone https://github.com/aryanishan/portfolio.git
   cd portfolio
   ```

2. **Open in browser:**
   - Simply open `index.html` in any modern web browser
   - No build process or dependencies required

### GitHub Pages Deployment
1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Select "main" branch as source
   - Select root folder
   - Click "Save"

3. **Access your site:**
   - Your portfolio will be available at:
   `https://<your-username>.github.io/<repository-name>`

## 🔄 GitHub Workflow

### Commit Structure (8+ Meaningful Commits)
1. **Initial Setup** - Project structure and basic files
2. **Navbar & Hero** - Navigation and hero section implementation
3. **About Section** - About page with timeline
4. **Cards Layout** - Project cards and skills cards
5. **Grid Gallery** - Projects gallery with CSS Grid
6. **Media Queries** - Responsive design implementation
7. **Animations** - Transitions and hover effects
8. **Final Polish** - Final touches and README

### Branching Strategy
```
main (production)
├── feature/navbar (navbar implementation)
├── feature/responsive (media queries)
└── feature/animations (CSS animations)
```

### Branch Commands
```bash
# Create a new feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "Descriptive commit message"

# Push to remote
git push origin feature/feature-name

# Create Pull Request on GitHub
# Merge after review
```

## 🎨 CSS Concepts Implemented

| Concept | Implementation | File Reference |
|---------|----------------|----------------|
| **Box Model** | Padding, margin, border on all elements | `style.css` |
| **Flexbox** | Navbar, cards layout, form elements | Throughout |
| **CSS Grid** | Main layouts, galleries, contact section | `style.css` |
| **Position** | Sticky header, absolute badges | `.navbar`, `.project-badge` |
| **Media Queries** | Mobile, tablet, desktop breakpoints | End of `style.css` |
| **Animations** | Hover effects, transitions, keyframes | Throughout |
| **Pseudo-classes** | `:hover`, `:focus`, `:nth-child()` | Throughout |
| **CSS Variables** | Theme colors, spacing, typography | `:root` in `style.css` |
| **Responsive Units** | `%`, `rem`, `vw`, `vh` | Throughout |

## ⚡ JavaScript Functionality

### 1. **Theme Switching**
```javascript
// Toggle between dark and light modes
// Uses localStorage to remember preference
// Updates CSS variables dynamically
```

### 2. **Form Validation**
```javascript
// Real-time validation for contact form
// Error highlighting and messages
// Success feedback after submission
```

### 3. **Projects Filtering**
```javascript
// Filter projects by category (AI/ML, Web, Data Science, etc.)
// Smooth animations during filtering
// Active state management for filter buttons
```

### 4. **Mobile Navigation**
```javascript
// Hamburger menu toggle for mobile
// Smooth closing on link click
// Accessible keyboard navigation
```

### 5. **Dynamic Content**
```javascript
// Current year in footer
// Intersection Observer for scroll animations
// Form submission simulation
```

## 📱 Responsive Design

### Breakpoints Implemented
- **Mobile**: 0-576px (portrait phones)
- **Tablet**: 577-768px (landscape phones, small tablets)
- **Desktop**: 769-992px (tablets, small laptops)
- **Large Desktop**: 993px+ (laptops, desktops)

### Mobile-First Approach
1. **Base styles** for mobile
2. **Progressive enhancement** for larger screens
3. **Fluid layouts** with flexible units
4. **Touch-friendly** interface elements

### Responsive Patterns
- **Fluid typography** with `rem` units
- **Flexible images** with `max-width: 100%`
- **CSS Grid** for complex layouts
- **Media queries** for breakpoints

## 🌓 Dark/Light Mode

### Implementation Details
- **CSS Variables** for theme colors
- **LocalStorage** to remember preference
- **Smooth transitions** between themes
- **System preference** detection
- **Accessible toggle button**

### Theme Variables
```css
:root {
  --primary-color: #4a6bff;
  --secondary-color: #ff6b6b;
  /* Light theme variables */
}

.dark-mode {
  --primary-color: #6c8bff;
  --secondary-color: #ff8b8b;
  /* Dark theme variables */
}
```

## ⚡ Performance Optimizations

### Loading Performance
- **Minimal HTTP requests** (5 total files)
- **CSS and JS minification** (optional)
- **Efficient image placeholders**
- **Lazy loading** (implemented for future images)

### Rendering Performance
- **CSS containment** where possible
- **Efficient animations** with `transform` and `opacity`
- **Debounced event handlers**
- **Optimized repaint/reflow**

### Best Practices
- **Semantic HTML5** elements
- **Alt text** for all images
- **Proper heading hierarchy**
- **ARIA labels** for accessibility

## 🌐 Browser Compatibility

### Supported Browsers
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

### Fallbacks Implemented
- **CSS Grid** fallback with Flexbox
- **CSS Variables** fallback with hardcoded values
- **ES6+ JavaScript** transpilation (if needed)
- **Progressive enhancement** principles

## 🔮 Future Enhancements

### Planned Features
1. **Backend Integration**
   - Real form submission with Node.js/Express
   - Email notifications for contact form
   - Database for project management

2. **Advanced Features**
   - Project search functionality
   - Blog section for articles
   - Skills progress bars
   - Downloadable resume

3. **Performance Improvements**
   - Image optimization with WebP
   - Service Worker for offline access
   - Code splitting for JavaScript

4. **User Experience**
   - Loading animations with skeleton screens
   - Toast notifications
   - Keyboard shortcuts
   - PWA capabilities

## 📚 Learning Outcomes

### Technical Skills Developed
1. **HTML5 & Semantic Markup**
   - Proper document structure
   - Accessibility best practices
   - Form implementation

2. **Advanced CSS**
   - CSS Grid and Flexbox mastery
   - Responsive design patterns
   - CSS Variables for theming
   - Animation and transition techniques

3. **JavaScript Programming**
   - DOM manipulation
   - Event handling
   - Form validation
   - LocalStorage usage

4. **Git & GitHub**
   - Version control workflow
   - Branching strategies
   - Pull Request process
   - GitHub Pages deployment

5. **Project Management**
   - Requirements analysis
   - File organization
   - Code documentation
   - Testing and debugging

### Soft Skills Enhanced
- **Problem-solving** through debugging
- **Attention to detail** in UI/UX
- **Time management** with project milestones
- **Documentation** skills through README

## 📸 Screenshots

*(Add your screenshots here)*

### Home Page
![Home Page](screenshots/home.png)

### About Page
![About Page](screenshots/about.png)

### Projects Page
![Projects Page](screenshots/projects.png)

### Contact Page
![Contact Page](screenshots/contact.png)

### Dark Mode
![Dark Mode](screenshots/dark-mode.png)

### Mobile View
![Mobile View](screenshots/mobile.png)

## 📄 License

This project was created for educational purposes as part of the "Responsive Portfolio Website with GitHub Collaboration" assignment. All code is available for learning and reference.

**Copyright © 2024 Aryan Gupta.** All rights reserved.

## 🙏 Acknowledgements

- **Lovely Professional University** for the curriculum and guidance
- **Font Awesome** for the icon library
- **Google Fonts** for typography
- **MDN Web Docs** for comprehensive documentation
- **Stack Overflow** community for problem-solving assistance

---

## 📞 Contact

**Aryan Gupta**  
Computer Science Engineering Student  
Lovely Professional University  
Email: myteam034221@gmail.com  
Phone: +91 9555886922  
LinkedIn: [linkedin.com/in/aryan-gupta-ago](https://linkedin.com/in/aryan-gupta-ag01/)  
GitHub: [github.com/aryanishan](https://github.com/aryanishan)

---

*Last Updated: December 2024*  
*Project Status: Completed ✅*  
*Academic Project for Web Development Course*
