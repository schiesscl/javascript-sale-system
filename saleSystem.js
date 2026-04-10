class Product {
    static productCounter = 0;
    constructor(name, price) {
        this._idProduct = ++Product.productCounter;
        this._name = name;
        this._price = price;
    }
    get idProduct() {
        return this._idProduct;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
    toString() {
        return `idProduct: ${this._idProduct}, name: ${this._name}, price: $${this._price}`;
    }
}

class Order {
    static orderCounter = 0;

    static get MAX_PRODUCTS(){
        return 5;
    }

    constructor(){
        this._idOrder = ++Order.orderCounter;
        this._products = [];
        // this._addedProductsCounter = 0;
    }

    get idOrder(){
        return this._idOrder;
    }

    addProduct(product){
        if(this._products.length < Order.MAX_PRODUCTS){
            this._products.push(product);
            // this._products[this._addedProductsCounter] = product;
        }else{
            console.log("\nCannot add more products");
        }
    }

    calculateTotal(){
        let totalSales = 0;
        for(let product of this._products){
            totalSales += product.price;
        }
        return totalSales;
    }

    showOrder(){
        let productsOrder = "";
        for(let product of this._products){
            productsOrder += `\n{${product.toString()}} `;
        }
        console.log(`\nOrder: ${this._idOrder}, Total: $${this.calculateTotal()}, Products: ${productsOrder}`);
    }
}

let product1 = new Product("Pants", 20000);
let product2 = new Product("Shirt", 30000);

let order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);
order1.showOrder();

let order2 = new Order();
let product3 = new Product('Belt', 5000);
order2.addProduct(product3);
order2.addProduct(product1);
order2.addProduct(product2);
order2.addProduct(product3);
order2.addProduct(product1);
order2.addProduct(product2);
order2.showOrder();