# Profile

A fully accessible, responsive profile built with semantic HTML, modern CSS, and vanilla JavaScript. Designed for automated testing with comprehensive `data-testid` attributes.

## 🚀 Quick Start

### Running Locally

1. **Clone or download the files**

   ```bash
   git clone https://github.com/Mahmud1087/HNG13.git
   cd HNG13/stage-0
   ```

2. **Open in browser**

   ```bash
   # Option 1: Direct file open
   open index.html
   # or double-click index.html in your file explorer

   # Option 2: Using Python's built-in server
   python -m http.server 8000
   # Then visit: http://localhost:8000

   # Option 3: Using Node's http-server
   npx http-server -p 8000
   # Then visit: http://localhost:8000

   # Option 4: Using VS Code Live Server
   # Install "Live Server" extension, right-click index.html, select "Open with Live Server"
   ```

3. **That's it!**

---

## 📁 Project Structure

```
stage-0/
├── index.html
├── style.css
├── index.js
├── README.md
├── /contact
   ├── index.html
   ├── index.js
   ├── style.css
├── /about
   ├── index.html
   ├── index.js
   ├── style.css
└── /images
```

---

## ✨ Features

### Accessibility (WCAG 2.1 AA Compliant)

- ✅ Semantic HTML5 elements (`<article>`, `<header>`, `<nav>`, `<section>`, `<figure>`)
- ✅ Proper heading hierarchy (h2, h3)
- ✅ All interactive elements keyboard-accessible
- ✅ Visible focus indicators with high contrast
- ✅ ARIA labels and live regions where appropriate
- ✅ Alt text for images
- ✅ Respects `prefers-reduced-motion`
- ✅ Screen reader friendly

### Responsive Design

- 📱 **Mobile (< 640px)**: Vertical stack layout
- 📱 **Tablet (640px - 768px)**: Horizontal layout with avatar on left
- 💻 **Desktop (> 768px)**: Full-width layout with grid details

### Functional Features

- ⏱️ Real-time timestamp (updates every second, displays `Date.now()`)
- 🖼️ Avatar upload with live preview
- 🔗 Social media links (open in new tab with security)
- 🎨 Smooth animations and transitions
- 💾 No external dependencies

### Testing Ready

- 🧪 Comprehensive `data-testid` attributes on all elements
- 🔍 Easy to query in automated tests
- 📊 Predictable DOM structure
- ⚡ Fast rendering for E2E tests

---

## 🧪 Testing

### Available Test IDs

### Home Page

All interactive and key elements include `data-testid` attributes for automated testing:

#### Main Container

- `test-profile-card` - Main article wrapper

#### User Information

- `test-user-avatar` - Profile image
- `test-user-name` - User's full name
- `test-user-title` - Job title/subtitle
- `test-user-bio` - Biography paragraph
- `test-user-time` - Timestamp in milliseconds

#### Avatar Upload

- `test-avatar-upload` - File input for avatar upload

#### Social Links

- `test-user-social-links` - Social links container (ul)
- `test-user-social-twitter` - Twitter link
- `test-user-social-github` - GitHub link
- `test-user-social-linkedin` - LinkedIn link

#### Hobbies & Dislikes

- `test-user-hobbies` - Hobbies list container
- `test-hobby-photography` - Individual hobby item
- `test-hobby-cooking` - Individual hobby item
- `test-hobby-reading` - Individual hobby item
- `test-hobby-gaming` - Individual hobby item
- `test-user-dislikes` - Dislikes list container
- `test-dislike-traffic` - Individual dislike item
- `test-dislike-bugs` - Individual dislike item
- `test-dislike-cold` - Individual dislike item
- `test-dislike-meetings` - Individual dislike item

### About Me Page

- `test-about-bio` - Bio
- `test-about-goals` - Goals in this program
- `test-about-confidence` - Areas of low confidence
- `test-about-future-note` - Note to future self
- `test-about-extra` - Extra thoughts

### Contact Me Page

#### Form Inputs

- `test-contact-name` - Full name
- `test-contact-email` - Email
- `test-contact-subject` - Subject
- `test-contact-message` - Message
- `test-contact-submit` - Submit Button
- `test-contact-success` - Success Message

#### Form input error

- `test-contact-error-name` - Full name error
- `test-contact-error-email` - Email error
- `test-contact-error-subject` - Subject error
- `test-contact-error-message` - Message error

## 🔧 Technical Details

### Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Custom Properties
- **Vanilla JavaScript** - ES6+

---

## 📝 Acceptance Criteria Checklist

- [x] All required elements have `data-testid` attributes
- [x] Semantic HTML tags used throughout
- [x] `test-user-time` displays `Date.now()` in milliseconds
- [x] Avatar has proper `alt` attribute
- [x] Social links open in new tab with `rel="noopener noreferrer"`
- [x] Hobbies and dislikes in separate, distinct lists
- [x] All links keyboard-navigable with visible focus
- [x] Responsive layout at mobile/tablet/desktop breakpoints
- [x] Content wraps properly when text length changes
- [x] Avatar accepts URL or uploaded file
- [x] Timestamp updates in real-time

---

## 🐛 Known Issues / Limitations

None currently. If you find any issues, please report them!

---

## 🤝 Contributing

This is a standalone component example. Feel free to fork and modify as needed!

---

## 🔍 Accessibility Testing

### Keyboard Navigation

1. Press `Tab` to navigate through all interactive elements
2. Press `Enter` to activate links/buttons
3. Press `Space` to select file input
