function solution(arr) {
  let minNumber = Math.min(...arr);
  let result = arr.filter((item) => {
    return item !== minNumber;
  });
  return arr.length > 1 ? result : [-1];
}