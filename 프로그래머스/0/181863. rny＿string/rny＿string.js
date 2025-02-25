function solution(rny_string) {
  var answer = "";
  data = rny_string.split("");
  data.map((item) => {
    item === "m" ? (answer += "rn") : (answer += item);
  });
  return answer;
}