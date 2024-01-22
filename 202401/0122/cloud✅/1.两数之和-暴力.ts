/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const len = nums.length;
    const answerArr:number[] = []
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if(nums[i]+nums[j]===target && i!==j){
                answerArr.push(i);
                answerArr.push(j);
                return answerArr;
            }
        }
    }
    
    return [];
};
// @lc code=end

