function oddEvennumbers(a, b, c) {
  let sum = 1;
  if (a % 2 != 0) sum = sum * a;
  if (b % 2 != 0) sum = sum * b;
  if (c % 2 != 0) sum = sum * c;
  return sum;
}
let ar = oddEvennumbers(5, 2, 3);
console.log(ar);
