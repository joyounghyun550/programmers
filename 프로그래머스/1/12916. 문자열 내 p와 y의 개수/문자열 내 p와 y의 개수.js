function solution(s) {
  let UpperCase = s.toUpperCase();
  let pSplitLt = UpperCase.split("P").length - 1;
  let ySplitLt = UpperCase.split("Y").length - 1;

  return pSplitLt === ySplitLt ? true : false;
}