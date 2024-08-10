"use strict";
let n;
let b;
let s;
let user = {
    name: "Alex",
    age: 20,
};
let address = {
    city: "Odessa",
    country: "Ukraine",
};
let common = Object.assign(Object.assign({}, user), address);
console.group("User");
console.log(common.name);
console.log(common.age);
console.log(common.city);
console.log(common.country);
