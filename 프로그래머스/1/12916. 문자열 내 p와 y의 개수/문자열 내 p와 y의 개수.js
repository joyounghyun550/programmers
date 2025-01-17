function solution(s) {
  return !s.toUpperCase().includes("P") && !s.toUpperCase().includes("Y")
    ? true
    : (s.toUpperCase().match(/P/g) || []).length ===
      (s.toUpperCase().match(/Y/g) || []).length
    ? true
    : false;
}