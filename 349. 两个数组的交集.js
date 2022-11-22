/**
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr =[]
    nums1.forEach(item => {
        if(nums2.includes(item)) {
            arr.push(item)
        }
    })
    return Array.from( new Set(arr) )
};

// 350. 两个数组的交集 II  
// var intersection = function(nums1, nums2) {
//   let map1 = setmaplist(nums1)
//   let map2 = setmaplist(nums2)
//   let res = []
//   for(let key of map1.keys()) {
//       let count1 = map1.get(key)
//       let count2 = map2.get(key)
//       if(count2) {
//           res.push(key)
//       }
//   }
//   return res
// };

// function setmaplist(num) {
//   let map = new Map()
//   num.forEach(item => {
//       let count =  map.get(item)
//       count ?  map.set(item, count+1) : map.set(item, 1)
//   })
//   return map
// }

console.log(intersection(nums1 = [1,2,2,1], nums2 = [2,2]));