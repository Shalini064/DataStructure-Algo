/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    if(x<0){
        var str ="-";
        x= Math.abs(x)
    }
    
    let rev = 0;
   
    while(x!=0){
        rev = rev*10+ x%10;
        x=Math.floor(x/10);
    }
    if(!(rev > Math.pow(-2, 31) && rev < Math.pow(2,31) - 1)) return 0
    
    if(str=="-"){
        return ("-"+rev)
    }
    else return rev
    
    
};