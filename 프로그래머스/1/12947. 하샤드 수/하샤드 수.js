function solution(x) {
  var result = String(x).split("");
  var num = 0;
  for (var i = 0; i < result.length; i++) {
    num += parseInt(result[i]);
  }
  return x % num == 0 ? true : false;
}