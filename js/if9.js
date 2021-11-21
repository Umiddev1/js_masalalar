let a = +prompt("Son kiriting: ");

if (a > 0 && a % 2 == 0) {
  console.log("Musbat Juft son");
}
else if (a > 0 && a % 2 == 1) {
  console.log("Musbat Toq son");
}
else if (a == 0) {
  console.log("Son 0 teng");
}
else if (a < 0 && a % 2 == 1) {
  console.log("Manfiy Toq son");
}
else if (a < 0 && a % 2 == 0) {
  console.log("Manfiy Juft son");
}