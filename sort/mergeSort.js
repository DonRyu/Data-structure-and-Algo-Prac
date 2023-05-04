// n log n
// log n 인 이유는 어레이 자체를 계속 divide 함
// 거기에 + n인 이유는 divide 된걸 계속 merge 함수가 merge한뒤에 다시 merge를 반복함 그래서 n 이 붙음 

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let first = mergeSort(arr.slice(0, mid));
  let second = mergeSort(arr.slice(mid));
  return merge(first, second);
};

// console.log(mergeSort([61, 2, 1]));

function merge(arr1, arr2) {
  let results = [];
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


