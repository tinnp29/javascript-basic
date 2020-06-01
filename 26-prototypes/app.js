// function Mouse (name) {
//   this.name = name;
// }

// Mouse.prototype.sayHello = function() {
//   return 'Hello, ' + this.name;
// }

// var mouseOne = new Mouse('Jerry');
// var mouseTwo = new Mouse('Mickey');

// console.log(mouseOne.sayHello());
// console.log(mouseOne.sayHello()

function Person(name, age) {
  this.type = "person";
  this.name = name;
  this.age = age;
}

Person.prototype.sing = function() {
  console.log(`Là lá la...`);
};

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);

// function đã thực thi
console.log(mrThinh.sing().alo = 'aloo');
// object
console.log(mrThinh.sing.alo = 'alo');
