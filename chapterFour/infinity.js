for (;;) {
  var random = Math.floor(Math.random() * 10 + 1);
  if (random === 9) {
    console.log("Winner Winner Chicken Dinner");
    break;
  } else {
    console.log(random);
  }
}
