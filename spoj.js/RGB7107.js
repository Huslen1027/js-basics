function sumEvennumbers(a, b, c) {
  let sum = 0;
  if (a % 2 == 0) sum = sum + a;
  if (b % 2 == 0) sum = sum + b;
  if (c % 2 == 0) sum = sum + c;
  return sum;
}
let ar = sumEvennumbers(10, 3, 5);
console.log(ar);
