const contactForm = document.querySelector("#contact-form");

function validateInput() {
  const email = contactForm.querySelector("#email").value;
  const wrapper = contactForm.querySelector(".email-wrapper");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    wrapper.setAttribute("data-error", true);
  } else {
    if(!emailRegex.test(email)) {
      wrapper.setAttribute("data-error", true);
    } else {
      wrapper.setAttribute("data-error", false);
    }
  }
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInput();
});