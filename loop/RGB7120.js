function triangle(a, b, c) {
  if (a + b >= c && b + c >= a && c + a >= b) {
    console.log("yes");
  } else {
    console.log("No");
  }
}
triangle(3, 4, 5);
