// 
var numbers = [2, 4, 6, 1, 8, 5, 89];

// Ascending
var ascendingNumbers = numbers.sort(function(a, b) {
  return a - b;
});

console.log(ascendingNumbers);

// Descending
var descendingNumbers = numbers.sort(function(a, b) {
  return b - a;
});

console.log(descendingNumbers);

// 
var singers = [

  { name: 'Hiền Hồ', age: 23 },
  { name: 'Suni Hạ Linh', age: 25 },
  { name: 'Bích Phương', age: 26 },
  { name: 'Link Ka', age: 18 },
  { name: 'Trần Huyền My', age: 20 },

];

var ascendingAge = singers.sort(function(a, b) {
  return a.age - b.age;
});

console.log(ascendingAge);
console.log('===========');
// 
var shoes = [

  { name: 'Adidas', price: 100, stock: 24 },
  { name: 'Nike', price: 200, stock: 35 },
  { name: 'Balenciaga', price: 350, stock: 10 },
  { name: 'Asics', price: 60, stock: 5 },
  { name: 'Lining', price: 80, stock: 13 },

];

// Descending Expensive Price
var descendingExpensivePrice = shoes.sort(function(a, b) {

  return b.price - a.price;

});
console.log(descendingExpensivePrice);
console.log('=====');

// Descending Stock value from more to less expensive
var descendingExpensiveStockValue = shoes.sort(function(a, b) {

  return (b.price * b.stock) - (a.price * a.stock);

});
console.log(descendingExpensiveStockValue);