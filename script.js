// =====================================
// MUSIALA WEBSITE - JAVASCRIPT
// =====================================
// =====================================
// EMAILJS CONTACT FORM
// =====================================

emailjs.init({
    publicKey: "O2pIZnupfsNzmeOyk"
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const button = contactForm.querySelector("button");

    button.disabled = true;
    button.textContent = "Sending...";

    emailjs.sendForm(
        "service_6046cqf",
        "template_qc6tdz6",
        this
    )
    .then(function () {

        alert("Message sent successfully! 🚀");

        contactForm.reset();

        button.disabled = false;
        button.textContent = "Send Message";

    })
    .catch(function (error) {

        console.error("EmailJS Error:", error);

        alert("Message failed to send. Please try again.");

        button.disabled = false;
        button.textContent = "Send Message";

    });

});


// 2. IMAGE VIEWER
// =====================================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        const viewer = document.createElement("div");

        viewer.classList.add("image-viewer");

        viewer.innerHTML = `
            <span class="close-viewer">&times;</span>

            <img src="${image.src}" alt="Full Image">
        `;

        document.body.appendChild(viewer);


        // Close button
        const closeButton =
            viewer.querySelector(".close-viewer");

        closeButton.addEventListener("click", function() {

            viewer.remove();

        });


        // Click outside image
        viewer.addEventListener("click", function(event) {

            if (event.target === viewer) {

                viewer.remove();

            }

        });

    });

});


// 3. CURRENT YEAR IN FOOTER
// =====================================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${year} MUSIALA WEBSITE. All Rights Reserved.`;

}
// =====================================
// TYPING EFFECT
// =====================================

const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "Flutter Developer",
    "Python Developer",
    "Software Developer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 70 : 120
    );
}


typeEffect();