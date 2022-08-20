for (var i = 1; i <= 10; i++) {
  if (i === 3 || i === 7) {
    console.log("Missing " + i);
    continue;
  } else {
    console.log(i);
  }
}
