var arr = [1, 2, 3, 4, 5, 6, 56];

// var sum = arr.reduce(function (preNo, currNo) {
//   return preNo + currNo;
// });

// console.log(sum);

// var max = arr.reduce(function (preNo, currNo) {
//   return Math.max(preNo, currNo);
// });

// console.log(max);

// var min = arr.reduce(function (preNo, currNo) {
//   return Math.min(preNo, currNo);
// });

// console.log(min);

var arr = [1, 2, 3, 4, 5, 6, 56];

function myReduce(arr, cb, acc) {
  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }

  return acc;
}

var sum = myReduce(
  arr,
  function (preNo, currNo) {
    return preNo + currNo;
  },
  0
);

console.log(sum);

var max = myReduce(
  arr,
  function (preNo, currNo) {
    return Math.max(preNo, currNo);
  },
  arr[0]
);

var min = myReduce(
  arr,
  function (preNo, currNo) {
    return Math.min(preNo, currNo);
  },
  arr[0]
);

console.log(max);
console.log(min);
