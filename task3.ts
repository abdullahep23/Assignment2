// Scenario 1 - Modify Array with Methods
const array: any[] = ["Abdullah", 17, 24, "Izzah", 2, 15, true];

// push: Add new elements to the end of the array
array.push("Comsats");
console.log("Array after push:", array);

// pop: Remove the last element from the array
const poppedElement = array.pop();
console.log("Popped Element:", poppedElement);

// shift: Remove the first element from the array
const shiftedElement = array.shift();
console.log("Shifted Element:", shiftedElement);

// unshift: Add new elements to the beginning of the array
array.unshift("Ali", "Waheeb");
console.log("Array after unshift:", array);

// Scenario 2 - Subarray Creation
// splice: Create a subarray by removing elements from the original array
console.log("Original Array:", array);
const splicedArray = array.splice(2, 3); // Remove 3 elements starting from index 2
console.log("Spliced Array:", splicedArray);
// slice: Create a subarray without modifying the original array
const slicedArray = array.slice(1, 4); // Create a subarray from index 1 to 3
console.log("Sliced Array:", slicedArray);
