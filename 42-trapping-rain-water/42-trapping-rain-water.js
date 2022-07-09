/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
     if (height.length < 3) return 0;
    
    const maxHeight_left=height.slice();
    const maxHeight_right=height.slice();
    
    //calculating max height from left array 
    for(let i = 1;i<height.length;i++){
        if(maxHeight_left[i]<maxHeight_left[i-1]){
            maxHeight_left[i]=maxHeight_left[i-1]
        }
      
    }
    
    //calculating max height from right 
    for(let i = height.length-2; i>=0;i--){
        if(maxHeight_right[i]<maxHeight_right[i+1]){
            maxHeight_right[i]=maxHeight_right[i+1]
        }
    }
    
 
    
    //Applying calculation formula 
    //sum = sum+ (min(maxHeight_left[i],maxHeight_right[i])-hight[i])
   
    let trappdWater = 0;
    for(let i =0;i<height.length;i++){
        trappdWater+= (Math.min(maxHeight_left[i],maxHeight_right[i])-height[i])
        
    }
  
    return trappdWater
};