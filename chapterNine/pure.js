function sqr(n) {
  return n * n;
}

console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));

var x = 20;

function sideEffect() {
  x = 30;

  return x;
}
sideEffect();
console.log(x);
