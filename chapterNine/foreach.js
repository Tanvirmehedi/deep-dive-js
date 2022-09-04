var arr = [1, 2, 3, 45, 56];

// var sum = 0;

// arr.forEach(function (value, index, arr) {
//   sum += value;
// });

// console.log(sum);

function forDech(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

var sum = 0;

forDech(arr, function (value, index, arr) {
  sum += value;
});
console.log(sum);

