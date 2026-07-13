/* ==========================================================
   MAR CONSULTANCY
   GLOBAL JAVASCRIPT
   Used Across Entire Website
========================================================== */

"use strict";

/* ==========================================================
   DOM READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initStickyNavbar();

    initMobileNavigation();

    initDropdownAnimation();

    initScrollSpy();

    initPageLoader();

    initSmoothScrolling();

    initBackToTop();

    initLazyImages();

    initTooltips();

    initCurrentYear();

});

/* ==========================================================
   STICKY NAVBAR
========================================================== */

function initStickyNavbar(){

    const navbar=document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            navbar.classList.add("sticky");

        }else{

            navbar.classList.remove("sticky");

        }

    });

}

/* ==========================================================
   MOBILE MENU
========================================================== */

function initMobileNavigation(){

    const navbar=document.querySelector(".navbar-collapse");

    const toggler=document.querySelector(".navbar-toggler");

    if(!navbar || !toggler) return;

    document.querySelectorAll(".navbar .nav-link").forEach(link=>{

        link.addEventListener("click",()=>{

            if(window.innerWidth<992){

                const bsCollapse=bootstrap.Collapse.getInstance(navbar);

                if(bsCollapse){

                    bsCollapse.hide();

                }

            }

        });

    });

}

/* ==========================================================
   DROPDOWN ANIMATION
========================================================== */

function initDropdownAnimation(){

    document.querySelectorAll(".dropdown").forEach(drop=>{

        drop.addEventListener("mouseenter",()=>{

            if(window.innerWidth>991){

                drop.classList.add("show");

                drop.querySelector(".dropdown-menu")?.classList.add("show");

            }

        });

        drop.addEventListener("mouseleave",()=>{

            if(window.innerWidth>991){

                drop.classList.remove("show");

                drop.querySelector(".dropdown-menu")?.classList.remove("show");

            }

        });

    });

}

/* ==========================================================
   SCROLL SPY
========================================================== */

function initScrollSpy(){

    const sections=document.querySelectorAll("section[id]");

    const navLinks=document.querySelectorAll(".navbar a");

    if(!sections.length) return;

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-150;

            if(window.scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}

/* ==========================================================
   PAGE LOADER
========================================================== */

function initPageLoader(){

    const loader=document.getElementById("loader");

    if(!loader) return;

    // Hide loader once DOM is ready
    setTimeout(()=>{
        loader.classList.add("loaded");
        setTimeout(()=>{
            loader.remove();
        },100);
    },100);

}

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function initSmoothScrolling(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });

}

/* ==========================================================
   BACK TO TOP
========================================================== */

function initBackToTop(){

    const btn=document.querySelector(".back-to-top");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            btn.classList.add("active");

        }else{

            btn.classList.remove("active");

        }

    });

}

/* ==========================================================
   LAZY LOADING IMAGES
========================================================== */

function initLazyImages(){

    const images=document.querySelectorAll("img[data-src]");

    if(!images.length) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const img=entry.target;

                img.src=img.dataset.src;

                img.removeAttribute("data-src");

                observer.unobserve(img);

            }

        });

    });

    images.forEach(img=>observer.observe(img));

}

/* ==========================================================
   TOOLTIPS
========================================================== */

function initTooltips(){

    const tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

    tooltipTriggerList.map(function(element){

        return new bootstrap.Tooltip(element);

    });

}

/* ==========================================================
   COPYRIGHT YEAR
========================================================== */

function initCurrentYear(){

    const year=document.querySelector("#year");

    if(year){

        year.textContent=new Date().getFullYear();

    }

}

/* ==========================================================
   WINDOW RESIZE
========================================================== */

window.addEventListener("resize",()=>{

    document.body.classList.remove("menu-open");

});

/* ==========================================================
   CONSOLE MESSAGE
========================================================== */

console.log("%cMAR Consultancy Website Loaded Successfully",
"color:#0d6efd;font-size:16px;font-weight:bold;");