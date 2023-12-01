function equal(a, b, c, d) {
  let sum = 0;
  if (a % 11 != 0) sum = sum + a;
  if (b % 11 != 0) sum = sum + b;
  if (c % 11 != 0) sum = sum + c;
  if (d % 11 != 0) sum = sum + d;
  return sum;
}
let ar = equal(7, 22, 13, 30);
console.log(ar);
