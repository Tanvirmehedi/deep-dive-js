for (var i = 1; i <= 100; i++) {
  console.log(i);
}

for (var i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log("OOd Number ", i);
  } else if (i % 2 === 0) {
    console.log("Even Number", i);
  }
}

var sum = 0;
for (var i = 1; i <= 20; i++) {
  console.log("Sum " + sum + "+" + i + "=" + (sum + i));
  sum += i;

  if (i % 2 === 1) {
    console.log("Odd Sum " + sum + "+" + i + "=" + (sum + i));
    sum += i;
  }
}
