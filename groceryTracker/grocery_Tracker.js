function calculateTotalAmount() {

  let a1 = document.getElementById("amount1").value;
  let a2 = document.getElementById("amount2").value;
  let a3 = document.getElementById("amount3").value;
  let totalAmount = parseFloat(a1) + parseFloat(a2) + parseFloat(a3);

  document.getElementById("result").innerText = `The total amount spent on groceries is: \$${totalAmount}`;
}