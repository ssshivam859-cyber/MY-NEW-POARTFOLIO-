```javascript
// ========================================
// SHIVAM SAINI PORTFOLIO - script.js
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // MOBILE MENU
    // ========================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                if (navLinks.classList.contains("active")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }

        });


        // Close mobile menu after clicking a link

        const navItems = navLinks.querySelectorAll("a");

        navItems.forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }


    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    // ========================================
    // CURRENT YEAR
    // ========================================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // ========================================
    // BACK TO TOP BUTTON
    // ========================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // ========================================
    // CONTACT FORM
    // ========================================

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();


            // Get form values

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const subjectInput = document.getElementById("subject");
            const messageInput = document.getElementById("message");


            const name = nameInput
                ? nameInput.value.trim()
                : "";

            const email = emailInput
                ? emailInput.value.trim()
                : "";

            const subject = subjectInput
                ? subjectInput.value.trim()
                : "";

            const message = messageInput
                ? messageInput.value.trim()
                : "";


            // Check empty fields

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please fill in all fields.";

                    formMessage.style.display = "block";

                }

                return;

            }


            // Success message

            if (formMessage) {

                formMessage.textContent =
                    "Thank you! Your message has been submitted successfully.";

                formMessage.style.display = "block";

            }


            // Reset form

            contactForm.reset();

        });

    }

});


// ========================================
// VISTAAR.AI - COMING SOON
// ========================================

function showComingSoon(event) {

    event.preventDefault();

    alert("🚀 VISTAAR.AI — Coming Soon!");

}
```



function showComingSoon(event) {
    event.preventDefault();
    alert("🚀 VISTAAR.AI — Coming Soon!");
}

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        menuToggle.querySelector("i").classList.toggle("fa-bars");
        menuToggle.querySelector("i").classList.toggle("fa-xmark");
    });

    // Close menu after clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });

});
