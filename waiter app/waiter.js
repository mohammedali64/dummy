const API_URL = "https://crudcrud.com/api/e2407e1f6b0744f09972eac90ee64792/orders"; // Replace with your endpoint

// Load orders on page load
window.addEventListener("DOMContentLoaded", () => {
  axios.get(API_URL)
    .then((response) => {
      response.data.forEach(order => displayOrder(order));
    })
    .catch((error) => console.error("Error fetching orders", error));
});

// Add new order
function addOrder() {
  const dishName = document.getElementById('dishName').value.trim();
  const dishPrice = document.getElementById('dishPrice').value.trim();
  const table = document.getElementById('tableSelect').value;

  if (!dishName || !dishPrice) {
    alert("Please enter dish name and price.");
    return;
  }

  const order = {
    dishName,
    dishPrice,
    table
  };

  axios.post(API_URL, order)
    .then((res) => {
      displayOrder(res.data);
    })
    .catch((err) => console.error("Error saving order", err));

  document.getElementById('dishName').value = "";
  document.getElementById('dishPrice').value = "";
}

function displayOrder(order) {
  const ul = document.getElementById(order.table);
  const li = document.createElement('li');
  li.textContent = `${order.dishName} - ₹${order.dishPrice} `;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = () => {
    axios.delete(`${API_URL}/${order._id}`)
      .then(() => {
        li.remove();
      })
      .catch((err) => console.error("Delete failed", err));
  };

  li.appendChild(deleteBtn);
  ul.appendChild(li);
}
