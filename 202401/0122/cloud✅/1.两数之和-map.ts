/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const len = nums.length;
    const map:Map<number,number> = new Map;
    let answerI;
    for(let i=0;i<len;i++){
        map[nums[i]]=i
    }
    for(let i=0;i<len;i++){
        answerI = map[target-nums[i]];
        if(answerI&&answerI!==i){
            return [answerI,i]
        }
    }
    // nums.forEach(i=>{
    //     console.log(nums[i],i)
    //     map[nums[i]] = i;
    //     console.log(map);
        
    // })
    
    // nums.forEach((i,index) => {
    //     answerI = map[target-i];
    //     if(answerI){
    //         return [index,answerI]
    //     }
    // });

    return [];
};
// @lc code=end

