/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
  let left = 0, right = x >> 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (x / mid > mid) {
      left = mid + 1;
    } else if (x / mid < mid) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return right;
};