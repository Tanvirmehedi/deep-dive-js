var arr = [10, 23, 54, 87, 09, 16, 26, 54, 26, 976, 17];

var find = 2;

var isFound = false;

for (var i = 0; i < arr.length; i++) {
  if (find === arr[i]) {
    isFound = true;
    console.log(arr[i]);
    break;
  }
}

if (!isFound) {
  console.log("Data Not Found");
}
