function moreLittlenumber(a, b, c, d) {
  if (a < b && a < c && a < d) {
    return a;
  } else if (b < c && b < d) {
    return b;
  } else if (c < d) {
    return c;
  }
  return d;
}
let ar = moreLittlenumber(3, 2, 1, 4);
console.log(ar);
