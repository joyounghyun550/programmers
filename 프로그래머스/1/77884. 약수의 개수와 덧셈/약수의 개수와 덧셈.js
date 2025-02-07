function solution(left, right) {
  let result = 0;
  let count = [];
  let total = [];
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count.push(j);
      }
    }
    total.push(count);
    count = [];
  }

  for (item of total) {
    if (item.length % 2 === 0) {
      result += item[item.length - 1];
    } else {
      result -= item[item.length - 1];
    }
  }
  return result;
}