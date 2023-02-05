'use strict';

/* 
1- variabels & data type
2- 
*/

// numbers
var x=10;
var y=1.5;
var num1 = 5+10;
var num2 = 10-1;
var num3 = Math.sqrt(25);
var res= x+y;


// strings
var name1="Roaa";
var name2='Alaa';
var name3=`Toqa`;

name1 = "Ahmad";

var res2 = name1 + " " + name2; //strings contatinations
let name4 = "aaa";
const str="sara";
// str="rr"; error

// console.log("Hello");
// console.log(res2);
// console.log(x);
// console.log(str);

//booleans
var bollvar = true;
var boolvar2 = false;

var test =undefined;

var test2 = null;

// console.log(test);
// console.log(test2);

//Logical operators

let b1 = !false;
console.log(b1);
let b2 = true;
console.log(b1 && b2);

let b3 = false || true;
console.log("b3",b3);
var teststr = "roaa";
var comRes = false && teststr
console.log(comRes);

// popup boxes
/*
1- alert
2- confirm box
3- prompt (take input from the user)
*/

// alert("Hi from ASAC")

// var confirMsgResult = confirm("Are your sure");
// console.log(confirMsgResult);


var inputRes = prompt("Please enter your name: ");
console.log(inputRes);

// Conditional Statements

if(inputRes == "roaa")
{
    console.log("Hello Roaa, Nice to meet you");
}
else
{
    console.log("soory, i don't know you");
}

var value1 = 4;

if (value1 >= 2+2)
{
    console.log("Hello")
}
else
{
    console.log("it is not")
}


// switch statement

var z=12;

switch (z) {
    case 0:
        console.log("the vale = 0");
        break;
    case 5:
        console.log("value = 5");
        break;
    case 12:
        console.log("value = 12");
        break;
    default:
        console.log("default case");

}

var varB = 1;
switch (varB) {
    case 0:
    case 1:
        console.log("it is 1 or 0");
        break;
    default:
        console.log("is is not 0 and not 1");
}


var varC = prompt("Enter a number :");

switch(varC % 2) {
    case 0:
        console.log("even")
        break;
    case 1:
        console.log("odd");
        break;
    default:
        console.log("invalid value");
}

var firstNum = 1;
var secondNum = "1";
if(firstNum >= secondNum) {
    console.log("the numbers are equal");
}
else
{
    console.log("the numbers are not equal");
}