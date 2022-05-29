const contactForm = document.querySelector(".contact-form");
const nameForm = document.querySelector('input[name="name"]');
const success = document.querySelector(".success");
const email = document.querySelector('input[name="email"]');
const subject = document.querySelector('input[name="text"]');
const message = document.querySelector('textarea[name="text-area"]');

const validEmail = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
};

const inputs = [nameForm, email, subject, message];

let formIsValid = false;
let validationInProgress = false;

const resetInput = (elm) => {
  elm.classList.remove("invalid");
  elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (elm) => {
  elm.classList.add("invalid");
  elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
  if (!validationInProgress) return;

  formIsValid = true;
  resetInput(nameForm);
  resetInput(email);
  resetInput(subject);
  resetInput(message);

  if (!nameForm.value) {
    formIsValid = false;
    invalidateElm(nameForm);
  }

  if (!validEmail(email.value)) {
    formIsValid = false;
    invalidateElm(email);
  }

  if (!message.value) {
    formIsValid = false;
    invalidateElm(message);
  }

  if (!subject.value) {
    formIsValid = false;
    invalidateElm(subject);
  }
};

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("clicked");
  validationInProgress = true;
  validateInputs();
  if (formIsValid) {
    contactForm.remove();
    success.classList.remove("hidden");
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});
