function numberWheel(a, b) {
  let sum = a;
  if (a >= 1 && a <= 10) {
    for (let i = 1; i <= b; i++) {
      console.log(a + "^" + i + "=" + sum);
      sum = sum * a;
    }
  }
}
numberWheel(3, 5);
