function season(a) {
  if (2 <= a && 4 >= a) {
    console.log("spring");
  } else if (5 <= a && 8 >= a) {
    console.log("summer");
  } else if (9 <= a && 11 >= a) {
    console.log("autumm");
  } else if (12 <= a || 1 >= a) {
    console.log("winter");
  } else {
    console.log(error);
  }
}
season(3);
season(7)
