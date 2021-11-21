let n = 3;
let y = 0;

if (n > 0) {
  for (let i = 1; i <= n*2**2;i++) {
    let sum = n + i ** 2;
    y += sum;
  }
  console.log(y);
}