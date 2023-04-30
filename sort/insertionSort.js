


function insertionSort(arr) {
  let currentVal;
  // i = 1
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i]; // 5
    let j;
    // j = 1 && 8 > 5
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]; // arr[2] = arr[1]
    }
     arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([8, 5, 3, 2]));
// 5,8,3,2
