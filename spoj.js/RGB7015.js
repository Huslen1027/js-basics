function dayhour(a) {
  let hour = parseInt(a / 24);
  let day = a % 24;
  console.log(hour, day);
}
dayhour(44);
