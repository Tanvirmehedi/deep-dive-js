function greeting(name, time) {
  function sayHi() {
    if (time === "Morning") {
      return " Morning";
    } else if (time === "Afternoon") {
      return " Afternoon";
    } else {
      return "Evening";
    }
  }

  var whichTime = sayHi();

  return "Hello, " + name + " Good " + whichTime;
}

var x = greeting("Tanvir", "Afternoon");

console.log(x);
