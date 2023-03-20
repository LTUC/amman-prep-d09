'use strict';


function Drink(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
}

Drink.prototype.sayHello = function (min, max) {
    console.log("Hello")
}

const newObj = new Drink("coffee", "water");
console.log("before storing",newObj);


let jsonObj = JSON.stringify(newObj);
localStorage.setItem("obj", jsonObj);

let newJsonObj = localStorage.getItem("obj");
let JSObj = JSON.parse(newJsonObj);

console.log("after getting from local storage", JSObj);

const newJsbj = new Drink(JSObj.name, JSObj.ingredients);
console.log("after re-instantiation", newJsbj);
