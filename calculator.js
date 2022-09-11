window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 100;
  document.getElementById("loan-years").value = 2;
  document.getElementById("loan-rate").value = 12;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let info = getCurrentUIValues();
  calculateMonthlyPayment(info);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  
  let principle = values['amount'];
  let interestRate = values['rate']/12;
  let numOfPayments = values['years']*12;

  let monthlyPayment = principle*interestRate/1-(1+interestRate)**(-numOfPayments);
  updateMonthly((Math.floor(monthlyPayment*100))/100);
  return (Math.floor(monthlyPayment*100))/100;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerHTML = `${monthly}`;
}
