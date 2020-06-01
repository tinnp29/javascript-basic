// 
var fs = require('fs');
var co = require('co');

// Đơn giản hóa lập trình bất đồng bộ trong JS, viết đẹp hơn, dể hiểu hơn
function readFilePromise(path) {

  return new Promise(function(resolve, reject) {
    fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

}

// cách 1:
// co(function*() { // Generator Function
//   var song1 = yield readFilePromise('song1.txt'); // yield được gọi với cả promise
//   var song2 = yield readFilePromise('song2.txt'); // yield được gọi với cả promise
//   var song3 = yield readFilePromise('song3.txt'); // yield được gọi với cả promise
//   // console.log(song1, song2, song3);
//   return [song1, song2, song3];
// })
//   .then(function(values) {
//     console.log(values);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// cách 2: co có method wrap, trong trường hợp muốn khai báo co(function*()) như một hàm và hàm này trả về promise
var readFiles = co.wrap(function*(files) {
  // có thể dùng yield để yield một array promise
  var values = yield files.map(function(file) {
    return readFilePromise(file);
  });
  return values;
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
  .then(function(files) {
    console.log(files);
  });



