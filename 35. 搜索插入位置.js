/**
 * 
 * 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

  请必须使用时间复杂度为 O(log n) 的算法。

  示例 1:

  输入: nums = [1,3,5,6], target = 5
  输出: 2
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let n = nums.length
  let left = 0
  let right = n - 1
  let res = n 
  // 二分查找法 
  while(left <= right) {
      // 右指针右移
      let mid = ((right - left) >> 1) + left;
      if (target <= nums[mid]) {
          res = mid;
          right = mid - 1;
      } else {
          left = mid + 1;
      }

  }
  
  return res
};

console.log(searchInsert([1,2,3,4,5,7],4));