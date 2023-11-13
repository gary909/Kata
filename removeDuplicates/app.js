function solve(arr) {
    const uniqueMap = {};

    // Iterate through the array in reverse order
    for (let i = arr.length - 1; i >= 0; i--) {
      const currentElement = arr[i];
  
      // If the element is not in the map, add it with its index
      if (!(currentElement in uniqueMap)) {
        uniqueMap[currentElement] = i;
      }
    }
  
    // Extract the values (indices) from the map and sort them
    const uniqueIndices = Object.values(uniqueMap).sort((a, b) => a - b);
  
    // Create a new array with the unique elements in the original order
    const uniqueArray = uniqueIndices.map((index) => arr[index]);
  
    return uniqueArray;
  }

console.log(solve([3,4,4,3,6,3])) // [4,6,3]
console.log(solve([1,2,1,2,1,2,3])) // [1,2,3]
console.log(solve([1,2,3,4])) // [1,2,3,4]
console.log(solve([1,1,4,5,1,2,1])) // [4,5,2,1]
console.log(solve([1,2,1,2,1,1,3])) // [2,1,3]