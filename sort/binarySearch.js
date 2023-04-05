// middleValue > value =>  start가 middle

const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  if (arr.length < 1) {
    return null;
  }

    
  // 1,2,3,4,5,6,7  => 6
  //
  while (arr[middle] !== value) {

    if (arr[middle] > value) {
      start = middle;
    } else {
      end = middle;
    }
    middle = Math.floor((start + end) / 2);
    console.log('middle',middle)
  }

  return middle
};

 console.log(binarySearch([1,2,3,4,5,6],5))
