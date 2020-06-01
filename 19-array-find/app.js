// 
var players = [

  { name: 'Ronaldo', age: 35 },
  { name: 'Messi', age: 33 },
  { name: 'Kaka', age: 36 },
  { name: 'Torres', age: 38 },
  { name: 'Newmar Jr', age: 29 },
  { name: 'Mbappe', age: 22 },

];

var newPlayers = players.find(function(player) {

  if(player.age >= 36) {

    return player.name; // result: Ronaldo

  }

});

console.log(newPlayers);