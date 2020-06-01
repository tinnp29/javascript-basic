// 
var arr = [1, 2, 3, 4];

var newArr = arr.reduce(function(x1, x2) {

  return x1 += x2;

});

// console.log(newArr);

// Ex:
var orders = [

  { name: 'A', price: 10, quantity: 3 },
  { name: 'B', price: 5, quantity: 4 },
  { name: 'C', price: 8, quantity: 2 },
  { name: 'D', price: 9, quantity: 1 },
  { name: 'E', price: 20, quantity: 2 }

];

var total = orders.reduce(function(accumulator, item) {

  console.log(accumulator, item.price);
  return accumulator + item.price * item.quantity;

}, 0);

console.log(total);
console.log('======');

var singers = ['Hiền Hồ', 'Hòa Minzy', 'Phương Ly'];

var newSingers = singers.reduce(function(accumulator, currentValue) {

  return accumulator + '(' + currentValue + ')';

}, '');
console.log(newSingers);








