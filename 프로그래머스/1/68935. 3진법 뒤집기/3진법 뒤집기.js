function solution(n) {
    const trinary = n.toString(3);
    const result = trinary.split("").reverse().join("");
    return parseInt(result,3);
}