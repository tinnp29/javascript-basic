//
var player = {
  
  name: 'Ronaldo',
  shoot: function(callback) {
    console.log(this.name + " sút !!!");
    callback();
  }

} 

function goal() {
  console.log('Vàooooooooooooooooooo !!!');
}

player.shoot(goal);
