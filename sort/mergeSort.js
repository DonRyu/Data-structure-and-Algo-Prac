// Merges two already sorted arrays
function merge(arr1, arr2) {
  let results = []; // 1,2,3,4,5,6
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
merge([100, 200], [1, 2, 3, 5, 6]);

const mergeSort = (arr, arr2) => {

    
    
};

console.log([2, 3, 4, 5].slice(0, 1));
