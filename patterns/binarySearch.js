
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],6) // -1
const binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;

  while (left !== right) {
    let middle = Math.ceil((left + right) / 2);
    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] < value) {
      left = middle;
    } else {
      right = middle;
    }
  }

  return -1;
};

console.log(binarySearch([1,2,3,4,5],6) )
binarySearch([1,2,3,4,5],2) // 1