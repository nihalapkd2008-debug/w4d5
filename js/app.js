import { getProducts } from "./services/productService.js";
import { formatPrice } from "./utils/helper.js";

async function loadProducts() {

    const products = await getProducts();

    const container = document.getElementById("products");

    products.forEach(function(product) {

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