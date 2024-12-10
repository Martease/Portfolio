.addEventListener("DOMContentLoaded", () => {
    
    const contactContainer = document.getElementById("contact");
  
    //contactContainer.innerHTML = `
      <div class="contact-container">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required>
  
          <label for="email">Email:</label>
          <inpdocumentut type="email" id="email" name="email" placeholder="Your Email" required>
  
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
  
          <button type="submit">Submit</button>
        </form>
        <div id="successMessage" class="success-message" style="display: none;">
          Thank you for your message! We will get back to you soon.
        </div>
      </div>;//
  
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
  
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      console.log("Form Submitted", { name, email, message });
  
      successMessage.style.display = "block";
  
      form.reset();
  
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
    });
  });