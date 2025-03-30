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
        displayProducts(products); // Calls helper function to render products on page
    }
    catch(error) {
        handleError(error); // If error occurs -> catches and passes it to handleError
    };
}; // Function that fetches and displays product information
