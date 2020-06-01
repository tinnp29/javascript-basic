// Example 1
var me = {
  name: 'Tin Tom',
  age: 21, 
  sing: function() { // anonymous function
    return "Sẽ luôn thật gần bên em.. - by " + this.name; // this tượng trưng cho me
  }
};

console.log(me.sing());

// Example 2
var myCat = {

  name: 'Tom',
  age: 12,
  weight: 7,
  eat: function(fish) {
    return this.weight += fish.weight;
  }

};

var fish = { weight: 0.6 };

console.log("Before eating " + myCat.weight);
myCat.eat(fish);
console.log("After eating " + myCat.weight);

