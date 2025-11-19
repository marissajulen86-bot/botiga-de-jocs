// Get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

// Save cart
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Render cart page
function renderCart() {
  const cart = getCart();
  const tbody = document.querySelector("#cart-table tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  cart.forEach((item, index) => {
    tbody.innerHTML += `
      <tr>
        <td><img src="${item.img}" alt="${item.name}"></td>
        <td>${item.name}</td>
        <td><input type="number" min="1" value="${item.qty}" data-index="${index}"></td>
        <td>€${item.price.toFixed(2)}</td>
        <td>€${(item.price * item.qty).toFixed(2)}</td>
        <td><button data-index="${index}">Eliminar</button></td>
      </tr>
    `;
  });

  // Handle quantity change
  tbody.querySelectorAll("input[type=number]").forEach(input => {
    input.addEventListener("change", e => {
      const i = e.target.dataset.index;
      cart[i].qty = parseInt(e.target.value);
      saveCart(cart);
      renderCart();
    });
  });

  // Handle delete
  tbody.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", e => {
      const i = e.target.dataset.index;
      cart.splice(i, 1);
      saveCart(cart);
      renderCart();
    });
  });

  // Update total
  const totalEl = document.getElementById("cart-total");
  if (totalEl) {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    totalEl.textContent = `Total: €${total.toFixed(2)}`;
  }
}

// Clear cart button (in cart page)
function clearCartPage() {
  localStorage.removeItem("cart");
  renderCart();
}

// Initial render
if (document.getElementById("cart-table")) renderCart();
