/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arr = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if((nums[i]+nums[j]==target) && i!=j){
                arr[0] = i;
                arr[1] = j;
                
            }
        }
    }
    return arr;
    
};