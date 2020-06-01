// npm init
// npm install <moduleName> --save

var readLineSync = require('readline-sync');

// ex1:
var userName = readLineSync.question('What is your name ?');
console.log('Hello, ' + userName);

// ex2:
var players = [];
var player = readLineSync.question('Player Name:');
players.push(player);
console.log(players);

// ex3:
var singer = {};
var name = readLineSync.question("Singer\'s Name: ");
var age = readLineSync.question("Singer\'s Age:  ");
singer.name = name;
singer.age = age;
console.log(singer);


