/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
  不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 * 

  示例 1：

  输入：nums = [1,1,1,2,2,3]
  输出：5, nums = [1,1,2,2,3]
  解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。 不需要考虑数组中超出新长度后面的元素。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
      if (k < 2 || nums[i] != nums[k - 2]) {
          nums[k] = nums[i]
          k++
      }
  }
  return k
};

console.log(removeDuplicates([1,1,1,2,2,3]));