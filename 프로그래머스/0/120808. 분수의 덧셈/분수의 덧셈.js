function solution(numer1, denom1, numer2, denom2) {
  // 두 분수의 분모를 같게 만들어야 하므로
  var commonDenom = denom1 * denom2;

  // 분모를 같게 만들기 위해 분자도 비례적으로 수정
  var commonNumer = numer1 * denom2 + numer2 * denom1;

  // 최대공약수(GCD)를 구하기 위해 Euclidean Algorithm 사용
  function gcd(a, b) {
    while (b) {
      var temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // 최대공약수로 분자와 분모를 나누어 약분
  var gcdResult = gcd(commonNumer, commonDenom);

  // 약분한 결과 반환
  return [commonNumer / gcdResult, commonDenom / gcdResult];
}
