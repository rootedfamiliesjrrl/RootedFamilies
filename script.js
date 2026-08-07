// ROOTED FAMILIES — GitHub Pages JavaScript

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.classList.remove("active");
    menuButton?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

// Fade-in effects
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => observer.observe(item));

// Booking form -> opens visitor's email application.
// This works on a static GitHub Pages site without a backend.
const bookingForm = document.getElementById("bookingForm");

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const hours = document.getElementById("hours").value;
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Rooted Families Booking Request - ${name}`);

  const body = encodeURIComponent(
`Hello Rooted Families,

I would like to request a photography session.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Preferred Date: ${date}
Session Length: ${hours} hour(s)

Session Details:
${message || "Not provided"}

I understand that a non-refundable $30 security deposit is required to secure the booking.

Thank you.`
  );

  window.location.href =
    `mailto:rootedfamiliesjrrl@gmail.com?subject=${subject}&body=${body}`;
});

// Automatically display the current year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
