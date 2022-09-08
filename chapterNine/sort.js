// var arr = [1, 4, 5, 7, 8, 2, 3, 4, 25, 22, 33, 44, 90, 89, 5.6, 7.4];

// arr.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// // console.log(arr); //ascending

// console.log(arr); //descending

var person = [
  {
    name: "Tanvir Mehedi",
    age: 26,
  },
  {
    name: "Silran Mia",
    age: 32,
  },
  {
    name: "Pokash Paul",
    age: 23,
  },
  {
    name: "Rithem Roya",
    age: 24,
  },
];

person.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    0;
  }
});

console.log(person);
