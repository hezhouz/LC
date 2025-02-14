

/**
1552. 两球之间的磁力

在代号为 C-137 的地球上，Rick 发现如果他将两个球放在他新发明的篮子里，它们之间会形成特殊形式的磁力。Rick 有 n 个空的篮子，第 i 个篮子的位置在 position[i] ，Morty 想把 m 个球放到这些篮子里，使得任意两球间 最小磁力 最大。

已知两个球如果分别位于 x 和 y ，那么它们之间的磁力为 |x - y| 。

给你一个整数数组 position 和一个整数 m ，请你返回最大化的最小磁力。

示例 1：
输入：position = [1,2,3,4,7], m = 3
输出：3
解释：将 3 个球分别放入位于 1，4 和 7 的三个篮子，两球间的磁力分别为 [3, 3, 6]。最小磁力为 3 。我们没办法让最小磁力大于 3 。
示例 2：

输入：position = [5,4,3,2,1,1000000000], m = 2
输出：999999999
解释：我们使用位于 1 和 1000000000 的篮子时最小磁力最大。

提示：
n == position.length
2 <= n <= 10^5
1 <= position[i] <= 10^9
所有 position 中的整数 互不相同 。
2 <= m <= position.length
*/


/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
  /**
      简化题目理解
      男厕所问题，有n个坑位， m个人。每个人都尽可能的远离其他人。
          求能塞下m个人 相邻的两个人的最小距离尽可能的大


    使用 二分+贪心
  */

  position.sort((x, y) => x - y) // 从大到小排序
  let left = 1 // 定义左指针
  let right = position[position.length - 1] - position[0] // 定义最大指针
  let ans = -1 // 答案的初始值

  while(left <= right) {
      const mid = Math.floor((left + right) / 2) //左右指针对应数 计算每一次的平均值
      if(check(mid, position, m)) { // 来判断是否能以 mid 作为最小距离放置 m 个球。
          //如果可以成功放下 说明可以增加距离
          ans = mid //，
          left = mid + 1 // 所以将 左指针 ➡️右移 ，继续查找更大的距离。
      }else {
          // 如果不能放置，说明距离太大，应该缩小距离
          right = mid - 1  // 右指针  👈左移
      }
  }
  return ans
};

const check = (x, position, m) => {
  let pre = position[0] // 记录当前⚽️的位置
  let cnt = 1; // 不断加一   记录已放置⚽️的数量
  for (let i = 1; i < position.length; ++i) {
      if (position[i] - pre >= x) { 
          //判断当前球与前一个放置的球⚽️之间的距离是否大于等于 左右指针对应数的平均值
          // 如果满足条件 更新当前球⚽️的位置继续执行
          pre = position[i];
          // 增加球的数量
          cnt += 1;
      }
  }
  return cnt >= m; 
}