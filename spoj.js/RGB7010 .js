function threedightnumber(a) {
  let b = parseInt(a / 100);
  let c = parseInt((a / 10) % 10);
  let d = a % 10;
  return b + c + d;
}

let ra = threedightnumber(123);
console.log(ra);