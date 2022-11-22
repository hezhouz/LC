/**
 * 
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function (nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i]) && i - map.get(nums[i]) <= k) return true;
      map.set(nums[i], i);
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));