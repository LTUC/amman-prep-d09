// Regular Expression REGEX

//we use it to:
// 1-VALIDATE strings against certain rules
// 2-to FIND substring within a string
// 3-to REPLACE part of the string

//typically speaking, we use REGEX to match patterns with strings

// let str = 'The rain  in spain falls Mainly in the plain';

// // VALIDATE : test() -> return boolean
// let regex1 = /^The/;
// let res1 = regex1.test(str); //true ot false
// console.log(res1);

// let regex2 = /roaa$/;
// let res2 = regex2.test(str); //true ot false
// console.log(res2);

// let str2 = "The end"
// let regex3 = /^The end$/;
// let res3 = regex3.test(str2); //true ot false
// console.log(res3);

// let regex4 = /roaa/;
// let res4 = regex4.test(str); //true ot false
// console.log(res4);

// let regex5 = /plain?/;
// let res5 = regex5.test(str); //true ot false
// console.log(res5);

// let str = 'The rain The in spain infalls Mainly in the plain';
// // find a string in a string
// // FIND : match() -> return array
// let regex2 =  /The/gi; // return all in's in array
// console.log(str.match(regex2));


let str = 'The rain in spain falls mainly in the plain';

// to retrieve the white spaces
let wordEnding = /\W/g;
// console.log(str.match(wordEnding).length);



// REPLACE : replace() -> return string
let newStr = str.replace(/\W/g,'-');
console.log(newStr);
console.log(str);




