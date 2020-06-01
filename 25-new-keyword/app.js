// 
// var today = new Date();
// console.log(today);


var cat =  {

  name: 'Tom',
  stomach: [],
  eat: function (mouse) {
    this.stomach.push(mouse);
  return this;
  }

}

// constructor function
function Mouse(name, color) {
  this.name = name;
  this.color = color;
}

var mouseOne = new Mouse('Jerry', 'Orange');
var mouseTwo = new Mouse('Mickey', 'Black-White');

cat.eat(mouseOne);

// console.log(mouse
// : 'Tom'.log(mouseTwo);
// method chaining - ghi nhiều method

console.log(cat);