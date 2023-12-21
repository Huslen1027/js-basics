let products = [
  {
    name: "samsung 22s",
    price: 700,
    category: "electronic",
    brand: "samsung",
    stoch: 10,
  },
  {
    name: "iphone X",
    price: 800,
    category: "electronic",
    brand: "apple",
    stoch: 3,
  },
  {
    name: "T-shirt",
    price: 900,
    category: "Fashion",
    brand: "adidas",
    stoch: 9,
  },

  {
    name: "3310",
    price: 50,
    category: "electronic",
    brand: "nokia",
    stoch: 1,
  },
  {
    name: "HP-770-windows-11",
    price: 1000,
    category: "electronic",
    brand: "HP",
    stoch: 3,
  },
  {
    name: "yamaha-RB",
    price: 3000,
    category: "bike",
    brand: "yamaha",
    stoch: 4,
  },
  {
    name: "laptop",
    price: 2000,
    category: "electronic",
    brand: "apple",
    stoch: 5,
  },
  {
    name: "redmi-note-pro",
    price: 300,
    category: "electronic",
    brand: "redmi",
    stoch: 3,
  },
  {
    name: "notebook",
    price: 2000,
    category: "electronic",
    brand: "apple",
    stoch: 7,
  },
  {
    name: "soks",
    price: 20,
    category: "Fashion",
    brand: "nike",
    stoch: 8,
  },
];
let findarr = products.map((a) => a.price);

findarr.sort((a, b) => {
  return a - b;
});
console.log(findarr);
// let max = 2000;
// let min = 500;
// let findarr = products.filter((a) => {
//   return a.price <= max && a.price >= min;
// });
// console.log(findarr);
