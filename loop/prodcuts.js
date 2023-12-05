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
let findMostExpensive = products[0].price;
for (i = 0; i < 10; i = i + 1) {
  if (findMostExpensive < products[i].price) {
    findMostExpensive = products[i].price;
  }
}
console.log(findMostExpensive);

// function findByCategory(cate) {
//   for (let i = 0; i < 10; i = i + 1) {
//     if (products[i].category == cate) {
//       console.log(products[i]);
//     }
//   }
// }
// findByCategory("bike");

// function setSale(saleAmount) {
//   for (let a = 0; a < 10; a = a + 1) {
//     products[i].price = products[i].price * (1 - saleAmount / 100);
//   }
// }
// setSale(20);
// console.log(products);

// products[0].price = products[0].price * 0.9;
// products[1].price = products[1].price * 0.9;
// products[2].price = products[2].price * 0.9;
// products[3].price = products[3].price * 0.9;
// products[4].price = products[4].price * 0.9;
// products[5].price = products[5].price * 0.9;
// products[6].price = products[6].price * 0.9;
// products[7].price = products[7].price * 0.9;
// products[8].price = products[8].price * 0.9;
// products[9].price = products[9].price * 0.9;

// console.log(products);
