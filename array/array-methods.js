let nums = [1, 2, 1, 2, 3, 5, 1, 51, 25, 12, 31, 56, 124, 1];
let myfunction = (a, b) => {
  return a - b;
};
nums.sort(myfunction);
console.log(nums);
