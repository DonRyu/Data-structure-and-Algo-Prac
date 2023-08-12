


const two = ()=>{
    let map = {}


    for (let i = 0; i < array.length; i++) {
        let value = arr[i]
        let removed = target -arr[i]
        
        // 0 
        // undefined (x), undefined 안쓰는게 좋다

        if(map[removed] >=0){
                return 
        }else{
            map[value] = arr[i]
        }
    }
}

// 1 2 3 target 5
// 5-1 4
// 5-2 3
// 5-3 2

// 1 0
// 2 1
// 3 2