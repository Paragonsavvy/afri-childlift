let selectedAmount = 0;
let selectedCause = "";

function selectCause(amount, cause, card) {

  document.querySelectorAll(".card").forEach(c => {
    c.classList.remove("active");
  });

  card.classList.add("active");

  selectedAmount = amount;
  selectedCause = cause;

  document.getElementById("continueBtn").disabled = false;
}

function continueDonation() {
  alert(
    "Selected Cause: " +
    selectedCause +
    "\nAmount: ₦" +
    selectedAmount
  );
}