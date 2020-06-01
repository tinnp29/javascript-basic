// 
var fs = require('fs');

// Async
// Syntax: 
// fs.readFile(path, {encoding}, callback(err, data));
console.log('Start');
fs.readFile('./song1.txt', { encoding: 'utf8' }, function(err, data) {
  console.log(data);
});
fs.readFile('./song2.txt', { encoding: 'utf8' }, function(err, data) {
  console.log(data);
});
console.log('End');
