//1. Write a simple JavaScript program to join all elements of the following array into a string.
//Sample array : myColor = ["Red", "Green", "White", "Black"];
//Expected Output :
//"Red,Green,White,Black"
//"Red,Green,White,Black"
//"Red+Green+White+Black"
// let color = ["Red", "Green", "White", "Black"];
// let colors = color.join() + `\n` + color.join() + `\n` + color.join("+");
// console.log(colors);

//2.  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function insertDashes(num) {
  let findnumber = num.toString();
  let result = findnumber[0];

  for (let i = 1; i < findnumber.length; i++) {
    if (findnumber[i - 1] % 2 == 0 && findnumber[i] % 2 == 0) {
      result = result + "-" + findnumber[i];
    } else {
      result += findnumber[i];
    }
  }
  console.log(result);
}
insertDashes("025468");

// 3. Write a JavaScript program t˜o find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let count = 0;
let array = arr1.map((a) => {
  if (a == "a") {
    count++;
  }
  return count;
});
console.log(count);
