let n = 3;
let sum = 1;
if (n > 0) {
  for (let i = 1.1; i <= n;i+=1.1) {
    sum *= i;
  }
  console.log(sum.toFixed(2));
}