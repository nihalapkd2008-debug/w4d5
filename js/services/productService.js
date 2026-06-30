export async function getProducts() {

    console.log("Fetching API...");

    const response = await fetch("https://fakestoreapi.com/products");

    console.log(response);

    const data = await response.json();

    console.log(data);

    return data;
}