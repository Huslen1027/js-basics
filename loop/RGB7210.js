function numberWheel(a) {
  if (a >= 1 && a <= 10) {
    for (let i = 1; i <= 10; i++) {
      console.log(a + "*" + i + "=" + a * i );
    }
  }
}
numberWheel(3);
