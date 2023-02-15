'use strict';
let drinkArr = [];
function Drink(name, ingredients, imgPath, isCold, isHot) {
    this.name = name;
    this.ingredients = ingredients;
    this.imgPath = imgPath;
    this.isHot = isHot;
    this.isCold = isCold;
    this.price = 0;
    drinkArr.push(this);
}

Drink.prototype.claculatePrice = function (min, max) {
    this.price = getRandomInt(min, max);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function render() {

    const container = document.getElementById('drinks');
    console.log(container);
    container.innerHTML = '';

    getDrinks();
    console.log(drinkArr);
    if(drinkArr == null) //localstorage is empty
    {
        drinkArr = [];
    }
    for (let i = 0; i < drinkArr.length; i++) {
        // const test = document.getElementsByClassName('prag');
        // console.log(test);

        

        // 1. create the element
        // 2. append it to it's parent
        // 3. add text content to it || attribuates

        const divEl = document.createElement('div');
        container.appendChild(divEl);

        // display drink name 
        const nameEl = document.createElement('h3');
        divEl.appendChild(nameEl);
        nameEl.textContent = drinkArr[i].name;

        //display drink price
        const priceEl = document.createElement('h5');
        divEl.appendChild(priceEl);
        priceEl.textContent = `Price: ${drinkArr[i].price}$`

        // display the drink ingredients
        const ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        ulEl.textContent = "Ingredients: "

        const ingArr = drinkArr[i].ingredients.split(',');
        for (let i = 0; i < ingArr.length; i++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = ingArr[i];
        }

        //display the drink img
        const imgEl = document.createElement('img');
        divEl.appendChild(imgEl);
        imgEl.setAttribute('src', drinkArr[i].imgPath);
        imgEl.width = "150";
        imgEl.height = "150";

        //display if the drink is hot and/or cold
        const pEl = document.createElement('p');
        divEl.append(pEl);

        if (drinkArr[i].isCold && drinkArr[i].isHot) {
            pEl.textContent = `${drinkArr[i].name} is available Hot and Cold`;
        } else if (drinkArr[i].isCold) {
            pEl.textContent = `${drinkArr[i].name} is available only Cold`;
        } else if (drinkArr[i].isHot) {
            pEl.textContent = `${drinkArr[i].name} is available only Hot`;
        } else {
            pEl.textContent = `${drinkArr[i].name} is not available`;
        }

        //display a line between the drinks
        const hrEl = document.createElement('hr');
        divEl.appendChild(hrEl);
    }

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

    let newDrink = new Drink(drinkName, ingredients, imgPath, isCold, isHot);
    newDrink.claculatePrice(1, 10);
    

    console.log(drinkArr);

    // convert into JSOn then store the Arr in the local storage
    let jsonArr = JSON.stringify(drinkArr);
    localStorage.setItem("allDrinks", jsonArr);

    render();

    //1. store the data
    // localStorage.setItem("drink",newDrink); //newDrink : JS obj
    // convert the js obj format into JSON format
    // let jsonObj = JSON.stringify(newDrink);
    // localStorage.setItem("drink", jsonObj);
    // console.log(jsonObj);


}

// // store data (key,value)
// localStorage.setItem('userName', 'roaa');
// localStorage.setItem('age', '27');
// localStorage.setItem('gender', 'female');

// //get data
// let userName = localStorage.getItem('userName'); // return value of 'userName' key
// console.log(userName);

function getDrinks() {
    //get drinks from localstorage
    // let drinks = localStorage.getItem("drink");
    // console.log(drinks);
    // //convert it back to js obj format
    // let jsObj = JSON.parse(drinks);
    // console.log(jsObj);

    //get the arr from the localstorage
    let jsonArr = localStorage.getItem("allDrinks");
    drinkArr = JSON.parse(jsonArr);
}

getDrinks();

localStorage.setItem("gender", "female");
localStorage.setItem("gender", "male");

render();