'use strict';

function Drink(name, ingredients, imgPath, isCold, isHot) {
    this.name = name;
    this.ingredients = ingredients;
    this.imgPath = imgPath;
    this.isHot = isHot;
    this.isCold = isCold;
    this.price = 0;
}

Drink.prototype.claculatePrice = function (min, max) {
    this.price = getRandomInt(min, max);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


Drink.prototype.render = function() {

    // const test = document.getElementsByClassName('prag');
    // console.log(test);

    const container = document.getElementById('drinks');
    console.log(container);

    // 1. create the element
    // 2. append it to it's parent
    // 3. add text content to it || attribuates

    const divEl = document.createElement('div');
    container.appendChild(divEl);

    // display drink name 
    const nameEl = document.createElement('h3');
    divEl.appendChild(nameEl);
    nameEl.textContent = this.name;

    //display drink price
    const priceEl = document.createElement('h5');
    divEl.appendChild(priceEl);
    priceEl.textContent = `Price: ${this.price}$`

    // display the drink ingredients
    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    ulEl.textContent = "Ingredients: "

    const ingArr = this.ingredients.split(',');
    for(let i = 0; i< ingArr.length; i++) {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = ingArr[i];
    }

    //display the drink img
    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src',this.imgPath);
    imgEl.width = "150";
    imgEl.height = "150";

    //display if the drink is hot and/or cold
    const pEl = document.createElement('p');
    divEl.append(pEl);

    if(this.isCold && this.isHot) {
        pEl.textContent = `${this.name} is available Hot and Cold`;
    } else if(this.isCold) {
        pEl.textContent = `${this.name} is available only Cold`;
    } else if (this.isHot) {
        pEl.textContent = `${this.name} is available only Hot`;
    } else {
        pEl.textContent = `${this.name} is not available`;
    }

    //display a line between the drinks
    const hrEl = document.createElement('hr');
    divEl.appendChild(hrEl);

}

// let newDrink = new Drink("Latte","milk,water","https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=x_3,y_1231,h_1684,w_2993,c_crop/w_800",true,true);
// newDrink.claculatePrice(1,5);
// newDrink.render();

// let newDrink2 = new Drink("espresso", "coffee,water", "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",false,true);
// newDrink2.claculatePrice(6,8);
// newDrink2.render();

//Events

let drinkForm = document.getElementById("drinkForm");
drinkForm.addEventListener('submit', addNewDrinkHandler);

function addNewDrinkHandler(event) {
    event.preventDefault();
    console.log(event);
    let drinkName = event.target.name.value;
    let ingredients = event.target.ingredients.value;
    let imgPath = event.target.imgUrl.value;
    let isCold = event.target.isCold.checked;
    let isHot = event.target.isHot.checked;

    let newDrink = new Drink(drinkName,ingredients,imgPath,isCold,isHot);
    newDrink.claculatePrice(1,10);
    newDrink.render();

    
}