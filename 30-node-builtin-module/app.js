//  Node built-in Module

// require module, thường đặt tên biến giống tên module
var fs = require('fs');

// read file song.txt, lúc đọc mới phải encodeing
var song = fs.readFileSync('song.txt', { encoding: 'utf8' });

console.log(song);

// write file, viết thì không cần phải encoding nữa
fs.writeFileSync('./song1.txt', 'Chiều bâng khuâng trên phố dài');

var song1 = fs.readFileSync('song1.txt', { encoding: 'utf8' });
console.log(song1);



