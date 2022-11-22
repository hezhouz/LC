
/** 
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
    你返回所有和为 0 且不重复的三元组。
    注意：答案中不可以包含重复的三元组。
 * 
 * 
*/


// 两数之和的进阶版
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 let twoSum = function (nums, target) {
  let map1 = new Map()
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let result = map1.get(target - nums[i])
    if (result !== undefined) {
      res.push([nums[result], nums[i]])
    }
    map1.set(nums[i], i)
  }
  return res
};


let threeSum = function (nums) {
  nums.sort((a,b) => a - b)
  let set = new Set()
  let results = []
  for (let i = 0; i < nums.length - 2; i++) {
    let find = twoSum(nums.slice(i + 1), -nums[i])
    if (find) {
      find.forEach((arr) => {
        if (!set.has(arr.join(''))) {
          results.push([nums[i], ...arr])
        }
        set.add(arr.join(''))
      })
    }
  }

  return results
}

console.log(threeSum([-1,0,1,2,-1,-4]));