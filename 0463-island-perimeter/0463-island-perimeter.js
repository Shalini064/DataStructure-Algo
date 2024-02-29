/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let rowLen = grid.length
    let colLen = grid[0].length
    let preimeter = 0
    
    //iterate the matrix and where i'll get 1 
    //check top left bottom right 
    for(let row = 0; row<rowLen; row++ ){
        for(let col = 0 ;col<colLen;col++){
            if(grid[row][col] ===1){
                //check top
                if(row==0|| grid[row-1][col]==0){
                    preimeter++
                }
                
                //check left
                 if(col==0|| grid[row][col-1]==0){
                    preimeter++
                }
                //check bottom
                 if(row==rowLen-1|| grid[row+1][col]==0){
                    preimeter++
                }
                //check right
                if(col==colLen-1|| grid[row][col+1]==0){
                    preimeter++
                }
            }
        }
    }
    return preimeter
};