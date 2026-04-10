/**
 * Class representing a Product in the store
 */
class Product {
    // Static property to keep track of the total number of products created
    static productCounter = 0;

    /**
     * Create a product
     * @param {string} name - Name of the product
     * @param {number} price - Numerical price of the product
     */
    constructor(name, price) {
        // Increment global counter and assign as unique ID
        this._idProduct = ++Product.productCounter;
        this._name = name;
        this._price = price;
    }

    // Getter for product ID (read-only)
    get idProduct() {
        return this._idProduct;
    }

    // Getter for product name
    get name() {
        return this._name;
    }

    // Setter for product name
    set name(name) {
        this._name = name;
    }

    // Getter for product price
    get price() {
        return this._price;
    }

    // Setter for product price
    set price(price) {
        this._price = price;
    }

    /**
     * Convert product details to a formatted string
     * @returns {string} String representation of the product
     */
    toString() {
        return `idProduct: ${this._idProduct}, name: ${this._name}, price: $${this._price}`;
    }
}

/**
 * Class representing a Sales Order containing multiple products
 */
class Order {
    // Static property to track total orders created for unique IDs
    static orderCounter = 0;

    /**
     * Get the maximum allowed products per order
     * @returns {number} Constant limit of 5 products
     */
    static get MAX_PRODUCTS(){
        return 5;
    }

    constructor(){
        // Assign unique order ID and initialize empty product array
        this._idOrder = ++Order.orderCounter;
        this._products = [];
    }

    // Getter for order ID
    get idOrder(){
        return this._idOrder;
    }

    /**
     * Add a product to the order if limit is not reached
     * @param {Product} product - The product instance to add
     */
    addProduct(product){
        // Check if the current number of products is under the limit
        if(this._products.length < Order.MAX_PRODUCTS){
            this._products.push(product);
        } else {
            // Log warning if the limit has been reached
            console.log("\nCannot add more products");
        }
    }

    /**
     * Sum the prices of all products in the order
     * @returns {number} Total sales amount
     */
    calculateTotal(){
        let totalSales = 0;
        // Iterate through each product and accumulate price
        for(let product of this._products){
            totalSales += product.price;
        }
        return totalSales;
    }

    /**
     * Output order summary and product list to the console
     */
    showOrder(){
        let productsOrder = "";
        // Build a detailed list of products included in the order
        for(let product of this._products){
            productsOrder += `\n{${product.toString()}} `;
        }
        // Print order ID, total calculation, and the product list
        console.log(`\nOrder: ${this._idOrder}, Total: $${this.calculateTotal()}, Products: ${productsOrder}`);
    }
}

// --- Testing the Implementation ---

// Create initial product instances
let product1 = new Product("Pants", 20000);
let product2 = new Product("Shirt", 30000);

// Create the first order and add products
let order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);
order1.showOrder(); // Display Order 1 summary

// Create the second order and test the product limit
let order2 = new Order();
let product3 = new Product('Belt', 5000);

// Adding multiple products to order 2
order2.addProduct(product3);
order2.addProduct(product1);
order2.addProduct(product2);
order2.addProduct(product3);
order2.addProduct(product1);
// This 6th product should trigger the "Cannot add more products" message
order2.addProduct(product2); 

order2.showOrder(); // Display Order 2 summary