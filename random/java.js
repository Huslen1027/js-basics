const products = [
  {
    name: "Laptop",
    price: 999.99,
    brand: "ExampleBrand",
    image_url: "https://via.placeholder.com/300",
    description:
      "Powerful laptop with high-performance specs for work and entertainment.",
  },
  {
    name: "Smartphone",
    price: 499.5,
    brand: "TechCo",
    image_url: "https://via.placeholder.com/300",
    description:
      "Cutting-edge smartphone with advanced features and a sleek design.",
  },
  {
    name: "Headphones",
    price: 99.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Comfortable headphones with excellent sound quality for immersive listening experiences.",
  },
  {
    name: "Camera",
    price: 799.0,
    brand: "PhotoTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Professional-grade camera capturing high-resolution photos and videos.",
  },
  {
    name: "Tablet",
    price: 299.99,
    brand: "TabCo",
    image_url: "https://via.placeholder.com/300",
    description:
      "Portable tablet perfect for entertainment and productivity on-the-go.",
  },
  {
    name: "Smartwatch",
    price: 199.5,
    brand: "WearableTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Smartwatch with health-tracking features and a stylish design.",
  },
  {
    name: "Desktop Computer",
    price: 1299.0,
    brand: "ExampleBrand",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-performance desktop computer for demanding tasks and gaming.",
  },
  {
    name: "Printer",
    price: 149.0,
    brand: "PrintTech",
    image_url: "https://via.placeholder.com/300",
    description: "Versatile printer suitable for both home and office use.",
  },
  {
    name: "Keyboard",
    price: 49.99,
    brand: "InputTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Ergonomic keyboard designed for comfortable and efficient typing.",
  },
  {
    name: "Mouse",
    price: 29.99,
    brand: "InputTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Responsive and precise mouse for seamless navigation and control.",
  },
  {
    name: "Speaker System",
    price: 399.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description: "Immersive speaker system delivering rich and clear audio.",
  },
  {
    name: "External Hard Drive",
    price: 129.0,
    brand: "StorageTech",
    image_url: "https://via.placeholder.com/300",
    description: "High-capacity external hard drive for secure data storage.",
  },
  {
    name: "Gaming Console",
    price: 399.0,
    brand: "GameTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Next-gen gaming console offering stunning graphics and gaming experiences.",
  },
  {
    name: "Router",
    price: 79.99,
    brand: "ConnectTech",
    image_url: "https://via.placeholder.com/300",
    description: "Reliable router providing high-speed internet connectivity.",
  },
  {
    name: "Monitor",
    price: 349.5,
    brand: "DisplayTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-resolution monitor delivering vibrant and clear visuals.",
  },
  {
    name: "Scanner",
    price: 89.0,
    brand: "ScanTech",
    image_url: "https://via.placeholder.com/300",
    description: "Efficient scanner for digitizing documents and images.",
  },
  {
    name: "Fitness Tracker",
    price: 79.0,
    brand: "FitTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Fitness tracker monitoring activity levels and health metrics.",
  },
  {
    name: "Wireless Earbuds",
    price: 129.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Wireless earbuds with premium audio quality and long battery life.",
  },
  {
    name: "Security Camera",
    price: 199.99,
    brand: "SecureTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-definition security camera for home or business surveillance.",
  },
  {
    name: "Electric Toothbrush",
    price: 59.5,
    brand: "DentalTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Advanced electric toothbrush for thorough and effective dental care.",
  },
];
const root = document.getElementById("root");
/**
 * <div class ="card"
 * <p class ="card_name">Iphone</p>
 * <p>1999</p>
 * <img
 * src ="image"
 * alt = ""
 * />
 * </div>
 */

// const cardDiv = document.createElement("div");
// const cardName = document.createElement("h5");
// const cardImg = document.createElement("img");
// const cardDesp = document.createElement("p");
// const cardPrice = document.createElement("p");
// const cardBrand = document.createElement("p");

// cardDiv.setAttribute("class", "card");
// cardName.setAttribute("class", "card_name");
// cardImg.setAttribute("src", `${products[0].image_url}`);

// cardName.innerText = products[0].name;
// cardPrice.innerText = products[0].price;
// cardBrand.innerText = products[0].brand;
// cardDesp.innerText = products[0].description;

// cardDiv.appendChild(cardName);
// cardDiv.appendChild(cardPrice);
// cardDiv.appendChild(cardDesp);
// cardDiv.appendChild(cardBrand);
// cardDiv.appendChild(cardImg);
// root.appendChild(cardDiv);

function createElement(prod) {
  const carddiv = document.createElement("div");
  carddiv.setAttribute("class", "card");
  const cardimg = document.createElement("img");
  cardimg.setAttribute("src", prod.image_url);
  carddiv.appendChild(cardimg);
  const cardname = document.createElement("p");
  cardname.setAttribute("class", "cName");
  cardname.innerText = prod.name;
  carddiv.appendChild(cardname);
  const cardBrand = document.createElement("p");
  cardBrand.setAttribute("class", "Brand");
  cardBrand.innerText = prod.brand;
  carddiv.appendChild(cardBrand);
  const cardPrice = document.createElement("p");
  cardPrice.setAttribute("class", "price");
  cardPrice.innerText = prod.price;
  carddiv.appendChild(cardPrice);
  const cardDesk = document.createElement("p");
  cardDesk.setAttribute("class", "desk");
  cardDesk.innerText = prod.description;
  carddiv.appendChild(cardDesk);
  return carddiv;
}
products.map((i) => {
  return root.appendChild(createElement(i));
});
