'use strict';

/****************************** Arrays ***************************** */


// let colorsArray = new Array();
// console.log(colorsArray);

// let colorsArrays2 = [];
// console.log(colorsArrays2);

// let colorsArray3 = ["Red","Green","Blue"];
// console.log(colorsArray3);

// colorsArray3[1] = "Black"
// console.log(colorsArray3);

// let numbers = [1,2,"dsds"];

// console.log(numbers.length);


// let str = "roaa"
// console.log(str.length)

// let newArr = [false, [1,2,3], function() {alert("Hello")}];
// console.log(newArr[1][1]);

// let colorsArray3 = ["Red","Green","Blue"];
// console.log(colorsArray3.toString());
// colorsArray3[3] = "Black";
// console.log(colorsArray3);

// Arrays Methos
//push : add item at the end of the array
//pop : remove the last item
//shift : remove the first item
//unshift : add item at the beginning of the array
//toString : convert the array into string

// colorsArray3.push("Yellow");
// colorsArray3.push("Yellow", "black");
// console.log(colorsArray3);

// colorsArray3.pop();
// console.log(colorsArray3);

// console.log(colorsArray3.shift());

// colorsArray3.unshift("balck");
// console.log(colorsArray3);


/****************************** loops ***************************** */

/****************************** for loop ***************************** */

// let numArr = [1,2,2,3,5,6,8,7,9,100,25,32,55];


// for(let i = 0; i<= numArr.length-1; i++) {
//     console.log(numArr[i]);
// }

//infinit loop

// for(let i=0; i<5; i--) {
//     console.log("Hello");
// }


/****************************** while loop ***************************** */


// let inpt = prompt("enter your name");
// while(inpt != "Ahmad") {
//     console.log("Hello "+inpt);
//     inpt = prompt("enter your name");

// }

/****************************** do-while loop ***************************** */
// let inpt;
// do {
//     inpt = prompt("Enter your name please");
//     alert("Hello "+inpt);
// } while(inpt != "Roaa");


// let text = "";
// let i = 0;
// do {
//   text += i + " "; //text = text + i + " ";
//   i++;
// }
// while (i < 5);
// console.log(text);

/****************************** functions ***************************** */

// 2 way for declaring the functions

// Function Declaration


function printHelllo() {
    //function body
    console.log("Hello");
}
printHelllo(); //call the function
////////////////////////////////////////

let arr=[1,2,3,4];

function sum(aaa) {
    let sum = 0;
    for(let i=0;i<aaa.length;i++){
        sum = sum + aaa[i];
    }
    // console.log(sum);
    return sum;
}

let res = sum(arr);
console.log(res);

let arr2=[20,20,30,40];
let res2 = sum(arr2);
console.log(res2);

// Function Expression (Anonymous functions)