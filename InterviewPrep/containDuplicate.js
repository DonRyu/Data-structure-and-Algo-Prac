//o(n)
const containsDuplicate = function(nums) {
    let set = new Set();

    for(let i = 0; i<nums.length; i++){

        if(set.has(nums[i])){
            return true;
        }else{
            set.add(nums[i]);
        }
    }
    return false;
};

const containsDuplicate2 = nums => new Set(nums).size !== nums.length;

const containsDuplicate3 = () => {
    let map = {};
    
}

//sorted nlogn
const containsDuplicate4 = (nums)=>{
    let sorted = nums.sort((a,b)=>a-b);

    for (let i = 0; i < nums.length; i++) {       
        if(sorted[i] === sorted[i+1]) return true
    }

    return false
}




// set

// 1 1 => 1
// set(arr).size === arr.length

// 123 123 false
// 12  123 true 


const containDuplicate = arr => new Set(arr).size !== arr.length;

// 123
// 1 true
// 1 1
// 3 2

const containDuplicate2 = (arr)=>{
    let set = {};

    for (let i = 0; i < arr.length; i++) {
        if(set[arr[i]]){
            return true;
        }
        set[arr[i]] = true;    
    }

    return false;
}