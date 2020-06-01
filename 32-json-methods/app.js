// // stringify
// var obj = {
//   name: 'HoaMatTroi',
//   age: 21,
//   isHandsome: true
// }
// console.log(JSON.stringify(obj));

// // parse
// var jsonString = '{"name": "HoaMatTroi","age": 21,"isHandsome": true}';
// console.log(JSON.parse(jsonString));

// Exercise:
// 1. Players
// 2. Create new Player
// 3. Save & Exit

// var readLineSync = require('readline-sync');
// var fs           = require('fs');

// var menu = function() {
//   var option = readLineSync.question('1. Players' + '\n' + '2. Create new Player' + '\n' + '3. Save & Exit' + '\n');

//   var player = {};

//   switch(option) {
//     case '1': 
//       var players = fs.readFileSync('./data.json', { encoding: 'utf8' });
//       console.log(players);
//       menu();
//       break;
//     case '2':
//       var name = readLineSync.question('Player Name: ');
//       var age  = readLineSync.question('Player Age: ');
//       var club = readLineSync.question('Player Club: ');
//       player.name = name;
//       player.age = age;
//       player.club = club;
//       console.log(player);
//       menu();
//       break;
//     case '3':
//       var playerJson = JSON.stringify(player);
//       console.log(playerJson);
//       fs.writeFileSync('./data.json', playerJson);
//       console.log('Thêm thành công !');
//       menu();
//       break;
//     default:
//       console.log('Choose Wrong !');
//       menu();
//       break;
//   }

// };

// menu();


// var s = 1;
// for(i = 1; i < 64; i++) {
//   s += Math.pow(2, i);
// }
// console.log(s);