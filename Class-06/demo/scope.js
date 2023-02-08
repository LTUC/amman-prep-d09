'use strict';

//JS has 3 types of scope:
// 1. Block scope
// 2. Function scope
// 3. Global scope


//Hoisting moving all declaration (var,fun)to the top of the code
test();
console.log(R);
let R=55;


// 1. Block scope
{
    let x = 1;
}

// console.log(x); // x can NOT be used here


// 2. Function scope

function test() {
    let y = 10;
    console.log(y);
}
test();
// console.log(y);  // y can NOT be used here


// 3. Global scope
let z = 20;

console.log(z);

function test2() {
    let z =50; //local var
    z=40; //changing the value only
    console.log("test2 function",z);
}
test2();

console.log(z);

