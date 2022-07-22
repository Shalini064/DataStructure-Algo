/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let arr =[];
    while(n!==1){
        let sum = 0;
        
        while(n!==0){
            sum+=(n%10)*(n%10);
            n = Math.floor(n/10);
        }
        
        if(arr.includes(sum)){
            return false
        }else{
             arr.push(sum);
              n= sum;
        }
       
    }
    return true
    
};