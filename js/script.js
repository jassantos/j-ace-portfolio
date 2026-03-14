// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // mobile navigation toggle
    const toggleBtn = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.main-nav');
    
    if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            // change icon (optional)
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                if (nav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // optional: close mobile menu on link click (for single page feel)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = toggleBtn?.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // set active nav link based on current page (works for subpages too)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // handle pages inside /pages/ folder
        if (linkHref === currentPath || linkHref === `pages/${currentPath}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});