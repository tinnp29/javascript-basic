// Shoes List
var shoesList = [

  { name: 'Adidas-01', category: 'adidas', price: 100, quantity: 5 },
  { name: 'Nike-01', category: 'nike', price: 200, quantity: 15 },
  { name: 'Balenciaga-01', category: 'balenciaga', price: 120, quantity: 12 },
  { name: 'Asics-01', category: 'asics', price: 300, quantity: 14 },
  { name: 'Lining-01', category: 'lining', price: 50, quantity: 32 },
  { name: 'Adidas-02', category: 'adidas', price: 1000, quantity: 12 },
  { name: 'Lining-02', category: 'lining', price: 140, quantity: 32 },
  { name: 'Balenciaga-02', category: 'balenciaga', price: 800, quantity: 50 },

];

// get select
var shoesType = $('#shoesType');
// get ul
var shoesListContainer = $('#shoesListContainer');
// console.log(shoesType);
// console.log(shoesListContainer);

render(shoesListContainer, shoesList);

// get Value Selected in Select
shoesType.on('change', function() {

  var selectedType = this.value;

  // filter()
  var shoesFiltered = shoesList.filter(function(shoes) {

    return shoes.category === selectedType;

  });

  // render shoes list filtered
  render(shoesListContainer, shoesFiltered);

});

// render shoes list
function render(container, items) {

  var newItems = items.map(function(item) {

    return  '<tr>' + 
              '<td>' + item.name + '</td>' +
              '<td>' + item.price + '$' + '</td>' + 
              '<td>' + item.quantity + '</td>' + 
            '</tr>';

  });

  var total = items.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.price * currentValue.quantity + '$<br>';
  }, 0);

  var show = [];
  show.push(newItems, total);

  container.html(show);

}
