document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    function updateCartDisplay() {
      cartItemsContainer.innerHTML = "";
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Корзина пуста.</p>";
        totalPriceElement.textContent = "0";
        return;
      }
  
      let total = 0;
  
      cart.forEach((item, index) => {
        total += item.price;
  
        const card = document.createElement("div");
        card.className = "cart-item";
  
        card.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <div class="cart-item-info">
            <p><strong>${item.name}</strong></p>
            <p>Цена: ${item.price} руб.</p>
            <button class="remove-btn" data-index="${index}">Удалить</button>
          </div>
        `;
  
        cartItemsContainer.appendChild(card);
      });
  
      totalPriceElement.textContent = total;
    }

    cartItemsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-btn")) {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
      }
    });
  
    updateCartDisplay();
  });