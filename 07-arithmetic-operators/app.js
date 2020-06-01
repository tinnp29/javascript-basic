// Increment, Decrement
/**
 * ++a: Trả về giá trị sau khi thay đổi
 * a++: Trả về giá trị trước khi thay đổi
 * */ 
var a = 1;
console.log(a++);

var b = 22;
console.log(b++ + ++b - b-- - --b);
// 22 + 24 - 24 - 22 = 0

var c = 14, d = 8;
console.log(c++ * --d - --c * d++);
// 14 * 7 - 14 * 7