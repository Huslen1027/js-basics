function findMultiple(a, b, c, d) {
  let sum = 4;
  if (a > 4) {
    sum = sum * a;
  }
  if (b > 4) {
    sum = sum * b;
  }
  if (c > 4) {
    sum = sum * c;
  }
  if (d > 4) {
    sum = sum * d;
  }
  return sum;
}
let ar = findMultiple(3, 6, 2, 4);
console.log(ar);
