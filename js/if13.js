let number = +prompt("Son: ");

let qoldiq = number % 10; //9
let num2 = number / 10; //9.9
let num3 = Math.trunc(num2); // 9
if (qoldiq == num3) {
  console.log("True");
}
else {
  console.log("False");
}