// 
var players = [

  { name: 'Ronaldo', age: 35 },
  { name: 'Messi', age: 33 },
  { name: 'Kaka', age: 37 },
  { name: 'Torres', age: 34 },
  { name: 'Neymar', age: 29 },

];

var fruits1 = ['Banana', 'Apple', 'Orange', 'Strawberry'];
var fruits2 = ['Coconut', 'Durian', 'Litchi Fruit'];

// concat()
var newFruits = fruits1.concat(fruits2);
console.log(newFruits);

// push()
newFruits.push('Custard Apple');
console.log(newFruits);

// pop()
newFruits.pop();
console.log(newFruits);

// shift()
newFruits.shift();
console.log(newFruits);

// unshift()
newFruits.unshift('Logan');
console.log(newFruits);

// slice()
console.log(newFruits.slice(2, -2));

// splice()
newFruits.splice(1, 5);
console.log(newFruits);

// split()
var str = "Nguyen Phu Tin";
var newStr = str.split(" ", 1);
console.log(str);
console.log(newStr);