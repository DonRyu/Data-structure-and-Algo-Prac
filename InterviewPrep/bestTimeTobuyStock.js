var maxProfit = function(prices) {
    let left = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length; i++){
        // 현재 값이 left보다 작으면 left를 현재 값으로 업데이트
        if(prices[i] < left) {
            left = prices[i];
        } else {
            // 아니라면 최대 이익을 업데이트
            profit = Math.max(profit, prices[i] - left);
        }
    }

    return profit;
};


// 1,5,6,7
// l r


const maxProfit = (prices) =>{

    let left = prices[0];
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
       
        if(left>prices[1]){
            left = prices[i];
        }else{
            profit = Math.max(profit, prices[i]-left );
        }
        
    }

    return profit;

}