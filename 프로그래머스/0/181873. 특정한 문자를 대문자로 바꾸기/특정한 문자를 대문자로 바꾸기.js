function solution(my_string, alp) {
  return [...my_string]
    .map((item) => {
      return item === alp ? item.toUpperCase() : item;
    })
    .join("");
}