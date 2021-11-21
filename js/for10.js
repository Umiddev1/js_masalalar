let n = 3;
let y = 0;

if (n > 0) {
  for (let i = 1; i <= n;i++) {
    let sum = 1/i;
    y += sum;
  }
  console.log(y.toFixed(2));
}