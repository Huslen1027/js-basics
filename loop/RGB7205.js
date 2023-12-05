function paktorial(a) {
  let sum = 1;
  for (i = 1; i <= a; i++) {
    sum = sum * i;
  }
  console.log(sum);
}
paktorial(5);
