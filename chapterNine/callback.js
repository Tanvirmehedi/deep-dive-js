function sample(a, b, cb) {
  var c = a + b;

  var d = a - b;

  var result = cb(c, d);

  return result;
}

var x = sample(5, 6, sum);

console.log(x);

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

var y = sample(5, 8, sub);

console.log(y);

var multiply = sample(5, 6, function (a, b) {
  return a * b;
});

console.log(multiply);

var division = sample(5, 6, function (a, b) {
  return a / b;
});

console.log(division);
