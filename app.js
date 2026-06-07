/* ==========================================
   Aura Diffuser Co. Frontend Logic & Interactions
   ========================================== */

// --- CONFIGURATION ---
// Replace this with your actual Telegram Bot username
const TELEGRAM_BOT_USERNAME = 'aura_wellness_bot'; 
// Replace this with your WhatsApp number (include country code, without + or spaces)
const WHATSAPP_PHONE_NUMBER = '919876543210'; 

// --- ON DOM LOAD ---
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTelegramRedirects();
    initCircadianSimulation();
    initScrollReveal();
    initTestimonialsCarousel();
});

/**
 * Responsive Mobile Navigation Toggle
 */
function initNavigation() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(10, 10, 12, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid var(--border-glass)';
            } else {
                icon.className = 'fa-solid fa-bars';
                navLinks.removeAttribute('style');
            }
        });
    }

    // Scroll effect: change navbar styling on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '12px 0';
            navbar.style.background = 'rgba(5, 5, 7, 0.9)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.background = 'rgba(10, 10, 12, 0.75)';
            navbar.style.boxShadow = 'none';
        }
    });
}

/**
 * Handle Order Buttons Redirecting to Telegram Bot
 */
function initTelegramRedirects() {
    const orderButtons = document.querySelectorAll('.telegram-order-btn, .nav-cta');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create the Telegram Bot Link
            // This works on both mobile (opens Telegram app) and desktop (opens Telegram Web)
            const telegramUrl = `https://t.me/${TELEGRAM_BOT_USERNAME}`;
            
            // Log click for analytics (or debugging)
            console.log(`Redirecting customer to Telegram bot: @${TELEGRAM_BOT_USERNAME}`);
            
            // Open in a new tab/window
            window.open(telegramUrl, '_blank');
        });
    });
}

/**
 * Simulates Circadian Light shift on the website
 * Changes background glow gradients depending on local time
 */
function initCircadianSimulation() {
    const mesh = document.querySelector('.circadian-mesh');
    if (!mesh) return;

    // Get current hour of the day
    const hour = new Date().getHours();
    let circadianColor = '';

    // Adjust ambient mesh gradients based on real-world local time
    if (hour >= 6 && hour < 12) {
        // Morning: Soft blue and pale gold
        circadianColor = 'radial-gradient(circle at 80% 20%, rgba(255, 214, 153, 0.12) 0%, rgba(5, 5, 7, 0) 60%), radial-gradient(circle at 20% 80%, rgba(135, 206, 250, 0.1) 0%, rgba(5, 5, 7, 0) 50%)';
    } else if (hour >= 12 && hour < 17) {
        // Afternoon: Bright light and clear ambiance
        circadianColor = 'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.08) 0%, rgba(5, 5, 7, 0) 70%), radial-gradient(circle at 10% 90%, rgba(255, 159, 28, 0.05) 0%, rgba(5, 5, 7, 0) 50%)';
    } else if (hour >= 17 && hour < 21) {
        // Evening: Warm sunset orange and violet
        circadianColor = 'radial-gradient(circle at 80% 20%, rgba(242, 100, 25, 0.15) 0%, rgba(5, 5, 7, 0) 60%), radial-gradient(circle at 20% 80%, rgba(85, 37, 134, 0.12) 0%, rgba(5, 5, 7, 0) 50%)';
    } else {
        // Night: Deep midnight blue and warm amber sleep glow
        circadianColor = 'radial-gradient(circle at 80% 80%, rgba(255, 159, 28, 0.15) 0%, rgba(5, 5, 7, 0) 50%), radial-gradient(circle at 20% 20%, rgba(15, 23, 42, 0.2) 0%, rgba(5, 5, 7, 0) 60%)';
    }

    mesh.style.background = circadianColor;
}

/**
 * Scroll Reveal Animations using Intersection Observer
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.about-visual, .about-text, .product-card, .why-us-card, .promo-container, .testimonial-card, .telegram-glass-card'
    );
    
    // Add initial CSS for reveal transition dynamically to avoid breaking layouts if JS is disabled
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Animates only once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/**
 * Testimonial Slider Carousel Logic
 */
function initTestimonialsCarousel() {
    const track = document.querySelector('.testimonials-track');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const cards = document.querySelectorAll('.testimonial-card');
    
    if (!track || dots.length === 0 || cards.length === 0) return;

    let activeIndex = 0;
    
    // Testimonials click dot logic
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            setActiveSlide(index);
        });
    });

    function setActiveSlide(index) {
        // Remove active class from dots
        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');
        
        // Mobile layout translates the horizontal track
        if (window.innerWidth <= 992) {
            const offset = index * 100;
            track.style.transform = `translateX(-${offset}%)`;
            track.style.display = 'flex';
            cards.forEach(card => {
                card.style.flex = '0 0 100%';
            });
        } else {
            // Restore desktop grid layout
            track.removeAttribute('style');
            cards.forEach(card => card.removeAttribute('style'));
        }
        activeIndex = index;
    }

    // Adjust responsive carousel state on resize
    window.addEventListener('resize', () => {
        setActiveSlide(activeIndex);
    });
    
    // Set initial layout
    setActiveSlide(0);
}
