/**
 * Khai báo module fs & readline-sync
 * fs: dùng để đọc / ghi file
 * readline-sync.question: đặt câu hỏi
*/
var fs = require('fs');
var readLineSync = require('readline-sync');

// Array & source data
var players = [];
var sourceData = './data.json';

// Gọi hàm này ngay trong hàm main
// Hàm này sẽ đọc file json và convert sang obj
function loadData() {
  var content = fs.readFileSync(sourceData, { encoding: 'utf8' });
  players = JSON.parse(content);
}

//
function showAllPlayer() {
  for(var player of players) {
    console.log(player.name, player.age);
  }
}

// 
function createNewPlayer() {
  var name = readLineSync.question('Name:');
  var age = readLineSync.question('Age:');

  var player = {
    name: name,
    age: parseInt(age)
  };
  players.push(player);
}

// 
function saveAndExit() {
  var content = JSON.stringify(players);
  fs.writeFileSync(sourceData, content);
}

// 
function menu() {
  console.log('1. Show All Players');
  console.log('2. Create New Player');
  console.log('3. Save and Exit');

  var option = readLineSync.question('>');
  switch(option) {
    case '1':
      showAllPlayer();
      menu();
      break;
    case '2':
      createNewPlayer();
      menu();
      break;
    case '3':
      saveAndExit();
      break;
    default:
      console.log('Wrong Option !');
      break;
  }
}

function main() {
  loadData();
  menu();
}

main();