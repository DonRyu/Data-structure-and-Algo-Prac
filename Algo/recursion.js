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


const fibonacci = function(n) {
  if (n === 0) return 0;

  let pre = 1;
  let cur = 1;
  let fin = 2;

  for (let i = 2; i < n; i++) {
    pre = cur; // pre === 1
    cur = fin; // cur === 1
    fin = pre + cur; // fin === 2
  }
  return fin;

};

// 5
// 1,1,2,3,5

function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

// fib(3) + fib()

console.log(fib(5))
