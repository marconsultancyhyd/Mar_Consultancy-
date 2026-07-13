/* ==========================================================
   MAR CONSULTANCY
   ABOUT PAGE JAVASCRIPT
========================================================== */

"use strict";

/* ==========================================================
   DOM READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initCounter();

    initBackToTop();

    initStickyNavbar();

    initRevealAnimation();

    initSmoothScroll();

    initNewsletterValidation();

    initGalleryHover();

    updateCurrentYear();

});

/* ==========================================================
   UPDATE FOOTER YEAR
========================================================== */

function updateCurrentYear() {

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

}

/* ==========================================================
   ANIMATED COUNTERS
========================================================== */

function initCounter() {

    const counters = document.querySelectorAll(".stat-card h2");

    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const text = counter.innerText;

            const target = parseInt(text.replace(/\D/g, ""));

            let current = 0;

            const increment = Math.ceil(target / 80);

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.innerText = current + "+";

            }, 25);

            observer.unobserve(counter);

        });

    }, {

        threshold: .5

    });

    counters.forEach(counter => observer.observe(counter));

}

/* ==========================================================
   STICKY NAVBAR
========================================================== */

function initStickyNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("sticky");

        } else {

            navbar.classList.remove("sticky");

        }

    });

}

/* ==========================================================
   BACK TO TOP
========================================================== */

function initBackToTop() {

    const button = document.querySelector(".back-to-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            button.classList.add("active");

        } else {

            button.classList.remove("active");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initRevealAnimation() {

    const items = document.querySelectorAll(

        ".fade-up,.fade-left,.fade-right,.zoom-in"

    );

    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    items.forEach(item => observer.observe(item));

}
/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function initSmoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    if (!links.length) return;

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

}

/* ==========================================================
   NEWSLETTER FORM VALIDATION
========================================================== */

function initNewsletterValidation() {

    const form = document.querySelector(".newsletter form");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const input = form.querySelector("input[type='email']");

        const email = input.value.trim();

        const pattern =

            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!pattern.test(email)) {

            input.classList.add("is-invalid");

            input.focus();

            return;

        }

        input.classList.remove("is-invalid");

        input.classList.add("is-valid");

        alert("Thank you for subscribing!");

        form.reset();

        input.classList.remove("is-valid");

    });

}

/* ==========================================================
   GALLERY EFFECT
========================================================== */

function initGalleryHover() {

    const images = document.querySelectorAll(".gallery-item img");

    if (!images.length) return;

    images.forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.08)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "";

        });

    });

}

/* ==========================================================
   LAZY IMAGE LOADING
========================================================== */

function initLazyLoading() {

    const images = document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const img = entry.target;

            img.src = img.dataset.src;

            img.removeAttribute("data-src");

            observer.unobserve(img);

        });

    });

    images.forEach(img => observer.observe(img));

}

initLazyLoading();

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

(function () {

    const page = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll(".navbar .nav-link");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (href === page) {

            link.classList.add("active");

        }

    });

})();

/* ==========================================================
   ACCESSIBILITY
========================================================== */

document.addEventListener("keyup", function (e) {

    if (e.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

/* ==========================================================
   IMAGE FADE-IN
========================================================== */

const imageObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("show");

        imageObserver.unobserve(entry.target);

    });

});

document.querySelectorAll("img").forEach(img => {

    img.classList.add("fade-up");

    imageObserver.observe(img);

});

/* ==========================================================
   PERFORMANCE
========================================================== */

window.addEventListener(

    "scroll",

    () => {},

    {

        passive: true

    }

);

/* ==========================================================
   END OF FILE
========================================================== */