const countDown = (n) => {
  if (n === 0) {
    return console.log("All Done");
  }
  n--;
  countDown(n);
};

function power(base,exponent){
    if(exponent === 0) return 1
    exponent--; 
    return base * power(base,exponent)
}

function factorial(num){
    // let base = 1
    // for(let i = num; i>0; i--){
    //     base *= i
    // }
    // return base

    if(num === 0) return 1;
    if(num === 1) return 1;
    
    return num *  factorial(num-1);
 }



 console.log(factorial(0))