function solution(arr, divisor) {
  const answer = arr.filter((item) => {
    return item % divisor === 0
  })
  return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b)
}