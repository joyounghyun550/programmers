function solution(num_list) {
  const a = num_list.reduce((acc, num) => (acc *= num), 1);
  const b = Math.pow(num_list.reduce((acc, num) => (acc += num), 0), 2);
  return a < b ? 1 : 0;
}