/**
 * 根据 逆波兰表示法，求表达式的值。

  有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

  注意 两个整数之间的除法只保留整数部分。

  可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * 
 * 
 * 
 * 示例 1：

    输入：tokens = ["2","1","+","3","*"]
    输出：9
    解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  let obj = {
      "+": (a, b) => b + a,
      "-": (a, b) => b - a,
      "*": (a, b) => b * a,
      "/": (a, b) => parseInt(b / a),
  }
  let stack = []

  for(let i = 0 ; i < tokens.length ; i++) {
      let op = obj[tokens[i]]
      if (op) {
          let a = stack.pop()
          let b = stack.pop()
          let res = op(parseInt(a), parseInt(b))
          stack.push(res)
      } else {
          stack.push(tokens[i])
      }
  }
  return stack[0]
};

console.log(evalRPN(["2","1","+","3","*"]));