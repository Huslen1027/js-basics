function yearMonth(a) {
  let month = parseInt(a / 12);
  let year = a % 12;

  console.log(month, year);
}
yearMonth(27);
