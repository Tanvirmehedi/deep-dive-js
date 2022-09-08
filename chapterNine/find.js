// var result = arr.find(function (value) {
//   return value.id == 6;
// });

// console.log(result);

// var findingIndex = arr.findIndex(function (value) {
//   return value.id == 6;
// });

// console.log(findingIndex);

var arr = [
  { id: "1", name: "Mai Goodman", rating: 14.9848 },
  { id: "2", name: "Kelsey Galloway", rating: 14.4513 },
  { id: "3", name: "Delaney Byrd", rating: 15.5698 },
  { id: "4", name: "Hugo", rating: 8.048 },
  { id: "6", name: " Melton", rating: 8.1128 },
  { id: "7", name: "Augusta Tomas", rating: 8.1128 },
  { id: "8", name: "Jerry Wilson", rating: 8.1128 },
  { id: "9", name: "Denial Koy", rating: 8.1128 },
  { id: "10", name: "Brows lee", rating: 8.1128 },
];

function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return arr[i];
    }
  }
}

var x = myFind(arr, function (value) {
  return value.id == 6;
});

console.log(x);

function myFindIndex(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return i;
    }
  }
}
var y = myFindIndex(arr, function (value) {
  return value.id == 6;
});

console.log(y);
