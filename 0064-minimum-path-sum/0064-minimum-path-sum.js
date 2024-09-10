/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let n = grid.length
    let m = grid[0].length
    
    
    for(let i = 0; i<n; i++){
        for(let j = 0; j<m;j++)
            {
                //for first row and col
                if(i == 0 && j ==0){
                    grid[i][j]=  grid[i][j]
                }
                //for first row
                else if(i==0){
                    grid[i][j]+=grid[i][j-1]
                }
                //for first col
               else if(j==0){
                    grid[i][j]+=grid[i-1][j] 
                }
                else{
                    
                  grid[i][j]+= Math.min(grid[i-1][j], grid[i][j-1])
   
                }
               
            }
    }
    return grid[n-1][m-1]
};