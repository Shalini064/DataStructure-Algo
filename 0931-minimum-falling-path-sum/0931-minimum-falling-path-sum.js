/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    
    let n = matrix.length;

    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = [...matrix[i]]
    }
    
    let minSum = Infinity;
    
    //lets start form 2nd last row
    for(let i =n-2;i>=0;i--){
        
        minSum = Infinity
        for(let j  =0; j<n;j++){
            
            //since we can move (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1)
            
            dp[i][j]+=dp[i+1][j]
            
            if(j>0){
                dp[i][j] = Math.min(dp[i][j],matrix[i][j]+dp[i+1][j-1])
            }
            if(j<n-1){
                dp[i][j] = Math.min(dp[i][j],matrix[i][j]+dp[i+1][j+1])
            }
                 
            minSum = Math.min(minSum,dp[i][j])
            
        }
       
    }
    return matrix.length>1? minSum:matrix[0][0]
};