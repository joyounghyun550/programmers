function solution(myString, pat) {
  return [...myString].map((element) => {
    return element === "A" ? "B" : "A";
  }).join("").includes(pat) ? 1 : 0;
}