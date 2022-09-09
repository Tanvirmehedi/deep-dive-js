function greet(msg) {
  function greeting(name) {
    return msg + ", " + name;
  }

  return greeting;
}

var gm = greet("Good Morning");

console.log(typeof gm);

var name = gm("Tanvir Mehedi");

console.log(name);
