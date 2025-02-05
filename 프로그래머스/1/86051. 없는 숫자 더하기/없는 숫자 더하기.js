function solution(numbers) {
    let result = 0;
    for(let i = 0; i <= 9; i++) {
        result += numbers.includes(i) ? 0 : i;
    }
    return result;
}