var obj = {
  a: 20,
  b: 40,
  c: 50,
};

// console.log("c" in obj);

for (var i in obj) {
  console.log(i + ": " + obj[i]);
}
