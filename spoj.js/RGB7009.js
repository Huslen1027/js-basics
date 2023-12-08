function dightnumber(a) {
  let b = a % 10;
  let c = (a - b) / 10;
  let d = b * c;
  return d;
}
let ra = dightnumber(27);
console.log(ra);
