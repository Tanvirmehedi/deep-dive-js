var arr = [1, 3, 4, 6, 78, 97, 54, 2];

// var filteredArray = arr.filter(function (value) {
//   return value > 4;
// });

// console.log(filteredArray);

function myFilter(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var result = myFilter(arr, function (value) {
  return value % 2 === 0;
});

var Odd = myFilter(arr, function (value) {
  return value % 2 === 1;
});

var big = myFilter(arr, function (value) {
  return value > 4;
});

console.log(big);

console.log(Odd);

console.log(result);
