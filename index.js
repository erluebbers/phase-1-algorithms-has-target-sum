function hasTargetSum(array, target) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      newArray.push(array[i] + array[j])
    }
  }
  return newArray.some(element => element === target)
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
description: write a function that takes two arguments, an array of numbers and a target number, and returns true if any pair of numbers within the array adds up to the target number.

pseudocode steps:
  1. iterate through the array
  2. for each number in the array, find the sum of that number and each other number
  3. compare the sum to target number.
  4. if they equal each other, stop iterating
  5. return true.
  6. if no matches happen return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
