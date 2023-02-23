// Filter
// .filter() similar to .map() -> iterate over an array and runs a callback for each element
// it will return a new array and it could be the same length of the original one or not
// the elements will be from the original array that match your criteria(your filter condition) 

let numbers = [0, 1, 2, 6, 7, 8, 0];
let evens = numbers.filter((n, i) => {
  if (n % 2 === 0) {
    return true;
  } //1,n,10,true (truthy value)

})
console.log(numbers);
console.log(evens);

// if(!(n%2)) { return true;} //1,n,10 (truthy value)


let family = [
  { name: 'Yousof', role: 'dad' },
  { name: 'Eman', role: 'mum' },
  { name: 'Mohammad', role: 'son' },
  { name: 'Ahmad', role: 'son' },
  { name: 'Leen', role: 'daughter' }
];

let sons = family.filter(person => {
  if (person.role === 'son') {
    // return 'son';
    return true;
  }
});
console.log(family);
console.log(sons);

// let sonNames = sons.map(p => {
//   return p.name
// });

let sonNames = sons.map(p=>p.name);
console.log(sonNames)