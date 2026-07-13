/* ==========================================================
   MAR CONSULTANCY
   SERVICES PAGE
========================================================== */

"use strict";

/* ==========================================================
   DOM READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initBackToTop();

    initStickyNavbar();

    initRevealAnimation();

    initSmoothScroll();

    initNewsletterValidation();

    initFAQAnimation();

    initLazyLoading();

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
   STICKY NAVBAR
========================================================== */

function initStickyNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("sticky");

        }

        else {

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

        if (window.scrollY > 350) {

            button.classList.add("active");

        }

        else {

            button.classList.remove("active");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initRevealAnimation() {

    const elements = document.querySelectorAll(

        ".fade-up,.fade-left,.fade-right,.zoom-in"

    );

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(item=>observer.observe(item));

}

/* ==========================================================
   FAQ EFFECT
========================================================== */

function initFAQAnimation(){

    const items=document.querySelectorAll(".accordion-button");

    items.forEach(item=>{

        item.addEventListener("click",()=>{

            items.forEach(btn=>{

                if(btn!==item){

                    btn.classList.add("collapsed");

                }

            });

        });

    });

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
   NEWSLETTER VALIDATION
========================================================== */

function initNewsletterValidation() {

    const form = document.querySelector(".newsletter form");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const input = form.querySelector("input[type='email']");

        const email = input.value.trim();

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {

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
   LAZY IMAGE LOADING
========================================================== */

function initLazyLoading() {

    const images = document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const image = entry.target;

            image.src = image.dataset.src;

            image.removeAttribute("data-src");

            observer.unobserve(image);

        });

    });

    images.forEach(image => observer.observe(image));

}

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

(function () {

    const page = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".navbar .nav-link");

    navLinks.forEach(link => {

        if (link.getAttribute("href") === page) {

            link.classList.add("active");

        }

    });

})();

/* ==========================================================
   SERVICE CARD EFFECT
========================================================== */

(function () {

    const cards = document.querySelectorAll(".service-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

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