function loan(salary, insurance, inpersontype, dept, id) {
  if (
    salary > 2000000 &&
    insurance == "toldog" &&
    (inpersontype == "inperson" || inpersontype == "cred") &&
    dept < 1000000 &&
    (id == "passport" || id == "identification card")
  ) {
    console.log("yes");
  } else console.log("no");
}

let answer = loan(
  2000001,
  "toldog", // toldog eswel toldoggui
  "inperson", // inperson eswel cred
  500000,
  "passport" // id -  passport esuul identification card
);
