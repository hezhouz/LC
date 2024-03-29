/**
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
  元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。
 * 

  示例 1：

    输入：s = "hello"
    输出："holle"
*/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
  let arr = Array.from(s)
  let i = 0
  let j = arr.length - 1
  let str = 'aeiouAEIOU'
  while(i < j) {
      while (i < j && !str.includes(arr[i])) { 
          i++ 
      }
      while(j > 0 && !str.includes(s[j])) { 
          j-- 
      } 
       if( i < j ) {
          [arr[i], arr[j]] = [arr[j], arr[i]] 
          i++
          j--
      }
  }
  return arr.join('')
};

console.log(reverseVowels('hello'));