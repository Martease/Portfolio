const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); 

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Basic client-side validation 
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
      }

      // Create the email subject and body
      const subject = 'Contact Form Submission';
      const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

      // Create the mailto link
      const mailtoLink = `mailto:support@avertingfamiliareducation.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open the user's email client
      window.location.href = mailtoLink;
    });
  
