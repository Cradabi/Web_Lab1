document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("order-form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const address = document.getElementById("address").value.trim();
      const phone = document.getElementById("phone").value.trim();
  
      if (!firstName || !lastName || !address || !phone) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }

      localStorage.removeItem("cart");
  
      alert("Спасибо! Ваш заказ успешно оформлен.");
  
      form.reset();

      window.location.href = "index.html";
    });
  });