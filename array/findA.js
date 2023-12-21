let sentence = `Number pattern is a series of numbers arranged in specific order.
These patterns are patterns created by numbers and are similar to star patterns.
They are best suited to enhance your logical thinking abilities and to practice.
flow control statements .I have assembled a list of number patterns to practice
for both novice as well as intermediate programmers . Practice more and more of it,
to enhance your logical thinking. Always feel free to drop down your queries and
suggestions below in the comments seciton. I always love to hear from hugs and bugs from you.`;
let a = ["Number", "pattern"];

let array = [];
let str = [];
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == " ") {
    array[count] = str;
    count++;
    str = "";
  } else {
    str = str + sentence[i];
  }
}
console.log(array);

let counta = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == "a" || sentence[i] == "A") {
    counta++;
  }
}
console.log(counta);
