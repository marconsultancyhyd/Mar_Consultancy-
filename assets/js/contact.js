"use strict";

/* ==========================================================
   MAR CONSULTANCY
   CONTACT PAGE JAVASCRIPT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeContactPage();

});

/* ==========================================================
   INITIALIZER
========================================================== */

function initializeContactPage() {

    updateCurrentYear();

    initializeContactForm();

    initializeBackToTop();

    initializeRevealAnimation();

    initializeSmoothScroll();

    initializeCharacterCounter();

    initializePhoneValidation();

    initializeStickyNavbar();

}

/* ==========================================================
   UPDATE COPYRIGHT YEAR
========================================================== */

function updateCurrentYear() {

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

}

/* ==========================================================
   GOOGLE FORM SUBMISSION
========================================================== */

function initializeContactForm() {

    const form = document.getElementById("leadForm");

    if (!form) return;

    const submitButton = document.getElementById("submitBtn");

    const loading = document.getElementById("loadingOverlay");

    const toast = document.getElementById("successToast");

    const GOOGLE_FORM_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLSf3TKtlLXD334YK8sMhOZMLM4VtfHoi3YXFAh9ujly9se6L8Q/formResponse";

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        if (!validateForm(form)) {

            return;

        }

        submitButton.disabled = true;

        submitButton.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Sending...';

        loading.classList.add("show");

        try {

            await fetch(GOOGLE_FORM_URL, {

                method: "POST",

                mode: "no-cors",

                body: new FormData(form)

            });

            loading.classList.remove("show");

            toast.classList.add("show");

            form.reset();

            setTimeout(() => {

                toast.classList.remove("show");

            }, 4000);

        }

        catch (error) {

            loading.classList.remove("show");

            alert("Unable to submit the enquiry. Please try again.");

        }

        finally {

            submitButton.disabled = false;

            submitButton.innerHTML = "Submit Enquiry";

        }

    });

}

/* ==========================================================
   FORM VALIDATION
========================================================== */

function validateForm(form) {

    const email =
        form.querySelector('input[name="entry.1519662812"]');

    const phone =
        form.querySelector('input[name="entry.905876650"]');

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern =
        /^[6-9]\d{9}$/;

    if (!emailPattern.test(email.value.trim())) {

        alert("Please enter a valid email address.");

        email.focus();

        return false;

    }

    if (!phonePattern.test(phone.value.trim())) {

        alert("Please enter a valid 10-digit Indian mobile number.");

        phone.focus();

        return false;

    }

    return true;

}

/* ==========================================================
   PHONE INPUT
========================================================== */

function initializePhoneValidation() {

    const phone =
        document.querySelector('input[name="entry.905876650"]');

    if (!phone) return;

    phone.addEventListener("input", () => {

        phone.value =
            phone.value.replace(/\D/g, "").substring(0, 10);

    });

}

/* ==========================================================
   CHARACTER COUNTER
========================================================== */

function initializeCharacterCounter() {

    const textarea =
        document.querySelector(
            'textarea[name="entry.1215136178"]'
        );

    if (!textarea) return;

    const counter =
        document.createElement("small");

    counter.style.display = "block";

    counter.style.marginTop = "8px";

    counter.style.color = "#777";

    textarea.after(counter);

    textarea.addEventListener("input", () => {

        counter.textContent =
            textarea.value.length + " characters";

    });

}

/* ==========================================================
   BACK TO TOP
========================================================== */

function initializeBackToTop() {

    const button =
        document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            button.classList.add("active");

        }

        else {

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
   REVEAL ANIMATION
========================================================== */

function initializeRevealAnimation() {

    const revealElements =
        document.querySelectorAll(

            ".info-card," +
            ".form-wrapper," +
            ".contact-side-content," +
            ".stat-box," +
            ".office-card," +
            ".map-card," +
            ".faq-section," +
            ".cta-box"

        );

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        }, {

            threshold: 0.15

        });

    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

}

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function initializeSmoothScroll() {

    document.querySelectorAll('a[href^="#"]')

        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            });

        });

}

/* ==========================================================
   STICKY NAVBAR
========================================================== */

function initializeStickyNavbar() {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("sticky");

        }

        else {

            navbar.classList.remove("sticky");

        }

    });

}

/* ==========================================================
   END OF FILE
========================================================== */