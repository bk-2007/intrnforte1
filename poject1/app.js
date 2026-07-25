// Aura Storefront App Logic

// 1. Dataset - Curated Premium Products
const productsData = [
    {
        id: 1,
        name: "Aura SoundLink Headphones",
        price: 249.00,
        category: "electronics",
        rating: 4.8,
        reviews: 142,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
        description: "Immerse yourself in pure auditory bliss. The Aura SoundLink Headphones feature advanced hybrid active noise cancellation, custom-tuned high-fidelity drivers, and a luxurious memory-foam headband for all-day listening comfort.",
        specs: [
            "Up to 40 hours of battery life with Fast Charge",
            "Advanced Hybrid Active Noise Cancelling (ANC)",
            "Bluetooth 5.2 with Multi-point Connectivity",
            "Premium vegan leather and aerospace-grade aluminum"
        ]
    },
    {
        id: 2,
        name: "Velo Minimalist Backpack",
        price: 110.00,
        category: "accessories",
        rating: 4.6,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600",
        description: "Engineered for the modern commuter. The Velo Backpack combines a sleek water-repellent shell with dedicated protective compartments for your everyday tech, books, and essentials. Clean aesthetics meet absolute utility.",
        specs: [
            "Weatherproof 900D ballistic nylon exterior",
            "Padded sleeve fits up to 16\" laptops",
            "Hidden anti-theft back pocket for passports/phones",
            "Ergonomic mesh padding for breathability"
        ]
    },
    {
        id: 3,
        name: "Holo Glass Wall Clock",
        price: 75.00,
        category: "home",
        rating: 4.5,
        reviews: 64,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdad1c?auto=format&fit=crop&q=80&w=600",
        description: "Transform how you view time. A stunning combination of smoked tempered glass and copper hands, this sweep-second wall clock functions silently without any ticking, serving as a clean focal point for modern walls.",
        specs: [
            "Japanese silent sweep-quartz movement (no ticking)",
            "Smoked tempered mineral glass face",
            "Solid copper hour and minute indicators",
            "Diameter: 30cm (12 inches) | Battery included"
        ]
    },
    {
        id: 4,
        name: "Loom Merino Wool Sweater",
        price: 135.00,
        category: "clothing",
        rating: 4.7,
        reviews: 110,
        image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=600",
        description: "Expertly knit from 100% fine-gauge Merino wool, the Loom Sweater offers unmatched natural softness, breathable warmth, and odor resistance. Featuring a classic ribbed crewneck and cuffs for a relaxed yet structured fit.",
        specs: [
            "100% Extra-fine Australian Merino Wool",
            "Naturally thermoregulating and odor-resistant",
            "Pre-shrunk fibers for consistent fit after washing",
            "Ethically sourced, mulesing-free farms"
        ]
    },
    {
        id: 5,
        name: "Nova Brushed Desk Stand",
        price: 65.00,
        category: "electronics",
        rating: 4.4,
        reviews: 42,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        description: "Elevate your workstation both literally and aesthetically. The Nova Desk Stand is CNC-machined from solid aluminum, providing a sturdy, slip-free pedestal that raises your laptop to eye level for improved posture.",
        specs: [
            "Premium CNC-milled structural aluminum build",
            "Non-slip silicone contact pads protect hardware",
            "Cable routing slot in the back for neat setups",
            "Fits laptops and tablets from 11\" to 16\""
        ]
    },
    {
        id: 6,
        name: "Beam Ambient Glow Lamp",
        price: 180.00,
        category: "home",
        rating: 4.9,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=600",
        description: "Set the mood with modern ambient projection. The Beam Glow Lamp emits a beautiful, soft aura of light that mimics sunset gradients. Control brightness, hue, and gradient speed dynamically using the touch-sensitive base.",
        specs: [
            "Adjustable multi-hue warm-to-cool LED arrays",
            "Stepless touch dimmer with preset mood cycles",
            "Frosted polycarbonate lens prevents eye fatigue",
            "Sustainable walnut wood base element"
        ]
    },
    {
        id: 7,
        name: "Silt Ceramic Carafe Set",
        price: 95.00,
        category: "home",
        rating: 4.7,
        reviews: 53,
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600",
        description: "Celebrate the ritual of coffee and tea. Hand-thrown by artisanal potters, the Silt Carafe Set features a dual-texture raw clay exterior and smooth food-safe interior glaze. Comes with one 600ml carafe and two matching cups.",
        specs: [
            "Dual-texture raw stoneware and matte glaze finish",
            "Includes carafe (600ml) and two matching cups (180ml)",
            "Microwave and dishwasher safe construct",
            "Thermal retention keeps beverages hot for longer"
        ]
    },
    {
        id: 8,
        name: "Sol Acetate Sunglasses",
        price: 120.00,
        category: "accessories",
        rating: 4.3,
        reviews: 31,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600",
        description: "Timeless shape meets futuristic styling. Handcrafted from bio-acetate frame materials, the Sol Sunglasses feature polarized UV400 lenses that block glare completely while maintaining exceptionally sharp color contrast.",
        specs: [
            "Premium eco-friendly bio-acetate frames",
            "Polarized CR-39 lenses with 100% UV400 protection",
            "Reinforced 5-barrel metal hinges for long life",
            "Includes custom cork protective folding case"
        ]
    }
];

// 2. Application State
let appState = {
    cart: JSON.parse(localStorage.getItem('aura_cart')) || [],
    currentView: 'home',
    filters: {
        category: 'all',
        maxPrice: 1000,
        minRating: 0,
        searchQuery: ''
    },
    sort: 'featured',
    theme: localStorage.getItem('aura_theme') || 'dark'
};

// 3. Select DOM Elements
const bodyEl = document.body;
const navLogo = document.getElementById('nav-logo');
const navLinks = document.querySelectorAll('.nav-link');
const footerLinks = document.querySelectorAll('.footer-link');
const homeView = document.getElementById('home-view');
const shopView = document.getElementById('shop-view');
const featuredGrid = document.getElementById('featured-grid');
const catalogGrid = document.getElementById('catalog-grid');
const resultsCount = document.getElementById('results-count');
const noResultsMsg = document.getElementById('no-results-msg');

// Filter & Sort Inputs
const categoryRadios = document.getElementsByName('shop-category');
const priceRangeSlider = document.getElementById('price-range');
const priceValueLabel = document.getElementById('price-value');
const ratingRadios = document.getElementsByName('rating-filter');
const sortSelect = document.getElementById('sort-select');
const clearFiltersBtn = document.getElementById('clear-filters-btn');
const globalSearchInput = document.getElementById('global-search');
const searchToggleBtn = document.getElementById('search-toggle-btn');
const searchDropdown = document.getElementById('search-dropdown');
const mobileFilterBtn = document.getElementById('mobile-filter-btn');
const filterSidebar = document.getElementById('filter-sidebar');

// Cart Elements
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartBadgeCount = document.getElementById('cart-badge-count');
const cartCountLabel = document.getElementById('cart-count');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Detail Modal Elements
const detailsModal = document.getElementById('details-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBody = document.getElementById('modal-body');

// Theme Switcher
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const toastContainer = document.getElementById('toast-container');

// Hero Actions
const heroCtaBtn = document.getElementById('hero-cta-btn');
const heroSecondaryBtn = document.getElementById('hero-secondary-btn');

// 4. Initialize Application
function init() {
    // Set theme
    applyTheme(appState.theme);

    // Initial render
    renderFeaturedProducts();
    updateCartUI();

    // Attach Event Listeners
    setupNavigation();
    setupFiltersAndSorting();
    setupCartActions();
    setupModalActions();
    setupThemeToggle();
}

// 5. Theme Operations
function applyTheme(theme) {
    if (theme === 'light') {
        bodyEl.classList.remove('dark-theme');
        bodyEl.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        bodyEl.classList.remove('light-theme');
        bodyEl.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    appState.theme = theme;
    localStorage.setItem('aura_theme', theme);
}

function setupThemeToggle() {
    themeToggleBtn.addEventListener('click', () => {
        const nextTheme = appState.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
    });
}

// 6. Toast Notifications
function showToast(message, icon = 'fa-circle-check') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    // Remove toast after animation completes
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 7. Navigation & View Routing
function switchView(targetView) {
    if (appState.currentView === targetView) return;

    appState.currentView = targetView;

    // Remove active styles from links
    navLinks.forEach(link => {
        if (link.getAttribute('data-view') === targetView) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Animate transition
    if (targetView === 'home') {
        shopView.classList.remove('active');
        setTimeout(() => {
            shopView.style.display = 'none';
            homeView.style.display = 'block';
            setTimeout(() => homeView.classList.add('active'), 50);
        }, 300);
    } else if (targetView === 'shop') {
        homeView.classList.remove('active');
        setTimeout(() => {
            homeView.style.display = 'none';
            shopView.style.display = 'block';
            setTimeout(() => {
                shopView.classList.add('active');
                renderCatalog();
            }, 50);
        }, 300);
    }
}

function setupNavigation() {
    navLogo.addEventListener('click', (e) => {
        e.preventDefault();
        switchView('home');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-view');
            switchView(target);
        });
    });

    // Footer links category mapping
    [...footerLinks, ...document.querySelectorAll('.category-card')].forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            
            // Sync filter values in state and HTML
            appState.filters.category = category;
            
            categoryRadios.forEach(radio => {
                if (radio.value === category) {
                    radio.checked = true;
                }
            });

            switchView('shop');
            renderCatalog();
        });
    });

    // Hero CTA
    heroCtaBtn.addEventListener('click', () => {
        switchView('shop');
    });

    // Hero secondary (browse categories scroll)
    heroSecondaryBtn.addEventListener('click', () => {
        document.querySelector('.home-categories-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Global Search UI interactions
    searchToggleBtn.addEventListener('click', () => {
        searchDropdown.classList.toggle('active');
        if (searchDropdown.classList.contains('active')) {
            globalSearchInput.focus();
        }
    });

    // Close search dropdown on click outside
    document.addEventListener('click', (e) => {
        if (!searchToggleBtn.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.classList.remove('active');
        }
    });
}

// 8. Card Layout Render Helpers
function createProductCardHTML(product) {
    const starsHTML = getStarRatingHTML(product.rating);
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-container" onclick="openDetails(${product.id})">
                <span class="product-badge">${product.category}</span>
                <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy">
                <button class="product-quick-add" onclick="event.stopPropagation(); addToCart(${product.id})" aria-label="Add to Bag">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-meta">
                    <span class="product-category-tag">${product.category}</span>
                    <div class="product-rating">
                        ${starsHTML}
                        <span>(${product.reviews})</span>
                    </div>
                </div>
                <h3 class="product-card-title" onclick="openDetails(${product.id})">${product.name}</h3>
                <div class="product-price-row">
                    <span class="product-card-price">$${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `;
}

function getStarRatingHTML(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fa-solid fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalf) {
            stars += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            stars += '<i class="fa-regular fa-star"></i>';
        }
    }
    return stars;
}

// Render homepage featured products
function renderFeaturedProducts() {
    const featured = productsData.slice(0, 4); // Select first 4 products
    featuredGrid.innerHTML = featured.map(p => createProductCardHTML(p)).join('');
}

// 9. Filtering and Sorting logic
function renderCatalog() {
    const filteredProducts = productsData.filter(product => {
        // Category Filter
        if (appState.filters.category !== 'all' && product.category !== appState.filters.category) {
            return false;
        }

        // Price Filter
        if (product.price > appState.filters.maxPrice) {
            return false;
        }

        // Rating Filter
        if (product.rating < appState.filters.minRating) {
            return false;
        }

        // Search Filter
        if (appState.filters.searchQuery) {
            const query = appState.filters.searchQuery.toLowerCase();
            const inName = product.name.toLowerCase().includes(query);
            const inDesc = product.description.toLowerCase().includes(query);
            const inCategory = product.category.toLowerCase().includes(query);
            if (!inName && !inDesc && !inCategory) {
                return false;
            }
        }

        return true;
    });

    // Sort Products
    filteredProducts.sort((a, b) => {
        if (appState.sort === 'price-low') {
            return a.price - b.price;
        } else if (appState.sort === 'price-high') {
            return b.price - a.price;
        } else if (appState.sort === 'rating') {
            return b.rating - a.rating;
        }
        return b.id - a.id; // Featured default: newest items
    });

    // Update Result Counters
    resultsCount.textContent = `Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'}`;

    if (filteredProducts.length === 0) {
        catalogGrid.innerHTML = '';
        noResultsMsg.classList.remove('hidden');
    } else {
        noResultsMsg.classList.add('hidden');
        catalogGrid.innerHTML = filteredProducts.map(p => createProductCardHTML(p)).join('');
    }
}

function setupFiltersAndSorting() {
    // Category Selector
    categoryRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            appState.filters.category = e.target.value;
            renderCatalog();
        });
    });

    // Price Slider
    priceRangeSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        appState.filters.maxPrice = val;
        priceValueLabel.textContent = `$${val}`;
        renderCatalog();
    });

    // Rating Selector
    ratingRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            appState.filters.minRating = parseFloat(e.target.value);
            renderCatalog();
        });
    });

    // Search Input
    globalSearchInput.addEventListener('input', (e) => {
        appState.filters.searchQuery = e.target.value;
        if (appState.currentView !== 'shop') {
            switchView('shop');
        }
        renderCatalog();
    });

    // Sort Dropdown
    sortSelect.addEventListener('change', (e) => {
        appState.sort = e.target.value;
        renderCatalog();
    });

    // Reset Filters Button
    clearFiltersBtn.addEventListener('click', () => {
        appState.filters = {
            category: 'all',
            maxPrice: 1000,
            minRating: 0,
            searchQuery: ''
        };

        // Reset elements values
        categoryRadios.forEach(r => r.value === 'all' ? r.checked = true : null);
        ratingRadios.forEach(r => r.value === '0' ? r.checked = true : null);
        priceRangeSlider.value = 1000;
        priceValueLabel.textContent = `$1000`;
        globalSearchInput.value = '';
        sortSelect.value = 'featured';
        appState.sort = 'featured';

        renderCatalog();
        showToast("Filters reset successfully");
    });

    // Mobile Sidebar Toggle
    mobileFilterBtn.addEventListener('click', () => {
        filterSidebar.classList.toggle('active');
        if (filterSidebar.classList.contains('active')) {
            mobileFilterBtn.innerHTML = '<i class="fa-solid fa-xmark"></i> Close';
        } else {
            mobileFilterBtn.innerHTML = '<i class="fa-solid fa-sliders"></i> Filters';
        }
    });
}

// 10. Shopping Cart Drawer Logic
function toggleCart(isOpen) {
    if (isOpen) {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
    } else {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
    }
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existingItem = appState.cart.find(item => item.product.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        appState.cart.push({ product, quantity: 1 });
    }

    localStorage.setItem('aura_cart', JSON.stringify(appState.cart));
    updateCartUI();
    toggleCart(true); // Slide drawer open
    showToast(`${product.name} added to bag!`, 'fa-bag-shopping');
}

function updateCartQuantity(productId, delta) {
    const item = appState.cart.find(item => item.product.id === productId);
    if (!item) return;

    item.quantity += delta;

    if (item.quantity <= 0) {
        appState.cart = appState.cart.filter(item => item.product.id !== productId);
    }

    localStorage.setItem('aura_cart', JSON.stringify(appState.cart));
    updateCartUI();
}

function removeCartItem(productId) {
    const item = appState.cart.find(item => item.product.id === productId);
    appState.cart = appState.cart.filter(item => item.product.id !== productId);
    localStorage.setItem('aura_cart', JSON.stringify(appState.cart));
    updateCartUI();
    if (item) {
        showToast(`${item.product.name} removed from bag.`, 'fa-trash');
    }
}

function updateCartUI() {
    const cartLength = appState.cart.reduce((sum, item) => sum + item.quantity, 0);

    // Update Badges & Labels
    cartBadgeCount.textContent = cartLength;
    cartCountLabel.textContent = cartLength;

    if (appState.cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-view">
                <i class="fa-solid fa-bag-shopping"></i>
                <h4>Your bag is empty</h4>
                <p>Add some high-end essentials to your catalog.</p>
                <button class="btn btn-primary" onclick="toggleCart(false); switchView('shop')">Browse Shop</button>
            </div>
        `;
        cartSubtotalEl.textContent = '$0.00';
        cartTotalEl.textContent = '$0.00';
        checkoutBtn.disabled = true;
    } else {
        checkoutBtn.disabled = false;
        // Generate Cart items
        cartItemsContainer.innerHTML = appState.cart.map(item => `
            <div class="cart-item">
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <span class="cart-item-title">${item.product.name}</span>
                    <span class="cart-item-category">${item.product.category}</span>
                    <span class="cart-item-price">$${item.product.price.toFixed(2)}</span>
                    <div class="cart-item-actions">
                        <div class="quantity-controller">
                            <button class="qty-btn" onclick="updateCartQuantity(${item.product.id}, -1)">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <span class="qty-value">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateCartQuantity(${item.product.id}, 1)">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <button class="remove-item-btn" onclick="removeCartItem(${item.product.id})">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Calculate Totals
        const subtotal = appState.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        cartTotalEl.textContent = `$${subtotal.toFixed(2)}`;
    }
}

function setupCartActions() {
    cartToggleBtn.addEventListener('click', () => toggleCart(true));
    cartCloseBtn.addEventListener('click', () => toggleCart(false));
    cartOverlay.addEventListener('click', () => toggleCart(false));

    checkoutBtn.addEventListener('click', () => {
        // Mock Checkout Success
        showToast("Processing Order...", "fa-spinner fa-spin");
        setTimeout(() => {
            appState.cart = [];
            localStorage.setItem('aura_cart', JSON.stringify(appState.cart));
            updateCartUI();
            toggleCart(false);

            // Display Success Alert Modal
            alert("Order Confirmed!\n\nThank you for choosing AURA. We've sent a receipt to your email.");
        }, 1500);
    });
}

// 11. Product Details Modal View Logic
function openDetails(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const starsHTML = getStarRatingHTML(product.rating);
    const specsHTML = product.specs.map(spec => `<li><i class="fa-solid fa-circle-check" style="color: var(--accent); margin-right: 8px; font-size: 0.8rem;"></i> ${spec}</li>`).join('');

    modalBody.innerHTML = `
        <div class="details-layout">
            <div class="details-image-container">
                <img src="${product.image}" alt="${product.name}" class="details-image">
            </div>
            <div class="details-content">
                <span class="details-category">${product.category}</span>
                <h2 class="details-title">${product.name}</h2>
                <div class="details-rating-row">
                    <div class="details-stars">${starsHTML}</div>
                    <span class="details-reviews">(${product.reviews} customer reviews)</span>
                </div>
                <span class="details-price">$${product.price.toFixed(2)}</span>
                <p class="details-desc">${product.description}</p>
                
                <h4 style="font-family: 'Outfit', sans-serif; margin-top: 10px;">Specifications</h4>
                <ul class="details-specs" style="list-style: none;">
                    ${specsHTML}
                </ul>

                <div class="details-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeDetails();">
                        <i class="fa-solid fa-bag-shopping"></i> Add to Bag
                    </button>
                </div>
            </div>
        </div>
    `;

    detailsModal.classList.add('active');
}

function closeDetails() {
    detailsModal.classList.remove('active');
}

function setupModalActions() {
    modalCloseBtn.addEventListener('click', closeDetails);
    
    // Close on click outside content
    detailsModal.addEventListener('click', (e) => {
        if (e.target === detailsModal) {
            closeDetails();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDetails();
            toggleCart(false);
        }
    });
}

// Make globally accessible to inline click handlers
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeCartItem = removeCartItem;
window.toggleCart = toggleCart;
window.openDetails = openDetails;
window.closeDetails = closeDetails;
window.switchView = switchView;

// Run App
window.onload = init;
