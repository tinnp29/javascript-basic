var fs = require('fs');

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

// readFilePromise('./song1.txt')
//   .then(function(data) {
//     console.log(data);
//     return readFilePromise('./song2.txt');
//   })
//   .then(function(data) {
//     console.log(data);
//     return readFilePromise('./song3.txt');
//   })
//   .then(function(data) {
//     console.log(data);
//   });

// Promise.all, nhận vào các promise, trả về promise nên dùng được then, catch, finally
// then được gọi khi promise resolved, resolve ra mộ kết quẩ là một arr, tập hợp của các promise
Promise.all([
  readFilePromise('./song1.txt'),
  readFilePromise('./song2.txt'),
  readFilePromise('./song3.txt')
])
  .then(function(values) {
    for (var value of values) {
      console.log(value);
    }
  });