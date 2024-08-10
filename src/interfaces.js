"use strict";
const category = {
    id: 10,
    name: "category name",
};
const product = {
    id: 23,
    name: "bread",
    price: 20,
    is_show: true,
    category: category,
};
console.group("Product");
console.log(`Name: ${product.name} Price: ${product.price} Category: ${product.category.id} ${product.category.name}`);
