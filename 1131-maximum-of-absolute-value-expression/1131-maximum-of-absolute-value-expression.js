/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    let v1=[];
    let v2=[];
    let v3=[];
    let v4=[];
    for(let i = 0;i<arr1.length;i++){
        v1.push(i+arr1[i]+arr2[i]);
        v2.push(i-arr1[i]+arr2[i]);
        v3.push(i+arr1[i]-arr2[i]);
        v4.push(i-arr1[i]-arr2[i]);
    }
    
    
    let res = 0;
    res = Math.max(res,(Math.max(...v1)-Math.min(...v1)));
    res = Math.max(res,(Math.max(...v2)-Math.min(...v2)));
    res = Math.max(res,(Math.max(...v3)-Math.min(...v3)));
    res = Math.max(res,(Math.max(...v4)-Math.min(...v4)));
    
    return res;
};