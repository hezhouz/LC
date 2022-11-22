/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。

  找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 

  示例 1：

  输入：target = 7, nums = [2,3,1,2,4,3]
  输出：2
  解释：子数组 [4,3] 是该条件下的长度最小的子数组。
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let i = 0
  let k = -1
  let add = 0
  let res = nums.length + 1

  while( i < nums.length ) {

      if( k+1 < nums.length &&  add < target ) {
          add += nums[++k]
      }else{
          add -= nums[i++]
      }
      if( add >= target ) {
          res = Math.min( res , k - i + 1 )
      }
  }
  if( res == nums.length + 1 ) return 0

  return res
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));