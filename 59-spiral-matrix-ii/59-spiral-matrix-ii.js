/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var resultMatrix = Array.from(Array(n),()=>new Array(n));
    var r1 =0 ;
    var r2=n-1;
    var c1=0;
    var c2=n-1;
    
    let val = 1;
    
    while( r1<=r2 && c1<=c2){
        //D1 => first row && (0 to n-1) col
        for(let c = c1; c<=c2;c++)
            resultMatrix[r1][c]=val++;
        
        //D2 => last col && (1 to n-1 row)
        for(let r = r1+1;r<=r2 ;r++)
            resultMatrix[r][c2]=val++;
        
        //For D3 and D4
        if(r1<r2 && c1<c2)
            //D3=> last row && last col(n-1 to 0)
            for(let c=c2-1;c>c1; c--)
                resultMatrix[r2][c]=val++;
        
            //D4 => first col && last row to 0th row
            for(let r=r2;r>r1;r--)
                resultMatrix[r][c1]=val++;
            
          
        r1++;
        r2--;
        c1++;
        c2--;
    }
    return resultMatrix
};