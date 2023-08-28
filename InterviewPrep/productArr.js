


// 2 3 4
// 1 2 6 
// 12 4 1
// 12 8 6

var productExceptSelf = function(nums) {
 
    const prefix = [1];
    const suffix = [];
    const result = []
    suffix[nums.length-1] = 1;
  
    // 0 1
    let prefixValue = 1
    for (let i = 0; i < nums.length-1; i++) {
        prefixValue *= nums[i]
        prefix[i+1] = prefixValue
    }

    // 2 1 
    let suffixValue = 1 
    for (let i = nums.length-1; i >0; i--) {
        suffixValue *= nums[i]
        suffix[i-1] = suffixValue
    }

    // 0 1
    for (let i = 0; i < nums.length; i++) {
        result.push(prefix[i]*suffix[i]);
    }

    return result;
};


var productExceptSelf2 = function(nums) {
    let prefix = 1;
    let suffix = 1;
    let result = [];
    

    for (let i = 0; i < nums.length; i++) {
        result.push(prefix)
        prefix *= nums[i]
    }

    for (let i = nums.length-1; i>=0; i--) {
        result[i] *=suffix
        suffix *= nums[i]
    }

    return result
};

// 1 2 3
// 1 1 2
// 6 3 1


// 1 2 3
// 6 3 2
console.log(productExceptSelf2([1,2,3]))