let x = +prompt("x: ");
let fx;
if (x > 0) {
  fx = 2 * Math.sin(x);
}
else if (x <= 0) {
  fx = x -6;
}
console.log(fx);
