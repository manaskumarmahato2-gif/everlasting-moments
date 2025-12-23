Wedding Agency Website - Product Requirements Document (PRD)
1. PROJECT OVERVIEW
1.1 Project Name
Wedding Agency Landing & Service Website
1.2 Project Vision
Create a modern, elegant, and romantic multi-page website that showcases the agency's photography and videography services, builds trust with potential clients, and drives booking inquiries through an intuitive user experience.
1.3 Design Direction
Chosen Style: Modern Romantic

Clean, contemporary layouts with romantic visual elements
Soft color palette with modern typography
Elegant animations and transitions
Focus on visual storytelling through large, high-quality imagery

1.4 Tech Stack

Frontend: HTML5, CSS3, Vanilla JavaScript
Responsive Framework: CSS Grid + Flexbox
Animation Library: CSS animations + Intersection Observer API
Icons: Font Awesome or SVG icons
Forms: HTML5 forms with JS validation


2. SITE STRUCTURE
2.1 Site Map
Home (index.html)
│
├── About Us (about.html)
├── Services (services.html)
│   ├── Wedding Services Detail (wedding-services.html)
│   ├── Family Milestones (family-services.html)
│   └── Cinematic Videos (cinematic.html)
├── Portfolio/Gallery (portfolio.html)
├── Testimonials (testimonials.html)
└── Contact (contact.html)
2.2 Navigation Structure
Primary Navigation (Header - all pages):

Logo (left) - links to home
Navigation Menu (right):

Home
About Us
Services (dropdown)

Wedding Services
Family Milestones
Cinematic Videos


Portfolio
Testimonials
Contact


Mobile: Hamburger menu

Secondary Navigation (Footer - all pages):

Quick Links (all main pages)
Services list
Social media icons
Contact information
Copyright


3. PAGE-BY-PAGE SPECIFICATIONS
3.1 HOME PAGE (index.html)
3.1.1 Hero Section
Requirements:

Full viewport height (100vh)
Background: Slideshow of 3-5 hero images (auto-rotate every 5s)
Overlay: Semi-transparent dark gradient (rgba(0,0,0,0.3))
Content (centered):

Main headline (H1): "Capturing Your Precious Moments"
Subheadline: "Professional Wedding & Event Photography"
Primary CTA button: "Book a Consultation"
Secondary CTA button: "View Our Work"
Scroll indicator icon at bottom



Technical Specs:

Image slideshow using CSS animations or JS setInterval
Buttons with hover effects (scale + color transition)
Smooth scroll to next section on scroll icon click
Lazy loading for images

3.1.2 Services Overview Section
Requirements:

Section heading: "Our Services"
Brief intro text (2-3 lines)
3 service category cards in grid layout:

Wedding Services

Icon/image
Title
Short description (30 words)
"Learn More" link → wedding-services.html


Family Milestones

Icon/image
Title
Short description (30 words)
"Learn More" link → family-services.html


Cinematic Videos

Icon/image
Title
Short description (30 words)
"Learn More" link → cinematic.html





Technical Specs:

CSS Grid: 3 columns on desktop, 1 column on mobile
Card hover effects (lift + shadow)
Fade-in animation on scroll (Intersection Observer)

3.1.3 Featured Portfolio Section
Requirements:

Section heading: "Recent Work"
Image grid: 6 featured images (2 from each service category)
Images in masonry/grid layout
"View Full Portfolio" CTA button → portfolio.html

Technical Specs:

CSS Grid with responsive breakpoints
Lightbox on image click (modal view)
Image overlay with project category tag on hover
Lazy loading for images

3.1.4 Why Choose Us Section
Requirements:

Section heading: "Why Choose Us"
4 key features with icons:

Professional Equipment
Experienced Team
Timely Delivery
Affordable Packages


Each with icon, title, and short description

Technical Specs:

Flexbox layout
Icon animations on scroll
Responsive: 2x2 grid on tablet, single column on mobile

3.1.5 Testimonials Preview
Requirements:

Section heading: "What Our Clients Say"
2-3 testimonial cards
Each card includes:

Client photo (circular)
Quote
Name
Event type
Star rating


"Read More Testimonials" link → testimonials.html

Technical Specs:

Horizontal carousel/slider (manual navigation)
CSS transforms for smooth transitions
Auto-rotate every 7 seconds

3.1.6 CTA Section
Requirements:

Full-width section with background image
Headline: "Ready to Capture Your Moments?"
Large CTA button: "Get in Touch"
Phone number and WhatsApp button

Technical Specs:

Parallax effect on background image
Button with pulse animation
Click-to-call phone number
WhatsApp API link integration


3.2 ABOUT US PAGE (about.html)
3.2.1 Page Hero
Requirements:

Page title: "About Us"
Breadcrumb: Home > About Us
Background image with overlay

3.2.2 Our Story Section
Requirements:

Heading: "Our Story"
200-300 word description about the agency
Side-by-side layout with image

Technical Specs:

2-column layout (text left, image right)
Fade-in animation on scroll

3.2.3 Our Mission & Vision
Requirements:

Two columns: Mission | Vision
Each with icon, heading, and description (100 words each)

3.2.4 Our Team (Optional)
Requirements:

Team member cards with photo, name, role
Social media links for each member

Technical Specs:

CSS Grid: 3 columns desktop, 2 tablet, 1 mobile
Hover effect on cards

3.2.5 Our Process
Requirements:

Step-by-step workflow visualization
4-5 steps from booking to delivery:

Initial Consultation
Planning & Preparation
Event Coverage
Editing & Enhancement
Delivery



Technical Specs:

Timeline design with icons
Connected with lines/dots
Animation on scroll (steps appear sequentially)


3.3 SERVICES MAIN PAGE (services.html)
3.3.1 Page Hero
Requirements:

Page title: "Our Services"
Breadcrumb: Home > Services
Brief intro text

3.3.2 Services Grid
Requirements:

All services listed with detailed cards:

Wedding Photography & Video
Pre-Wedding Photography & Video
Post-Wedding Shoot & Video
Newborn Baby Shoot
Maternity Shoot
First Rice Ceremony Shoot
Birthday Photography & Video
Cinematic Video



Each card includes:

Service image
Service name
Description (50 words)
Key features (bullet points)
"View Details" button → specific service detail page
Starting price (optional)

Technical Specs:

CSS Grid: 2 columns desktop, 1 mobile
Stagger animation on page load
Filter functionality by category (Wedding/Family/Special)


3.4 WEDDING SERVICES DETAIL PAGE (wedding-services.html)
3.4.1 Page Structure
Requirements:

Hero with service name
Detailed description (200 words)
What's included section (checklist format):

Full day coverage
Number of photographers/videographers
Edited photos/videos count
Online gallery
Physical album (if applicable)
Delivery timeline


Sample image gallery (6-8 images)
Package options (if applicable)
CTA: "Book This Service" → contact form

Technical Specs:

Tabbed interface for different wedding service types
Accordion for package details
Image gallery with lightbox


3.5 FAMILY MILESTONES PAGE (family-services.html)
3.5.1 Page Structure
Requirements:

Hero section
Individual sections for each service:

Newborn Baby Shoot
Maternity Shoot
First Rice Ceremony
Birthday Photography



Each section includes:

Service description
Sample images
What's included
Duration
"Book Now" CTA

Technical Specs:

Scroll spy navigation (jump to sections)
Smooth scroll between sections
Image galleries for each service


3.6 CINEMATIC VIDEOS PAGE (cinematic.html)
3.6.1 Page Structure
Requirements:

Hero section with headline
Video showreel (embedded video player)
Description of cinematic video service
What makes it special (storytelling approach, equipment, editing style)
Sample work gallery (video thumbnails)
Package options
"Request Quote" CTA

Technical Specs:

Custom video player or embedded YouTube/Vimeo
Video thumbnails with play overlay
Modal video player on thumbnail click


3.7 PORTFOLIO PAGE (portfolio.html)
3.7.1 Page Structure
Requirements:

Page hero
Filter buttons:

All
Weddings
Pre-Wedding
Babies
Maternity
Birthdays
Rice Ceremony
Cinematic


Image grid (masonry layout)
30-50 portfolio images
Load more button (lazy loading)

Technical Specs:

JavaScript filter functionality
Isotope.js or custom filter script
Lightbox with navigation (prev/next)
Image metadata (project name, category, date)
Smooth filter transitions
Infinite scroll or "Load More" button


3.8 TESTIMONIALS PAGE (testimonials.html)
3.8.1 Page Structure
Requirements:

Page hero
Grid of testimonial cards (10-15 testimonials)
Each testimonial includes:

Client photo
Full review text
Client name
Event type
Date
Star rating


Video testimonials section (if available)
Google/Facebook reviews integration (optional)

Technical Specs:

Masonry grid layout
Read more/less toggle for long reviews
Filter by service type
Embedded video testimonials


3.9 CONTACT PAGE (contact.html)
3.9.1 Page Structure
Requirements:
Contact Information Section:

Agency name
Phone numbers (with click-to-call)
Email address (with mailto link)
WhatsApp button
Service areas
Business hours
Social media links

Contact Form:

Fields:

Name (required)
Email (required, validated)
Phone (required)
Service Interested In (dropdown)
Event Date (date picker)
Message (textarea, required)
Submit button


Success/error messages
Form validation (JS)

Map Section:

Embedded Google Maps (if physical location)
Or service area map

FAQ Section:

5-7 common questions with answers
Accordion style

Technical Specs:

HTML5 form validation
JavaScript validation (regex for email, phone)
AJAX form submission (optional)
EmailJS or FormSubmit integration for form handling
Smooth scroll to success message
Form reset after submission


4. GLOBAL COMPONENTS
4.1 Header/Navigation
Requirements:

Fixed/sticky header on scroll
Logo on left (SVG or PNG)
Navigation menu on right
Dropdown for Services menu
Mobile hamburger menu (< 768px)
Smooth dropdown animations
Active page indicator

Technical Specs:

Header changes background on scroll (transparent → solid)
Z-index: 1000
Smooth transitions
Mobile menu: slide-in from right
Close on outside click or menu item click

4.2 Footer
Requirements:
Three columns:
Column 1: About

Brief description (50 words)
Logo

Column 2: Quick Links

All main pages
Services list

Column 3: Contact

Phone
Email
Address
Social media icons

Bottom Bar:

Copyright notice
Privacy Policy link
Terms & Conditions link

Technical Specs:

Responsive: 3 columns → 1 column on mobile
Social icons with hover effects
Links with smooth color transitions

4.3 Scroll to Top Button
Requirements:

Appears after scrolling 500px
Fixed position (bottom right)
Smooth scroll to top on click
Icon: upward arrow

Technical Specs:

Fade in/out based on scroll position
Z-index: 999
Smooth scroll animation

4.4 Loading Animations
Requirements:

Page loader (optional)
Section fade-in on scroll
Image lazy loading
Skeleton screens for images

Technical Specs:

Intersection Observer API for scroll animations
CSS transitions and transforms
Loading="lazy" attribute for images


5. DESIGN SPECIFICATIONS
5.1 Color Palette
Primary Colors:

Primary: #C9A576 (Soft Gold) - CTAs, accents
Secondary: #2D3436 (Charcoal) - text, headers
Accent: #E8B4B8 (Blush Pink) - highlights, hover states

Neutral Colors:

Background: #FFFFFF (White)
Light Background: #F8F9FA (Off-white)
Text Primary: #2D3436 (Dark gray)
Text Secondary: #636E72 (Medium gray)
Border: #DFE6E9 (Light gray)

Semantic Colors:

Success: #00B894 (Green)
Error: #D63031 (Red)
Warning: #FDCB6E (Yellow)

5.2 Typography
Fonts:

Headings: 'Playfair Display', serif (elegant)
Body: 'Inter', 'Poppins', or 'Montserrat', sans-serif (modern, readable)

Font Sizes:
cssH1: 3rem (48px) - desktop, 2rem (32px) - mobile
H2: 2.5rem (40px) - desktop, 1.75rem (28px) - mobile
H3: 2rem (32px) - desktop, 1.5rem (24px) - mobile
H4: 1.5rem (24px)
Body: 1rem (16px)
Small: 0.875rem (14px)
Font Weights:

Headings: 700 (Bold)
Body: 400 (Regular)
Emphasis: 600 (Semi-bold)

Line Heights:

Headings: 1.2
Body: 1.6

5.3 Spacing System
Padding/Margin Scale:
cssxs: 8px
sm: 16px
md: 24px
lg: 32px
xl: 48px
2xl: 64px
3xl: 96px
Section Padding:

Desktop: 80px (top/bottom)
Tablet: 60px
Mobile: 40px

Container Width:

Max-width: 1200px
Padding: 20px (left/right)

5.4 Buttons
Primary Button:
cssBackground: #C9A576
Color: #FFFFFF
Padding: 14px 32px
Border-radius: 4px
Font-weight: 600
Transition: all 0.3s ease
Hover: background darken by 10%, transform: translateY(-2px)
Secondary Button:
cssBackground: transparent
Color: #C9A576
Border: 2px solid #C9A576
Padding: 12px 30px
Hover: background #C9A576, color #FFFFFF
Button Sizes:

Small: padding 10px 24px, font-size 14px
Medium: padding 14px 32px, font-size 16px (default)
Large: padding 18px 40px, font-size 18px

5.5 Cards
Standard Card:
cssBackground: #FFFFFF
Border: 1px solid #DFE6E9
Border-radius: 8px
Padding: 24px
Box-shadow: 0 2px 8px rgba(0,0,0,0.08)
Hover: box-shadow: 0 8px 24px rgba(0,0,0,0.12), transform: translateY(-4px)
Transition: all 0.3s ease
5.6 Forms
Input Fields:
cssBorder: 1px solid #DFE6E9
Border-radius: 4px
Padding: 12px 16px
Font-size: 16px
Focus: border-color #C9A576, box-shadow: 0 0 0 3px rgba(201,165,118,0.1)
Error State:
cssBorder-color: #D63031
Success State:
cssBorder-color: #00B894

6. RESPONSIVE BREAKPOINTS
css/* Mobile First Approach */
Mobile: 0px - 767px (base styles)
Tablet: 768px - 1023px
Desktop: 1024px - 1439px
Large Desktop: 1440px+
```

**Key Responsive Changes:**
- Navigation: Full menu → Hamburger menu at 768px
- Grid layouts: Multi-column → Single column
- Font sizes: Scale down by 20-30% on mobile
- Padding/margins: Reduce by 30-40% on mobile
- Hero section: 100vh → auto height on mobile
- Image galleries: 3-4 columns → 2 → 1

---

## 7. ANIMATION & INTERACTIONS

### 7.1 Page Transitions
- Fade in on page load (0.5s)
- Smooth scroll behavior for anchor links

### 7.2 Scroll Animations
**Elements to animate:**
- Section headings: fade in + slide up
- Cards: stagger fade in
- Images: fade in with scale
- Counters: count up animation

**Trigger:** When element is 20% visible in viewport

### 7.3 Hover Effects
- Buttons: scale 1.05 + color change
- Cards: lift (translateY) + shadow increase
- Images: zoom 1.1 with overflow hidden
- Links: underline slide-in animation
- Icons: rotate or bounce

### 7.4 Loading States
- Skeleton screens for images
- Spinner for form submission
- Progress bar for page load (optional)

---

## 8. PERFORMANCE REQUIREMENTS

### 8.1 Image Optimization
- Format: WebP with JPG fallback
- Compression: 70-80% quality
- Sizes:
  - Hero images: 1920x1080px max
  - Portfolio images: 1200x800px max
  - Thumbnails: 400x300px
- Lazy loading for all images below fold
- Responsive images with srcset

### 8.2 Code Optimization
- Minify CSS and JS for production
- Combine CSS files (single stylesheet)
- Combine JS files (single script file)
- Remove unused CSS
- Inline critical CSS

### 8.3 Loading Speed Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Page size: < 2MB per page
- Lighthouse score: > 90

### 8.4 SEO Requirements
- Semantic HTML5 elements
- Meta tags on all pages:
  - Title (unique per page, 50-60 chars)
  - Description (150-160 chars)
  - Keywords
  - Open Graph tags
  - Twitter Card tags
- Alt text for all images
- Heading hierarchy (H1 → H2 → H3)
- Schema.org markup for business info
- XML sitemap
- Robots.txt

---

## 9. FUNCTIONALITY REQUIREMENTS

### 9.1 Contact Form
**Validation Rules:**
- Name: min 2 characters, letters only
- Email: valid email format
- Phone: 10 digits, numbers only
- Message: min 10 characters
- Service: required selection

**Behavior:**
- Real-time validation on blur
- Disable submit until valid
- Show error messages below fields
- Success message after submission
- Form reset after successful submission
- Email notification to agency
- Auto-reply to user

### 9.2 Image Gallery/Lightbox
**Features:**
- Click to open lightbox
- Next/Previous navigation
- Close on ESC key or outside click
- Image counter (1/10)
- Keyboard navigation (arrows)
- Swipe gestures on mobile
- Zoom functionality (optional)

### 9.3 Mobile Menu
**Behavior:**
- Hamburger icon (3 lines)
- Slide in from right on click
- Close button (X)
- Overlay background
- Prevent body scroll when open
- Close on menu item click
- Animated transitions

### 9.4 Smooth Scroll
- All anchor links scroll smoothly
- Navigation to sections
- "Scroll to top" button
- Header fixed on scroll

### 9.5 WhatsApp Integration
- Click-to-chat button
- Pre-filled message: "Hi, I'm interested in your [service] services"
- Open in new tab

---

## 10. BROWSER & DEVICE SUPPORT

### 10.1 Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

### 10.2 Device Testing
**Required:**
- iPhone (12, 13, 14)
- Android phones (Samsung, Pixel)
- iPad
- Android tablets
- Desktop (1920x1080, 1366x768)

### 10.3 Accessibility
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Focus indicators visible
- Color contrast ratio > 4.5:1
- Alt text for images
- ARIA labels where needed
- Skip to content link

---

## 11. FILE STRUCTURE
```
wedding-agency/
│
├── index.html
├── about.html
├── services.html
├── wedding-services.html
├── family-services.html
├── cinematic.html
├── portfolio.html
├── testimonials.html
├── contact.html
│
├── css/
│   ├── style.css (main stylesheet)
│   ├── responsive.css (media queries)
│   └── animations.css (animation definitions)
│
├── js/
│   ├── main.js (global functionality)
│   ├── portfolio.js (portfolio filtering)
│   ├── form-validation.js (form handling)
│   └── lightbox.js (gallery lightbox)
│
├── images/
│   ├── hero/
│   ├── services/
│   ├── portfolio/
│   ├── testimonials/
│   ├── about/
│   └── icons/
│
├── assets/
│   ├── fonts/
│   └── videos/
│
└── README.md
