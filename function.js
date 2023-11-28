function doSomething(input) {
  return input * input;
}

let result = doSomething(15);
console.log(result);

function findMonth(day) {
  if (day <= 31) {
    return "january";
  } else if (day <= 59) {
    return "february";
  } else if (day <= 90) {
    return "march";
  } else if (day <= 120) {
    return "april";
  } else if (day <= 151) {
    return "may";
  } else if (day <= 180) {
    return "june";
  } else if (day <= 211) {
    return "july";
  } else if (day <= 242) {
    return "august";
  } else if (day <= 272) {
    return "september";
  } else if (day <= 303) {
    return "october";
  } else if (day <= 334) {
    return "november";
  } else if (day <= 365) {
    return "december";
  }
}

console.log(findMonth(333));
