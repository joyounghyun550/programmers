function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((item) => {
    return item % divisor === 0
  })
  if(answer.length < 1) {
      answer.push(-1);
  }
  answer.sort((a,b) => a-b)
  return answer;
}