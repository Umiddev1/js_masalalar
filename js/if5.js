let x = +prompt("x: ");
let fx;
if (x < -2 || x > 2) {
  fx = x * 2;
}
else if (x == 0) {
  fx = 0;
}
else {
  fx = -3 * x;
}
console.log(fx);