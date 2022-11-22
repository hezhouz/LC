/**
 * 
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const map = new Map()

  for(let i = 0 ; i < nums.length ; i++) {
      if(map.has(nums[i])) return true
      map.set(nums[i])
  }
  return false
};

console.log(containsDuplicate([1,2,3,1]));


console.log(containsDuplicate([1,2,3,4]));