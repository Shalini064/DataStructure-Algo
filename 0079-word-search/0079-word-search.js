/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    
    //iterate the board
    for(let i =0; i<board.length;i++){
        for(let j =0 ;j<board[0].length;j++){
            
            //check if index is having word letter 
            if(dfs(board, i, j, 0, word))
                return true   
        }
    }
    return false
    
};

function dfs(board, i, j, count, word){
    
    //count length is equal to word length 
    if(count==word.length){
            return true
    }
    
    //check corner case
    if(i ==-1 || i==board.length || j==-1 || j==board[0].length || board[i][j] !=word.charAt(count)){
        return false
    }
    let temp = board[i][j]
    board[i][j] ='*'
    let found = dfs(board, i+1, j, count+1, word)||
                dfs(board, i-1, j, count+1, word)||
                dfs(board, i, j+1, count+1, word)||
                dfs(board, i, j-1, count+1, word)
        
    board[i][j] = temp
    return found
      
}