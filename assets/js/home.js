/* ==========================================================
   MAR CONSULTANCY
   HOME PAGE SCRIPT
========================================================== */

"use strict";

/* ==========================================================
   DOM READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initStickyNavbar();
    initBackToTop();
    initCounters();
    initSmoothScroll();
    initNavbarActive();
    initRevealCards();
    initHeroAnimation();
    initNewsletter();
    initFloatingButtons();

});

/* ==========================================================
   LOADER
========================================================== */

function initLoader(){

    const loader=document.getElementById("loader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    });

}

/* ==========================================================
   STICKY NAVBAR
========================================================== */

function initStickyNavbar(){

    const navbar=document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>60){

            navbar.classList.add("sticky");

        }

        else{

            navbar.classList.remove("sticky");

        }

    });

}

/* ==========================================================
   BACK TO TOP
========================================================== */

function initBackToTop(){

    const btn=document.querySelector(".back-to-top");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>300){

            btn.classList.add("active");

        }

        else{

            btn.classList.remove("active");

        }

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==========================================================
   COUNTER
========================================================== */

function initCounters(){

    const counters=document.querySelectorAll(".counter");

    if(!counters.length) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        });

    },{

        threshold:.5

    });

    counters.forEach(counter=>observer.observe(counter));

}

function animateCounter(counter){

    const target=+counter.dataset.target;

    const duration=1800;

    const increment=target/(duration/16);

    let current=0;

    function update(){

        current+=increment;

        if(current<target){

            counter.innerText=Math.floor(current);

            requestAnimationFrame(update);

        }

        else{

            counter.innerText=target.toLocaleString()+"+";

        }

    }

    update();

}

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}

/* ==========================================================
   ACTIVE NAVBAR
========================================================== */

function initNavbarActive(){

    const page=window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar .nav-link").forEach(link=>{

        const href=link.getAttribute("href");

        if(href===page){

            link.classList.add("active");

        }

    });

}

/* ==========================================================
   REVEAL ON SCROLL
========================================================== */

function initRevealCards(){

    const cards=document.querySelectorAll(

        ".card-modern,.service-card,.country-card,.testimonial,.blog-card,.stat-card"

    );

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }

        });

    },{

        threshold:.15

    });

    cards.forEach(card=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        card.style.transition=".7s";

        observer.observe(card);

    });

}

/* ==========================================================
   HERO FLOAT EFFECT
========================================================== */

function initHeroAnimation(){

    const image=document.querySelector(".hero img");

    if(!image) return;

    let direction=1;

    let y=0;

    setInterval(()=>{

        y+=direction;

        image.style.transform=`translateY(${y}px)`;

        if(y>=12) direction=-1;

        if(y<=0) direction=1;

    },40);

}

/* ==========================================================
   NEWSLETTER
========================================================== */

function initNewsletter(){

    const form=document.querySelector(".newsletter form");

    if(!form) return;

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const email=form.querySelector("input");

        if(email.value.trim()===""){

            alert("Please enter your email.");

            return;

        }

        alert("Thank you for subscribing!");

        form.reset();

    });

}

/* ==========================================================
   FLOATING BUTTONS
========================================================== */

function initFloatingButtons(){

    const whatsapp=document.querySelector(".whatsapp-btn");

    const call=document.querySelector(".call-btn");

    [whatsapp,call].forEach(btn=>{

        if(!btn) return;

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="scale(1.15)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="scale(1)";

        });

    });

}

/* ==========================================================
   END
========================================================== */