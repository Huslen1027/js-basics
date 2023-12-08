function hourminsek(a, b, c) {
  let hour = 3600 * a;
  let min = 60 * b;
  let sek = 1 * c;
  return hour + min + sek;
}

let ar = hourminsek(1, 2, 3);
console.log(ar);
