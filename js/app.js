import { getProducts } from "./services/productService.js";
import { formatPrice } from "./utils/helper.js";

console.log("App.js is running");

async function loadProducts() {

    const products = await getProducts();

    console.log(products);

    const container = document.getElementById("products");
    console.log(container);

    products.forEach(function(product) {
          console.log(product.title);
          
        const card = document.createElement("div");

        card.className = "card";

       card.innerHTML = `
    <h3>${product.title}</h3>
    <p>${formatPrice(product.price)}</p>
`;

        container.appendChild(card);

    });

}

loadProducts();