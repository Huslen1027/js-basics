function equal(a, b, c, d) {
  let sum = 0;
  if (a % 3 == 0) sum = sum + 1;
  if (b % 3 == 0) sum = sum + 1;
  if (c % 3 == 0) sum = sum + 1;
  if (d %3== 0) sum = sum + 1;
  return sum;
}
let ar = equal(3, 12, 8, 9);
console.log(ar);
