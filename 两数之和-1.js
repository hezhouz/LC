/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

  你可以按任意顺序返回答案。

      示例 1：

    输入：
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

*/

let nums = [2, 7, 11, 15], target = 9
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 *  
 * 
 */


let twoSum = function (nums, target) {
  //建立一个map 存储每一个元素和对应下标 { 2:0, 7:1, 11:2, 15:3 }
  let map1 = new Map()
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let count = target - nums[i]
    if (map1.has(count)) {
      res.push(...[i, map1.get(count)])
      return res
    }
    map1.set(nums[i], i)
  }

  throw Error('没有找到')
};


console.log(twoSum(nums, target));