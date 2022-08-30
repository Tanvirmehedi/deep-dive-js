function add(a, b) {
  var result = a + b;

  return result;
}

var x = add(10, 20);

console.log(x);

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

var r = addAll(2, 4.5, 6);

console.log(r);
