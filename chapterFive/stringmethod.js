var a = "This Is ";

var b = "Tanvir mehedi";

// var c = a.concat(b);

// console.log(b.substring(7));

// console.log(b.substring(7, 10));

// console.log(b.charAt(0));

// console.log(b.startsWith("T"));

// console.log(b.endsWith("i"));

// console.log(b.toUpperCase());

// console.log(b.toLowerCase());

// var f = "             this is space                     ";

// console.log(f.trim());

// console.log(b.split(" "));

var length = 0;

while (true) {
  if (b.charAt(length) == "") {
    break;
  } else {
    length++;
  }
}

console.log(length);
