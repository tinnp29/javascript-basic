// setTimeout, 2 tham số, hoặc nhiều hơn, 
// tham số thứ nhất là 1 fucntion, tham số thứu 2 là khoảng thời gian, giống nồi cơm điện :v
// setTimeout trả về một ID, trong trường hợp khi đang hẹn giờ chạy function,
// muốn hủy giữa chừng thì gán setTimeout() đến một biến, để khi clearTimeout() nó gọi :))


// setTimeout(fn, ms);
// clearTimeout(idsetTimeout)

function sayHello(){
  console.log('Alo');
}

var timeOut = setTimeout(sayHello, 2000);
console.log('Good Bye');
clearTimeout(timeOut);