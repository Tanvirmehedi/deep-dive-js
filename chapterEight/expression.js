var addition = function (a, b) {
  return a + b;
};

addition(1, 2);

setTimeout(function () {
  console.log("it will execute after 5 second");
}, 5000);

var another = addition;

console.log(another(3, 5));
