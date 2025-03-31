// Task 2: Fetch Products with .then()
const BASE_URL = 'https://www.course-api.com/javascript-store-products'; // Initial API information 

function fetchProductsThen() {
    return fetch (BASE_URL) // Fetches product information from API
    .then(response => {  
        if(!response.ok) { // If response is not ok -> throws out error response with status
            throw new Error (`HTTP error: ${response.status}`);
        };
        return response.json(); // Returns response.json
    })
    .then(product => {
        product.forEach(product => { // Applies to each array of products
            console.log(product.fields.name); // Console logs product names
        });
    })
    .catch(error => {
        console.error('Fetch failed: ', error); // Outputs error message in console
    });
}; // Function that fetches and console logs product information from API

// Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
    try {
        const response = await fetch(BASE_URL); // Fetches product data from API using await
        const products = await response.json(); // Converts API data into product infromation 
        displayProducts(products); // Calls display products function to render products on page
    }
    catch(error) {
        handleError(error); // If error occurs -> catches and passes it to handleError
    };
}; // Function that fetches and displays product information using async

// Task 4: Display the Products
function displayProducts(products) {
    const productContainer = document.getElementById("product-container"); // Grabs product container using getElementById
    productContainer.setAttribute("id", "productContainer")

    products.slice(0,5).forEach(product => { // Loops through first five products
        const productDiv = document.createElement("div"); // Creates div class for product
        productDiv.setAttribute("class", "product-card")

        const productName = document.createElement("h3"); // Creates header for product name
        productName.textContent = product.fields.name; // Adds product name

        const productPrice = document.createElement("p"); // Creates paragraph for product price
        productPrice.textContent = `$${product.fields.price}`; // Adds product price

        const productImage = document.createElement("img"); // Creates image for product image
        productImage.src = product.fields.image[0].thumbnails.small.url; // Adds product image

        productDiv.appendChild(productName); // Appends product name
        productDiv.appendChild(productPrice); // Appends product price
        productDiv.appendChild(productImage); // Appends product image

        productContainer.appendChild(productDiv); // Appends product div to product container
    });
}; // Function to display products on page

// Task 5: Reusable Error Handler
function handleError(error) {
    console.error(`An error occured: ${error}`); // Console logs error occurences
}; // Function to handle errors

// Task 6: Call Your Fetch Functions
fetchProductsThen(); // Calls fetch products then function
fetchProductsAsync(); // Calls fetch products async function