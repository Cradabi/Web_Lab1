document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        const img = button.dataset.img;
  
        const product = { id, name, price, img };
  
        // Получаем корзину из localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
        // Добавляем товар
        cart.push(product);
  
        // Сохраняем обратно
        localStorage.setItem("cart", JSON.stringify(cart));
  
        alert(`${name} добавлен в корзину!`);
      });
    });
  });