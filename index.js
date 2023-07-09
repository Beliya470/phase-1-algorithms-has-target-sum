// The function checks each pair of numbers in the array. 
// If a pair sums up to the target, the function immediately returns true. 
// If no such pair is found after checking all possible pairs, the function returns false.

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/*
  Big O time complexity: O(n^2)
  This is because for each element in the array, we're checking all other elements.
*/

/* 
  Pseudocode:
  For each 'element1' in 'array'
    For each 'element2' in 'array' that comes after 'element1'
      If 'element1' + 'element2' is equal to 'target'
        return true
  return false
*/

/*
  Explanation:
  We use a nested loop to check each pair of elements in the array.
  If any pair sums up to the target, we immediately return true.
  If no pair sums up to the target, we eventually return false.
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
