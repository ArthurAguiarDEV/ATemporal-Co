// NAV BAR

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
  .querySelectorAll(".menu a")
  .forEach((link) => link.addEventListener("click", toggleMenu));

// faq

function toggleAccordion(accordionId) {
  const accordionItem = document.getElementById(accordionId);
  const answer = accordionItem.querySelector(".answer");
  const arrow = accordionItem.querySelector(".fas");
  const isActive = accordionItem.classList.toggle("active");

  answer.style.maxHeight = isActive ? answer.scrollHeight + "px" : "0";
  arrow.className = isActive ? "fas fa-minus" : "fas fa-plus";
}

// SCROLL REVEAL

const sr = ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  delay: 100,
  easing: "ease-in-out",
});

sr.reveal(".slogan-1");
sr.reveal(".slogan-2", { delay: 500 });

// NOVIDADES CAIXAS

sr.reveal(".new-arrivals-box:nth-child(1)");
sr.reveal(".new-arrivals-box:nth-child(2)", { delay: 300 });
sr.reveal(".new-arrivals-box:nth-child(3)", { delay: 500 });

sr.reveal(".about-title h1", { origin: "left" });
sr.reveal(".about-title p", { origin: "right" });
sr.reveal(".about-box");

// PROJETOS

sr.reveal(".project h1");
sr.reveal(".project-box");

// FAQ REVEAL & FOOTER

sr.reveal(".FAQ");
sr.reveal(".footer-headline");
sr.reveal(".footer-newsletter", { origin: "left" });
sr.reveal(".link-container", { origin: "right" });
sr.reveal(".socials");

// Produtos
sr.reveal(".product-page img", { origin: "top" });
sr.reveal(".product-title", { delay: 500 });
sr.reveal(".product-container", { delay: 1000 });

// CONTATO PAGE
sr.reveal(".contact h1");
sr.reveal(".contact-container", { delay: 500 });
sr.reveal(".contact img", { delay: 1000 });
