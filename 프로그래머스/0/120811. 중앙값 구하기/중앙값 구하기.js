function solution(array) {
    let sortArray = array.sort((a, b) => a - b);
    return sortArray.length % 2 === 0
    ? (sortArray[Math.floor(array.length / 2)] + sortArray[Math.floor(array.length / 2 + 1)]) / 2
    : sortArray[Math.floor(array.length / 2)]
}