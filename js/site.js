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
const modal = document.getElementById("signupModal");
const btn = document.getElementById("getStartedBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Form submission
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for signing up! We'll keep you updated on our launch.");
  this.reset();
  modal.style.display = "none";
});

// Footer animation
const footerSections = document.querySelectorAll(".footer-section");
footerSections.forEach((section, index) => {
  section.style.animationDelay = `${index * 0.1}s`;
});

// Intersection Observer for FAQ items
const faqItems = document.querySelectorAll(".faq-item");
const faqObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.5 }
);

faqItems.forEach((item) => {
  item.style.opacity = 0;
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.5s, transform 0.5s";
  faqObserver.observe(item);
});
