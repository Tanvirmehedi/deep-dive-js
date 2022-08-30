// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var arr3 = [7, 8, 9];

// function sum(arr) {
//   var add = 0;
//   for (var i = 0; i < arr.length; i++) {
//     add += arr[i];
//   }
//   console.log(add);
// }

// sum(arr1);
// sum(arr2);
// sum(arr3);

// function add(a, b) {
//   var result = a + b;

//   console.log(result);
// }

// add(4, 5);
// add(10, 30);
// add(20, 21);
// add(5, 6);
// add(8, 4);
// add(1, 4);
// add(5, 6);
// add(5, 7);
// add(9, 6);
// add(2, 3);

function arg() {
  // "array Like"
  console.log("array Like Output");
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }

  //   "Object Like"
  console.log("Object Like Output");
  for (var i of arguments) {
    console.log(i);
  }
}

arg(1, 3, 4);
