// 
// var promise = require('promise-fs');


// function readFile(path) {
//   return promise.readFile(path, { encoding: 'utf8' });
// }
// function onDone(data) {
//   console.log(data);
// }
// function onErr(err) {
//   console.log(err);
// }

// readFile('song1.txt')
//   .then(onDone)
//   .then(function() {
//     return readFile('song2.txt');
//   })
//   .then(onDone)
//   .catch(onErr);

// Promise có 2 phương thức then và catch, then sẽ trả về promise(chính nó) nên gọi then thoải mái :v
// Để có thể gọi tiếp then thì trước đó phải trả về 1 promise 


// Promise
// Khai báo 1 hàm thì trả về Promise, Promise nhận 1 tham số duy nhất là 1 function,
// function này có 2 tham số là resolve và reject, resolve được gọi khi function này thực hiện
// một việc nào đấy, reject được gọi khi function này thực hiện nhưng bị lỗi.
// resolve(data) - data truyền vào then, reject(err) - err truyền vào catch

var fs = require('fs');

function readFilePromise(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, { encoding: 'utf8' }, function(data, err) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise('song1.txt')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

