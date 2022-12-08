function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("3,8,12,4,11,7,10");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("22,19,4,6,30,25");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("1,2,5,4")
}

module.exports = hasTargetSum;
console.log("Expecting: true");
console.log("=>", hasTargetSum([5, 13, 25, 8, 30, 9], 20));

console.log("5,13,25,8,30,9,20");

console.log("Expecting: true");
console.log("=>", hasTargetSum([18, 21, 40, 15, 19, 27], 16));

console.log("18,21,40,15,19,27,16");

console.log("Expecting: false");
console.log("=>", hasTargetSum([25, 32, 21, 50, 30, 11], 40));

console.log("25,32,21,50,30,11,40");






