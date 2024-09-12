/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let steps = 0
    let curr = 1
    let clipboard = 0
    while(curr!=n){
        if(n%curr==0){
            clipboard = curr
            curr+=clipboard
            steps+=2
        }
        else{
            curr+=clipboard
            steps+=1
        }
    }
    return steps
};