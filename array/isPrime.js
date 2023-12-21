function isPrime(number) {
  if (number == 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }

  return true;
}
// let answer = isPrime(50);
// console.log(answer);

function findPrime(min, max) {
  let array = [];
  let count = 0;

  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      array[count] = i;
      count++;
    }
  }
  return array;
}
let answer = findPrime(2, 100);
console.log(answer);
