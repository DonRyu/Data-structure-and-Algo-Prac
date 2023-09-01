var maxSubArray = function(nums) {
    let max;

    for(let i = 0; i<nums.length; i++){
        let nMax;
        let subArr = nums.slice(i);
        subArr.map((item)=>{
            nMax += item
        })
        max = Math.max(max,nMax)
    }

    return max;
};

maxSubArray([])