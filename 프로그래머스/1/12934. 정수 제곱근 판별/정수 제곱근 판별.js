function solution(n) {
  var answer = -1; // 초기값
  for (let i = 1; i * i <= n; i++) { // i는 1부터 시작
    if (i * i === n) { // 완전 제곱수인지 확인
      answer = (i + 1) * (i + 1); // 다음 숫자의 제곱을 계산
      break; // 조건을 만족하면 루프 종료
    }
  }
  return answer; // 결과 반환
}