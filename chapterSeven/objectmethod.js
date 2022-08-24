var obj = {
  name: "tanvir",
  age: 26,
  city: "dhaka",
  homeTown: "Barisal",
};

// to see the keys in object
console.log("keys in object ", Object.keys(obj));

// to see thr values in a object
console.log("Values in a object ", Object.values(obj));

// give the entries of object
console.log("Entries of object ", Object.entries(obj));

// copy a object to another object

var obj2 = Object.assign({}, obj);
obj2.name = "Toru";
console.log("copy a object ", obj2);
