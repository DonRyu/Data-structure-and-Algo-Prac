
// O(n^2)
function insertionSort(arr) {
  let currentVal;
  
  //i = 1
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i]; // 5
    let j;
    // j = 0 , 0>=0 && 8>5, 
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]; // arr[1] = arr[0] / 5 = 8 / 5,8,3
      console.log(`=>${j} ${arr}`)
    }
     arr[j + 1] = currentVal; // arr[0] = 5 
  }
  return arr;
}

console.log(insertionSort([8, 5]));
// 5,8,3,2
