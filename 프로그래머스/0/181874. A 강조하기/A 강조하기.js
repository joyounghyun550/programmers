function solution(my_string) {
  const a = my_string.replaceAll("a", "a".toUpperCase());
  return [...a]
    .map((item) => {
      return item !== "A" ? item.toLowerCase() : item
    })
    .join("");
}