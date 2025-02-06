function solution(s) {
    const mid = Math.floor(s.length / 2);
    const result = s.length % 2 === 0
    ? s.slice(mid - 1, mid + 1)
    : s[mid];
    return result;
}