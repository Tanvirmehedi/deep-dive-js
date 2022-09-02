function a() {
  var x = 10;

  return function () {
    console.log(x);
  };
}

var abc = a();

console.dir(abc);
