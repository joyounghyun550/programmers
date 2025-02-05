function solution(arr) {
  let minNumber = Math.min(...arr);
  let minIndex = arr.findIndex((item) => item === minNumber);
  arr.splice(minIndex, 1);
  return arr.length > 0 ? arr : [-1];
}
