const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    contactForm.reset();
});
