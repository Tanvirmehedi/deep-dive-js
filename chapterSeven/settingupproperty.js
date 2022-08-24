var point = {
  x: 10,
  y: 15,
  z: 20,
};

// point.x = 40;

// console.log(point);

// console.log(point.c);

point["x"] = 40;

console.log(point["c"]);

var prop = "z";

point[prop] = 80;
console.log(point);
