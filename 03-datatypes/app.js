// Number
var numOne = 1;
var numTwo = 0.5;

// String
var strOne = 'Hoa Mat Troi';
var strTwo = "Hoa Mat Troi";

// Boolean
var isHandsome = true;
var isHandsome = false;

// undefined - Khai báo chưa gán giá trị
var a;

// null - Khai báo và gán giá trị là null
var b = null;

// Object - Được dùng để mô tả đối tượng nào đó trong cuộc sống hằng ngày
/**

 * var objOne = {
  key: value
  };

 * Để thay đổi thuộc tính có 2 cách:
  1. obj.attribute
  2. obj['attribute'] 

 */

var objTwo = {
  name: 'Tin Tom',
  age: 21
};
console.log(objTwo);

// Array
/**
 * Terms: 
 *  - array: mảng
 *  - element: phần tử trong mảng
 *  - index: chỉ số phần tử
 *  - length: độ dài mảng
 *  
 *  - Dùng để lưu trữ list các phần tử giống nhau
 */
var arrayOne = [];
var array = new Array();

var playerFootball = {
  name: 'Ronaldo',
  age: 35
};
var playerBadminton = {
  name: 'Nguyễn Tiến Minh'
};
var playerBasketball = {
  name: 'Michael Jordan'
};

var athletes = [playerFootball, playerBadminton, playerBasketball];
console.log(athletes[0].age);

// Exercise
var students = [
  { name: 'Tin Tom', age: 21, isHandsome: true },
  { name: 'Duc Truong', age: 21, isHandsome: false },
  { name: 'Huu Quang', age: 21, isHandsome: false },
  { name: 'Tuan Anh', age: 21, isHandsome: false }
];
console.log(students);