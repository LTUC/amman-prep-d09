// array.map( fn(v,i) {} ) Much like array.forEach()

// The array.map() function iterates over an array and runs a call back for each element. 

// The callback receives the value and the index of the array element as a parameter.

// The difference is that `.map()` will always return you a **new array** of the **same length** as the original array comprised of your return values

let numbers = [2, 3, 4, 5];


// using ForEach
let squares = [];
numbers.forEach((item,idx)=>{
  let newNu = item*item;
  squares.push(newNu);

});
console.log(numbers);
console.log(squares);


// let squares = numbers.map((item,i)=>{
//   console.log(i);
//   return item*item;
// });
// console.log(numbers);
// console.log(squares);




// let people = [
//   { name1: "Yousof", role: "Dad" },
//   { name1: "Eman", role: "Mom" },
//   { name1: "Roaa", role: "Kid" },
//   { name1: "Mohammad", role: "Kid" },
// ];


// let names = people.map((person)=>{
//   // return (person.name1)+'!';
//   if(person.name1 === 'Yousof') {
//     return person.name1;
//   }
//   else {
//     return 'not Yousof';
//   }
// })

// console.log(names);

let people = [
  { name1: "Yousof", role: "Dad" },
  { name1: "Eman", role: "Mom" },
  { name1: "Roaa", role: "Kid" },
  { name1: "Mohammad", role: "Kid" },
];

let names = people.map((person) => {
  if (person.name1 === 'Yousof') {
    return person.name1;
  }

})

// console.log(names);

// let names = people.map(person=> person.name1)
// console.log(names);




// **If you return nothing ... **
// let numbers2 = [2, 3, 4, 5];
// let newArr = numbers2.map((item,i)=>{

// });
// console.log(newArr);