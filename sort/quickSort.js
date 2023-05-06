//첫번째를 pivot으로 잡는다
//pivot 보다 큰놈들은 오른쪽으로 보낸다
//작은놈을 만나면 가장 최근 큰놈이랑 인덱스를 swap 한다
//pivot 인덱스를 +1 한다.
//어레이 끝까지 간뒤에 첫번쨰에 있는 pivot 인덱스를 쌓인 인덱스에 옮긴다
//끝


function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  } 
             
  quickSort([100,-3,2,4,6,9,1,2,5,3,23])
  
  
  
  
  // [4,6,9,1,2,5,3]
  // [3,2,1,4,6,9,5]
  //        4
  //  3,2,1    6,9,5
  //      3      6
  //  2,1      5  9
  //    2
  //  1
  
  
  
  