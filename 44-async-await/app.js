/**
 * Async / Await là một tính năng của JS giúp chúng ta làm việc với các hàm bất đồng bộ
 * theo một cách thú vị và dễ hiểu hơn. Nó được xây dựng trên Promises và tương thích với
 * tất cả Promise dựa trên API. Trong đó:
 * Async: Khai báo một hàm bất đồng bộ: async function someName(){..};
 * 
*/


var fs = require('fs');

function readFilePromise(path) {

  return new Promise(function(resolve, reject) {
    return fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

}

// Async, giống như co, nhưng thay vì dùng yield thì ta dùng await
async function readFiles() {
  var song1 = await readFilePromise('song1.txt');
  var song2 = await readFilePromise('song2.txt');
  var song3 = await readFilePromise('song3.txt');

  return [song1, song2, song3];
}

readFiles()
  .then(function(values) {
    console.log(values);
  })
  .catch(function(err) {
    console.log(err);
  });

