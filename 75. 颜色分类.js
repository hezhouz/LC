/**
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
    我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
    必须在不使用库的sort函数的情况下解决这个问题。
 * 

    示例 1：
    输入：nums = [2,0,2,1,1,0]
    输出：[0,0,1,1,2,2]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  // 三路快排
  //   0 - zero(索引) == 0  / zero+1 - two == 1 / two+1 - n-1 == 2

  let zero = -1
  let two = nums.length

  for(let i = 0 ; i < two ;) {
      if(nums[i] == 0){
          ++zero;
          [nums[zero] , nums[i]] = [nums[i] , nums[zero]];
          i++;
      }else if( nums[i] == 1 ) {
          i++
      }else if( nums[i] == 2 ) {
          --two;
          [nums[two] , nums[i]] = [nums[i] , nums[two]];
      }
  } 

  return nums
};

console.log(sortColors([2,0,2,1,1,0]));