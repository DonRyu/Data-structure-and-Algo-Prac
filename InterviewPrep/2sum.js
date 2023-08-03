// o(n^2)
const twoSum = (arr, target)=>{
    for(let i = 0; i<arr.length; i++){

        for(let j = i+1; j<arr.length; j++){
            
                if(target === (arr[i] + arr[j])){
                    return [i,j]
                }   
        }
    }
}

//o(n)

// map을 만든다
// map 에다가 target - value를 뺸값을 집어 넣는다 
// [1,2,3] 5
// 5 -1 =>4
// 5 -2 =>3
// 5 -3 =>2

const twoSum2 = (arr, target)=>{
    let map = {}

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        let removed = target - arr[i]
        
        // if(0) 은 false다
        if(map[removed] !== undefined){
            return [map[removed],i]
        }else{
            map[value] = i
        }
    }

 }

 console.log(twoSum2([1,2,3],3))