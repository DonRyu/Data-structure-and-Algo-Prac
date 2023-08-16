

// [1, 3, 5, 2, 1, 3, 1]
// [2, 5, 1, 3, 3, 1, 1]
//  1  1      1  1     

// 3 5 1
// 5 1 3 => 2


// 3    5    1

// 135  35  135
// 1    1 => 2

//n^2


const greatness = (arr)=>{
    let sortedArr =  [...arr].sort((a,b)=>a-b); //n
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let index = arr.findIndex((item)=>item>sortedArr[i]) // n^2

         if(index !=-1){
            count++;
            //sortedArr[index]= undefined;    
            sortedArr[index]= -Infinity;
         }
    }
    return count;
}



console.log(greatness([3,5,1]))