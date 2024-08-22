const btnSubscribe = document.querySelector(".btn-subscribe");
const btnDismiss = document.querySelector(".btn-dismiss");
const subscribeCard = document.querySelector(".subscribe-card");
const dismissCard = document.querySelector(".dismiss-card");

const openDismissCard = () => {
  subscribeCard.classList.add("hidden");
  dismissCard.classList.remove("hidden");
};

const closeDismissCard = () => {
  dismissCard.classList.add("hidden");
  subscribeCard.classList.remove("hidden");
};

btnSubscribe.addEventListener("click", () => {
  subscribeCard.classList.remove("lg:flex");
});

btnDismiss.addEventListener("click", () => {
  subscribeCard.classList.add("lg:flex");
});

btnSubscribe.addEventListener("click", openDismissCard);
btnDismiss.addEventListener("click", closeDismissCard);
