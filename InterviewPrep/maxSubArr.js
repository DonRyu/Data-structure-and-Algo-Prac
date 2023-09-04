var maxSubArray = function(nums) {
    let max = nums[0];
    let currSum = 0;
  
    for(let i =0; i<nums.length; i++){
      currSum += nums[i]

      if(currSum < nums[i]){
        currSum = nums[i]
      }

      max = Math.max(currSum,max)

    }
    return max
};

console.log(maxSubArray([-2,1,-3]))