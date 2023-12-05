function n(a) {
  let sum = 0;
  for (b = 0; b <= a; b = b + 1) {
    sum = sum * n;
    console.log(b);
  }
}
n(5);
