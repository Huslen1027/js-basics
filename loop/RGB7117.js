function assessment(a) {
  let sum;
  if (a <= 99) sum = "A";
  if (a <= 89) sum = "B";
  if (a <= 79) sum = "c";
  if (a <= 69) sum = "D";
  return sum;
}
let ar = assessment(84);
console.log(ar);
