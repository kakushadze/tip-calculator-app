let billInput = document.getElementById("bill_input");
let buttons = Array.from(document.getElementsByClassName("button"));
let peopleInput = document.getElementById("people_input");
let tipAmount = document.getElementById("tip_amount");
let totalAmount = document.getElementById("total_amount");
let resetButton = document.getElementById("reset");

let savedBillInput = 0;
let savedButtons = 0;
let savedPeopleInput = 0;

billInput.addEventListener("input", (event) => {
  savedBillInput = event.target.value;
  calculation();
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    savedButtons = parseInt(event.target.textContent);
    calculation();
  });
});

peopleInput.addEventListener("input", (event) => {
  savedPeopleInput = event.target.value;
  calculation();
});
resetButton.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  savedBillInput = 0;
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
});

function calculation() {
  let tipAmountResult =
    (savedBillInput * (savedButtons / 100)) / savedPeopleInput;
  let totalAmountResult = tipAmountResult + savedBillInput / savedPeopleInput;

  if (savedPeopleInput != 0) {
    tipAmount.textContent = `$${tipAmountResult.toFixed(2)}`;
    totalAmount.textContent = `$${totalAmountResult.toFixed(2)}`;
  }
}
