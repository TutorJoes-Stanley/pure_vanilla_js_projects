const balance = document.querySelector("#balance");
const inc_amt = document.querySelector("#inc-amt");
const exp_amt = document.querySelector("#exp-amt");
const trans = document.querySelector("#trans");
const form = document.querySelector("#form");
const description = document.querySelector("#desc");
const amount = document.querySelector("#amount");
/*
const dummyData = [
  { id: 1, description: "Flower", amount: -20 },
  { id: 2, description: "Salary", amount: 300 },
  { id: 3, description: "Book", amount: -10 },
  { id: 4, description: "Camera", amount: 150 },
  { id: 5, description: "Petrol", amount: -250 },
];

let transactions = dummyData;
*/

const localStorageTrans = JSON.parse(localStorage.getItem("exp_inc"));

let transactions = localStorage.getItem("exp_inc") !== null ? localStorageTrans : [];

function loadTransactionDetails(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");
  item.classList.add(transaction.amount < 0 ? "exp" : "inc");
  item.innerHTML = `
    ${transaction.description}
    <span>${sign} ${Math.abs(transaction.amount)}</span>
    <button class="btn-del" onclick='removeTrans( ${transaction.id})'>x</button>
  `;
  trans.appendChild(item);
}

function removeTrans(id) {
  if (confirm("Are you sure you want to delete Transcation?")) {
    transactions = transactions.filter((transaction) => transaction.id != id);
    updateLocalStorage();
    config();
  } else {
    return;
  }
}
function updateAmount() {
  const amounts = transactions.map((transaction) => transaction.amount);
  //console.log(amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  balance.innerText = `₹ ${total}`;

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  inc_amt.innerText = `₹ ${income}`;

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  exp_amt.innerText = `₹ ${Math.abs(expense)}`;
}
function config() {
  trans.innerHTML = "";
  transactions.forEach(loadTransactionDetails);
  updateAmount();
}
function addTransaction(e) {
  e.preventDefault();
  if (description.value.trim() == "" || amount.value.trim() == "") {
    alert("Please Enter Description and amount");
  } else {
    const transaction = {
      id: uniqueId(),
      description: description.value,
      amount: +amount.value,
    };
    transactions.push(transaction);
    loadTransactionDetails(transaction);
    description.value = "";
    amount.value = "";
    updateAmount();
    updateLocalStorage();
  }
}

function uniqueId() {
  return Math.floor(Math.random() * 10000000);
}

form.addEventListener("submit", addTransaction);
window.addEventListener("load", function () {
  config();
});

function updateLocalStorage() {
  localStorage.setItem("exp_inc", JSON.stringify(transactions));
}
