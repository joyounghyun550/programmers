function solution(num_str) {
    return [...num_str].reduce((acc, num) => acc += +num, 0)
}