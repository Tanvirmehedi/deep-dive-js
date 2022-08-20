// var initialNumber = 1;
// while (initialNumber <= 10) {
//   console.log(initialNumber);

//   initialNumber++;
// }

var isTrue = true;

while (isTrue) {
  var random = Math.floor(Math.random() * 10 + 1);

  if (random === 9) {
    console.log("Tom & Jerry win The game");
    isTrue = false;
  } else {
    console.log(random);
  }
}
