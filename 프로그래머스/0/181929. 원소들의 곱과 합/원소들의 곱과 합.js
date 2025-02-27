function solution(num_list) {
  const a = num_list.reduce((acc, num) => (acc *= num), 1);
  const b = num_list.reduce((acc, num) => (acc += num), 0);
  return a < b * b ? 1 : 0;
}