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
        console.error('Fetch failed: ', error); // Outputs error message is console
    });
}; // Function to fetch product information from API