/**
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
    有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    每个右括号都有一个对应的相同类型的左括号。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
  let stack = []
  let kuo = '([{'
  let obj = {
      ')': '(',
      ']': '[',
      '}': '{',
  }
  for (let i = 0; i < s.length; i++) {
      if (kuo.includes(s[i])) {
          stack.push(s[i])
      } else {
          if (stack[stack.length-1] === obj[s[i]] ) {
              stack.pop()
          } else {
              return false
          }
      }
  }
  if (stack.length !== 0) return false

  return true
};

console.log(isValid('()[]{}'));