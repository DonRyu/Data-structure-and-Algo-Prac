
// O(n^2)
const bubbleSort = (arr) => {
  let noSwap; // Optimization
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i-1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
        noSwap = false;
      }
    }
    if(noSwap) break;

  }
  return arr;
};

console.log(bubbleSort([1,3,2,8]));
