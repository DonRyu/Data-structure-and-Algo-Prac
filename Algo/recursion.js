const countDown = (n) => {
  if (n === 0) {
    return console.log("All Done");
  }
  n--;
  countDown(n);
};

function power(base, exponent) {
  if (exponent === 0) return 1;
  exponent--;
  return base * power(base, exponent);
}

function factorial(num) {
  // let base = 1
  // for(let i = num; i>0; i--){
  //     base *= i
  // }
  // return base

  if (num === 0) return 1;
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

function productOfArray(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * productOfArray(nums.splice(1));
}

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// 1,1,2,3,5,8,13
// 5

const fibFor = (n) => {
  let pre = 1;
  let curr = 1;
  let fin = 2;

  for (let i = 4; i <= n; i++) {
    pre = curr; // 1 = 1
    curr = fin; // 1 = 2
    fin = pre + curr; // 2 = 3
  }
  return fin;
};

// 5
// 1,1,2,3,5

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

//[2,3,4]

function same(arr, arr2) {
  let squaredArray = [];

  if (arr.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    squaredArray.push(arr[i] * arr[i]);
  }

  let isSame = squaredArray.filter((item, key) => {
    return item !== arr2[key];
  });

  return isSame.length > 0 ? false : true;
}





