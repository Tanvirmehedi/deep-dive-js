// var rand = arr.map(function () {
//   return Math.random() * 100;
// });

// console.log(arr);

// console.log(rand);

// var sqrArr = arr.map(function (value) {
//   return value * value;
// });

// console.log(sqrArr);

var arr = [2, 5, 7];

function myMap(arr, cb) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var temp = cb(arr[i], i, arr);
    newArr.push(temp);
  }
  return newArr;
}

var squirArr = myMap(arr, function (value) {
  return value * value;
});

console.log(squirArr);

var qb = myMap(arr, function (value) {
  return value * value * value;
});

console.log(qb);

var m10 = myMap(arr, function (value) {
  return value * 10;
});

console.log(m10);
