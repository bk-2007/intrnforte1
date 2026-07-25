AURA — Curated Premium Storefront

A front-end ecommerce demo built with vanilla HTML, CSS, and JavaScript. AURA showcases a minimalist, dark-themed shopping experience with dynamic product filtering, sorting, search, and a fully functional cart — all running client-side with no backend or build step required.

Show Image

Features
Home view — hero banner, browse-by-category grid, and a "Trending Now" featured products section
Shop view — full product catalog with:
Category filter (Tech & Gadgets, Apparel, Accessories, Home Decor)
Price range slider
Minimum rating filter
Sort by featured, price, or rating
Live results count and "no results" state
Global search — quick product search from the navbar
Shopping cart — slide-out drawer with quantity controls, subtotal/shipping/total summary, and persistent storage via localStorage
Product details modal — expanded view for individual products
Light/dark theme toggle — preference saved in localStorage
Toast notifications — for actions like adding to cart
Responsive design — mobile-friendly filter sidebar and layout
Tech Stack
HTML5
CSS3 (custom properties for theming)
Vanilla JavaScript (no frameworks or build tools)
Font Awesome for icons
Google Fonts — Inter & Outfit
Project Structure
.
├── index.html          # Markup and page structure
├── style.css            # Styling, theming, and responsive layout
├── app.js               # App state, product data, rendering, and interactions
└── assets/
    └── hero_banner.png   # Hero image
Getting Started

No installation or build process is needed — this is a static site.

Clone or download the project files.
Make sure hero_banner.png is placed inside an assets/ folder next to index.html (or update the image path in index.html if you keep it elsewhere).
Open index.html directly in your browser, or serve it locally:
bash
   npx serve .

or

bash
   python3 -m http.server 8000
Visit http://localhost:8000 (or the port shown) in your browser.
Notes
Product data is defined directly in app.js (productsData) — there's no external API or database.
Cart contents and theme preference persist across sessions using browser localStorage.
This project was created for learning purposes.
License

This project is provided for educational/demo purposes. No license is specified — add one if you plan to reuse or distribute this code.
