// arr = 3,4,1
// arr2 = 1,4,3 => 2

// sorted arr => 1,3,4
// normal arr => 3,4,1
// max++

//error version
const findMaxGreatness = (arr) => {
  let sortedArr = [...arr].sort((a, b) => a - b); // 3,4,1
  let maxCount = 0; 


  for (let i = 0; i < sortedArr.length; i++) {
    if (arr[i] > sortedArr[i]) {
      maxCount++;
    }
  }

  return maxCount
};

// 3,5,1
function findMaximumGreatness2(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b); // 1,3,5
  let greatness = 0;

  // 3,5,1

  for (let num of arr) {
      // 원래 배열의 요소보다 큰 첫 번째 값을 찾습니다.
      // 3 5 1
      // 1 3 5
      const index = sortedArr.findIndex(sortedNum => sortedNum > num);

      if (index !== -1) {
          // 값을 찾았다면, 위대함 값을 1 증가시키고
          // 정렬된 배열에서 해당 값을 제거합니다.
          greatness++;
          sortedArr[index] = undefined;
      }
  }

  return greatness;
}



// 5,1,3
// 1 3 5 => 2

//   5       1       3
// 1 3 5   1 3 5   1 3 
//  x        3,5     x

// n^2

const findMax = (arr)=>{
  let sorted = [...arr].sort((a,b) => a-b);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let index = arr.findIndex(item => item >sorted[i]);
    if(index != -1){
      count++;
      sorted[index] = undefined;
    }  
  }

  return count;
}




console.log(findMax([5,1,3]))