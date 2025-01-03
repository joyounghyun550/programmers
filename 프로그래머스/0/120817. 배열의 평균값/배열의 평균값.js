function solution(numbers) {
  var answer = 0;
  numbers.forEach((item) => {
    answer += item;
  });
  return (answer /= numbers.length);
}