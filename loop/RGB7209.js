function degree(a, b) {
  let sum = 1;
  for (i = 1; i <= b; i++) {
    sum = sum * a;
  }
  console.log(sum);
}
degree(3, 4);
