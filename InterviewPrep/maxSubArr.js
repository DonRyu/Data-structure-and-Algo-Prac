var maxSubArray = function(nums) {
    let max = nums[0]

    for (let i = 0; i < nums.length; i++) {
        let currSum =0;
        for (let j = i; j < nums.length; j++) {
            currSum += nums[j]
            max = Math.max(max,currSum)
        }
    }

    return max
};

for (let index = 0; index < array.length; index++) {
   for (let j = index; j < array.length; j++) {

    
   }
    
}

console.log(maxSubArray([-1]))