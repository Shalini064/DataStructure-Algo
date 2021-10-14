class Solution {
    public List<List<String>> solveNQueens(int n) {
        
        //Creating boad with .. 
        char Board [][] = new char[n][n];
        for(int i=0;i<n;i++)
        {
            for (int j = 0; j < n; j++) 
            {
                Board[i][j] = '.';
            }
        }
         List<List<String>> result= new ArrayList<>();
         queen(n, 0,Board, result);
        return result;
    }
     
    public void  queen(int n , int row,  char Board [][] , List<List<String>> result ){
        
        //Base case 
        if(row==n){
           result.add(build(Board));
            return;
        }
       for(int i = 0; i<n;i++){
           if(isValid(Board,row,i,n)){
               Board[row][i]='Q';
               queen(n,row+1,Board,result);
               Board[row][i]= '.';
           }
       } 
        
    }
        
     public List build(char Board[][])
    {
        List<String> path = new ArrayList<>();
        for (int i = 0; i < Board.length; i++) {
            path.add(new String(Board[i]));
        }
        return path;
    }
    
    
        public boolean isValid(char arr[][], int row, int col , int n) {
        //CHECK COL has queen
        for (int i = 0; i!=row;i++) {
            if (arr[i][col] == 'Q') {
                return false;
            }
        }

        //UPPER RIGHT DIAGONAL
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (arr[i][j] == 'Q') {
                return false;
            }
        }

        //UPPER LEFT DIAGONAL
        for (int i = row - 1, j = col + 1; i >= 0 && j < arr.length; i--, j++) {
            if (arr[i][j] == 'Q') {
                return false;
            }
        }

        return true;
    
    }
    
}