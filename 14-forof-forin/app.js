
var contacts = [
  { name: 'Truong', number: 871634871 }, 
  { name: 'Thien', number: 23523571 }, 
  { name: 'Tuan Anh', number: 871634871 }, 
  { name: 'Quang', number: 871634871 }, 
  { name: 'Tien Anh', number: 871634871 }, 
];

// For of
for (var contact of contacts) {
  console.log(contact.name);
}

var myDog = {
  name: 'Lợn',
  weight: 10
};

console.log('=======');

// For in
for (var key in myDog) {
  console.log(key, myDog[key]);
}



