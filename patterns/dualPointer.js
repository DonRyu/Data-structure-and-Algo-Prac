// get 0 at sorted array
//[-3,-2,-1,1,5,8,10]
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let result = arr[left] + arr[right];
    if (result === 0) {
      return [left, right];
    } else if (result > 0) {
      right -= 1;
    } else if (result < 0) {
      left += 1;
    }
  }

  return 0;
};

// arr 1,1,1,1,1,2
// arr 1,2,3,4,4,4,7,7,12,12,13
// arr
// arr -2,-1,-1,0,1

function countUniqueValues(arr) {
  let l = 0;
  if (arr.length === 0) {
    return 0;
  }

  for (let r = 1; r < arr.length; r++) {
    if (arr[l] !== arr[r]) {
      l++;
      arr[l] = arr[r];
    }
  }
  return l + 1;
}

// [1,2,5,2,4] , 2 => 7
const maxSubArraySum = ()=>{

}

console.log(Math.max(1,10))