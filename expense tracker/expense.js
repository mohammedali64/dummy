document.addEventListener("DOMContentLoaded", loadExpenses);

function addExpense() {
  const amount = document.getElementById("amount").value.trim();
  const description = document.getElementById("description").value.trim();
  const category = document.getElementById("category").value;

  if (!amount || !description) {
    alert("Please enter amount and description.");
    return;
  }

  const expense = {
    id: Date.now().toString(),
    amount,
    description,
    category
  };

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  showExpense(expense);
  clearForm();
}

function loadExpenses() {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.forEach(showExpense);
}

function showExpense(expense) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.setAttribute("data-id", expense.id);

  li.innerHTML = `
    <span>${expense.amount} - ${expense.description} - ${expense.category}</span>
    <div>
      <button class="btn btn-sm btn-warning me-2" onclick="editExpense('${expense.id}')">Edit</button>
      <button class="btn btn-sm btn-danger" onclick="deleteExpense('${expense.id}')">Delete</button>
    </div>
  `;

  document.getElementById("expenseList").appendChild(li);
}

function deleteExpense(id) {
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses = expenses.filter(e => e.id !== id);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  const li = document.querySelector(`li[data-id='${id}']`);
  if (li) li.remove();
}

function editExpense(id) {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const expense = expenses.find(e => e.id === id);

  document.getElementById("amount").value = expense.amount;
  document.getElementById("description").value = expense.description;
  document.getElementById("category").value = expense.category;

  deleteExpense(id); // update after editing
}

function clearForm() {
  document.getElementById("amount").value = '';
  document.getElementById("description").value = '';
  document.getElementById("category").value = 'Food';
}
