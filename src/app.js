document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Pecel", img: "1.jpg", price: "15000" },
      { id: 2, name: "Plecing", img: "2.jpg", price: "10000" },
      { id: 3, name: "Rujak 1", img: "3.jpg", price: "12000" },
      { id: 4, name: "Rujak 2", img: "4.jpg", price: "13000" },
      { id: 5, name: "Rujak 3", img: "5.jpg", price: "25000" },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
    },
  });
});

// konversi ke rumiah

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
