let x = +prompt("Son kiriting: ");
let y = +prompt("Son kiriting: ");

if (x > 0 && y > 0) {
  console.log("I-chorak");
}
else if (x < 0 && y > 0) {
  console.log("II-chorak");
}
else if (x < 0 && y < 0) {
  console.log("III-chorak");
}
else if (x > 0 && y < 0) {
  console.log("IV-chorak");
}