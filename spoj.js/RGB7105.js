function findfromfour(a, b, c, d) {
  let sum = 0;
  if (a > 80) {
    sum = sum + a;
  }
  if (b > 80) {
    sum = sum + b;
  }
  if (c > 80) {
    sum = sum + c;
  }
  if (d > 80) {
    sum = sum + d;
  }
  return sum;
}
let ar = findfromfour(85, 75, 96, 69);
console.log(ar);
