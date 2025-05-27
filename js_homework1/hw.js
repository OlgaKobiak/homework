const services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",
  "Розбити скло": "200 грн",

  // Метод для обчислення загальної вартості
  price() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        let value = parseFloat(this[key]);
        total += value;
      }
    }
    return total;
  },

  // Метод для знаходження мінімальної ціни
  minPrice() {
    let prices = [];

    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        prices.push(parseFloat(this[key]));
      }
    }

    return Math.min(...prices);
  },

  // Метод для знаходження максимальної ціни
  maxPrice() {
    let prices = [];
    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        prices.push(parseFloat(this[key]));
      }
    }

    return Math.max(...prices);
  }
};
console.log("Загальна сума: " + services.price() + " грн");     // 440 грн
console.log("Мінімальна ціна: " + services.minPrice() + " грн"); // 60 грн
console.log("Максимальна ціна: " + services.maxPrice() + " грн");// 200 грн