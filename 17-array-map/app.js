// 
var array = [2, 4, 6, 8];

var newArray = array.map(function(number) {
  return number * number;
});

console.log(array);
console.log(newArray);

// 
var rectangles = [
  { width: 10, height: 20 },
  { width: 53, height: 12 },
  { width: 12, height: 45 },
  { width: 34, height: 13 },
];

var newRectangles = rectangles.map(function(rectangle) {

  return rectangle.width * rectangle.height;

});

console.log("Diện tích các hình chữ nhật: " + newRectangles);