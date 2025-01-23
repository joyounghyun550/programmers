function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 0
    ? s.slice(mid - 1, mid + 1)  // 짝수 길이일 때
    : s[mid];  // 홀수 길이일 때
}

