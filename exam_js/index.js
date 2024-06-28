//Calculate Power:
function circuitPower(voltage, current) {
  return voltage * current;
}
console.log(circuitPower(110, 3));


//find max number
function findMaxNumber(numbers) {
  if (numbers.length === 0) {
      return null;
  }
  return Math.max(...numbers);
}
console.log(findMaxNumber([1, 2, 3, 4, 5])); 
console.log(findMaxNumber([])); 

//Merge Arrays:
function mergeArrays(array1, array2) {
  return array1.concat(array2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 

//Get Array Value Types:
function arrayValuesTypes(array) {
  return array.map(value => typeof value);
}

console.log(arrayValuesTypes([1, 2, "null", []])); 


