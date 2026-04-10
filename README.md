# JavaScript Sales System

A basic and structured system developed with Object-Oriented Programming (OOP) in pure JavaScript. This project implements the backend logic necessary to manage product inventories and process purchase orders for a business.

## 🚀 Features

- **Product Management (`Product Class`)**: Generation of items with unique identifiers, names, and prices, encapsulating their attributes.
- **Order Processing (`Order Class`)**: Grouping products into an invoice and automatically calculating total sales.
- **Integrated Validations**: Strict capacity control (maximum of 5 products per order) to simulate real business rules.
- **Static Identifiers**: Use of `static` attributes to maintain the global count of created instances (auto-incrementing IDs).

## 🛠️ Technologies

- JavaScript (ES6+)
- Node.js (For console execution)

## 💻 How to Run It

1. Make sure you have [Node.js](https://nodejs.org/) installed on your computer.
2. Download or clone this repository.
3. Open your terminal and navigate to the project folder.
4. Run the main file using the following command:

```bash
node sistemaDeVentas.js
```
