/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 2) {
    return true;
  }
  let left = 0, right = num >> 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (num / mid > mid) {
      left = mid + 1;
    } else if (num / mid < mid) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};