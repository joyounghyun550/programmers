function solution(my_string) {
  var b = my_string.split(" ");
  return b.filter((item) => item !== "");
}