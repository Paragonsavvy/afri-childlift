let selectedCause = null;  
let selectedAmount = 0;  

function selectCause(amount, cause, element) {  
  selectedCause = cause;  
  selectedAmount = amount;  

  // remove active state from all cards  
  document.querySelectorAll(".card").forEach(card => {  
    card.classList.remove("active");  
  });  

  // highlight selected card  
  element.classList.add("active");  

  // enable button  
  const btn = document.getElementById("continueBtn");  
  btn.disabled = false;  
}  

function continueDonation() {  
  if (!selectedCause) {  
    alert("Please select a cause first");  
    return;  
  }  

  const btn = document.getElementById("continueBtn");  
  btn.innerText = "Redirecting...";  

  setTimeout(() => {  
    window.location.href =  
      "donate.html?cause=" +  
      selectedCause +  
      "&amount=" +  
      selectedAmount;  
  }, 800);  
}