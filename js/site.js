// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Active nav link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Modal functionality
const tabs = document.querySelectorAll(".tab");
const forms = document.querySelectorAll(".form-content");
const closeButton = document.querySelector(".close-button");
const modal = document.getElementById("signupModal");
const btn = document.getElementById("getStartedBtn");

console.log(btn);

btn.onclick = function () {
  console.log("signup modal");

  modal.style.display = "flex";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabId = tab.getAttribute("data-tab");

    tabs.forEach((t) => t.classList.remove("active"));
    forms.forEach((f) => f.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(`${tabId}-form`).classList.add("active");
  });
});

closeButton.addEventListener("click", () => {
  // In a real scenario, this would close the modal
  modal.style.display = "none";
});

document.querySelectorAll(".sign-up-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const form = e.target.closest(".form-content");
    const inputs = form.querySelectorAll("input");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.border = "1px solid red";
      } else {
        input.style.border = "1px solid #ddd";
      }
    });

    if (isValid) {
      alert("Form submitted successfully!");
      // Here you would typically send the data to your server
    } else {
      alert("Please fill in all fields.");
    }
  });
});

// Footer animation
const footerSections = document.querySelectorAll(".footer-section");
footerSections.forEach((section, index) => {
  section.style.animationDelay = `${index * 0.1}s`;
});
