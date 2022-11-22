/**
 *  给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

  

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0 // 左指针
  let right = -1 // 右指针
  let obj = {}
  let res = 0
  // 
  while( left < s.length ) {
       // 如果在obj中没有重复的 就在 obj中标记 并扩大右边界
       let str = s[right+1]
      if( !obj[str]  && str  != undefined ){ 
          obj[str] = 1
          right++
      }else{ //否则 在 obj中清除标记 缩小左边界
          obj[s[left]] = 0
          left++
      }
      // 然后 记录 当前 右 - 左 + 1 的长度 保存 每次取最大值
      res = Math.max( res, right - left + 1 )
  }
  return res
};

console.log(lengthOfLongestSubstring('abcabcbb'));