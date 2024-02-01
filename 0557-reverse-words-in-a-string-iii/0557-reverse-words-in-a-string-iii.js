/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newArr = s.split(" ")
    
    for (let i =0 ;i<newArr.length;i++){
        
        newArr[i] =reverse(newArr[i])
    }
    console.log(newArr)
    return newArr.join(' ')
};

function reverse(str){
    let reverse =''
    for(let i =str.length-1 ;i>=0;i--){
        reverse=reverse+str[i]
    }
    return reverse
}