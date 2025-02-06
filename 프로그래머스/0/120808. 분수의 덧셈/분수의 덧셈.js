function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  var a = denom1;
  var b = denom2;
  var c = numer1;
  var d = numer2;
  var totalNumer = 0;
  var totalDenom = 0;
  while (a !== b) {
    a < b ? ((a += denom1), (c += numer1)) : ((b += denom2), (d += numer2));
  }

  if (a === b) {
    totalNumer = c + d;
    totalDenom = a;

    var result = gcd(totalNumer, totalDenom);

    answer.push(totalNumer / result, totalDenom / result);
  }

  return answer;
}