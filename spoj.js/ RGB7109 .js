function equal(a, b, c) {
  let sum = 0;
  if (a == 5) sum = sum + 1;
  if (b == 5) sum = sum + 1;
  if (c == 5) sum = sum + 1;
  return sum;
}
let ar = equal(2, 5, 5);
console.log(ar);
