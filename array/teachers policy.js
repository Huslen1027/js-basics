//bodlogo - 1;
function problem1(a) {
  for (let i = a; i >= 0; i = i - 3) {
    console.log(i);
  }
}

problem1(10);
//bodlogo - 2;
function problem2(a, b) {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      console.log(i);
    }
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      console.log(i);
    }
  }
}
problem2(9, 15);
//bodlogo - 3;

function problem3(a, b, c) {
  let array = [];
  let count = 0;

  for (let i = a; i <= b; i = i + c) {
    count++;
    array[count] = i;
  }
  console.log(array);
}
problem3(10, 20, 2);
