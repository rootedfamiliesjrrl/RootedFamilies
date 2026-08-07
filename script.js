const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
});

document.querySelectorAll("#mainNav a").forEach(a => {
  a.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.classList.remove("active");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const form = document.getElementById("bookingForm");

form?.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const hours = document.getElementById("hours").value;
  const type = document.getElementById("type").value;
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Rooted Families Booking Request - ${name}`);

  const body = encodeURIComponent(
`Hello Rooted Families,

I would like to request a photography session.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Preferred Date: ${date}
Session Length: ${hours}
Session Type: ${type}

Session Details:
${message || "Not provided"}

I understand that a $30 security deposit is required to reserve my session and that all fees and security deposits are final and non-refundable.

Thank you.`
  );

  window.location.href =
    `mailto:rootedfamiliesjrrl@gmail.com?subject=${subject}&body=${body}`;
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
