function add(a, b) {
  return a + b;
}

// 1. A function can be stored in a variable.

var sum = add;

console.log(sum(2, 4));

// 2. A function can be Stored in an array

var arr = [];

arr.push(add);
console.log(arr[0](6, 8));

// 3. A function can be Stored in an object

var obj = {
  sum: add,
};

console.log(obj.sum(4, 9));

// 4. We can create function as Need

setTimeout(function () {
  console.log("We Can create function Any where");
}, 100);

// 5. We can Pass Function as an Arguments

// 6. We can return function from Another Function
