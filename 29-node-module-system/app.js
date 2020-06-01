var Mouse = require('./mouse');
var Cat = require('./cat');

var jerry = new Mouse('orange');
var mickey = new Mouse('black');

var tom = new Cat();

console.log(jerry);
console.log(mickey);
console.log(tom);

tom.eat(jerry);

console.log('=================');

console.log(jerry);
console.log(mickey);
console.log(tom);


