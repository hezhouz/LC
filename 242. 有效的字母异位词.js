/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

  注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 * 

  示例 1:

    输入: s = "anagram", t = "nagaram"
    输出: true
    示例 2:

    输入: s = "rat", t = "car"
    输出: false
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  let map1 = newMapObject(s.split('')) // {r:1,a:1,t:1}
  let map2 = newMapObject(t.split('')) // {c:1,a:1,r:1}
  let res = true
  if(map1.size != map2.size ) return false
  for (const key of map1.keys()) {
    if(map2.get(key) != map1.get(key)){
      res = false
    }
  }
  return res
};

function newMapObject(str) {
  let map = new Map()
  str.forEach(ele => {
    let count = map.get(ele) 
    count ? map.set(ele, count + 1) : map.set(ele, 1)
  });
  return map
}

console.log(isAnagram(s = "anagram", t = "nagaram"));