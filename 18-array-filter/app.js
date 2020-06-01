// 
var players = [
  { name: 'Ronaldo', age: 35 },
  { name: 'Messi', age: 33 },
  { name: 'Kaka', age: 38 },
  { name: 'Neymar', age: 29 },
  { name: 'Torres', age: 36 },
  { name: 'Mbappe', age: 22 },
];

players.filter(function(player) {

  if(player.age >= 30) {
    console.log(player.name);
  }

});