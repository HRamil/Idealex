let maxProfit = function(price) {
    let len = price.length
    let profit = [];
    for(let i = 0; i < len; i++)
        profit[i] = 0
    let max_price = price[len - 1];
    for(let i = len - 2; i >= 0; i--){
        if (price[i] > max_price)
            max_price = price[i]
        profit[i] = Math.max(profit[i + 1],
                            max_price - price[i]);
    }
    let min_price = price[0];
    for(let i = 1; i < len; i++){
        if (price[i] < min_price)
            min_price = price[i];
        profit[i] = Math.max(profit[i - 1],
                profit[i] + (price[i] - min_price));
    }
   
 
    return profit[len-1];
};

maxProfit([1,2,1,2])
maxProfit([7,2,4,8,7])