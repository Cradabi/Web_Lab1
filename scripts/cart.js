document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    function updateCartDisplay() {
      cartItemsContainer.innerHTML = "";
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p class='empty-cart'>Корзина пуста.</p>";
        totalPriceElement.textContent = "0";
        return;
      }
  
      let total = 0;
  
      cart.forEach((item, index) => {
        total += item.price;
  
        const card = document.createElement("article");
        card.className = "product-card";
  
        card.innerHTML = `
          <figure>
            <img src="${item.img}" alt="${item.name}">
            <figcaption>${item.name}</figcaption>
          </figure>
          <p>Цена: ${item.price} руб.</p>
          <button class="remove-btn" data-index="${index}">Удалить</button>
        `;
  
        cartItemsContainer.appendChild(card);
      });
  
      totalPriceElement.textContent = total;
    }
  
    // Удаление товара по кнопке
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