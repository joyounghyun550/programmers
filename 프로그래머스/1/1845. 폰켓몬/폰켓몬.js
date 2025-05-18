function solution(nums) {
    const max = nums.length / 2;
    const kind = new Set(nums).size;
    return kind > max ? max : kind;
}