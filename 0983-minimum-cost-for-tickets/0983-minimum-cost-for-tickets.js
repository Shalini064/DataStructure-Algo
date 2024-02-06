/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    
  // Initilize costArr array to be the size of the last day plus 1
  let costArr = new Array(days[days.length - 1] + 1);
    
  // Base case
   costArr[0] = 0;
    
  // Loop through the days
  for (let i = 1; i < costArr.length; i++) {
      
  // If 'i' is not in the days array we let it equal to the previous day because     //we   //don't need to buy a ticket for that day
      
    if (!days.includes(i)) {
      costArr [i] = costArr[i - 1];
        
  // if costArr[i] is in the days array we find the min value between our 3 cost         //possibilities
    } else {
      costArr[i] = Math.min(
      costArr[Math.max(0, i - 1)] + costs[0],
      costArr[Math.max(0, i - 7)] + costs[1],
      costArr[Math.max(0, i - 30)] + costs[2]
      );
    }
  }
  // last element of costArr will be our answer
  return costArr[costArr.length - 1];

};