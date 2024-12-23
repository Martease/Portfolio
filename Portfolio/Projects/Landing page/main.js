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

// Buttons
const signUpBtn = document.getElementById("signUpBtn");
const signInBtn = document.getElementById("signInBtn");

// Forms
const signUpForm = document.getElementById("signUpForm");
const signInForm = document.getElementById("signInForm");

// Toggle visibility
signUpBtn.addEventListener("click", () => {
    signUpForm.classList.remove("hidden");
    signInForm.classList.add("hidden");
});

signInBtn.addEventListener("click", () => {
    signInForm.classList.remove("hidden");
    signUpForm.classList.add("hidden");
});

// Basic form submission handling
document.getElementById("submitSignUp").addEventListener("click", () => {
    const username = document.getElementById("signUpUsername").value;
    const password = document.getElementById("signUpPassword").value;
    alert(`User ${username} registered successfully!`);
});

document.getElementById("submitSignIn").addEventListener("click", () => {
    const username = document.getElementById("signInUsername").value;
    const password = document.getElementById("signInPassword").value;
    alert(`Welcome back, ${username}!`);
});