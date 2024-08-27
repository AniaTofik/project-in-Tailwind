const btnSubscribe = document.querySelector(".btn-subscribe");
const btnDismiss = document.querySelector(".btn-dismiss");
const subscribeCard = document.querySelector(".subscribe-card");
const dismissCard = document.querySelector(".dismiss-card");
const emailPopup = document.querySelector(".emailPopup");
const emailInput = document.getElementById("emailInput");

const openDismissCard = () => {
  subscribeCard.classList.add("hidden");
  dismissCard.classList.remove("hidden");
};

const closeDismissCard = () => {
  dismissCard.classList.add("hidden");
  subscribeCard.classList.remove("hidden");
  emailInput.value = "";
  btnSubscribe.disabled = true;
};

function validateEmailInput() {
  const emailInput = document.getElementById("emailInput").value;
  const feedbackElement = document.getElementById("emailFeedback");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    feedbackElement.textContent = "";
    emailPopup.textContent = emailInput;
    btnSubscribe.disabled = false;
  } else {
    feedbackElement.textContent = "Valid email required";
    btnSubscribe.disabled = true;
  }
}

btnSubscribe.addEventListener("click", () => {
  subscribeCard.classList.remove("lg:flex");
});

btnDismiss.addEventListener("click", () => {
  subscribeCard.classList.add("lg:flex");
});

btnSubscribe.addEventListener("click", openDismissCard);
btnDismiss.addEventListener("click", closeDismissCard);
emailInput.addEventListener("input", validateEmailInput);
