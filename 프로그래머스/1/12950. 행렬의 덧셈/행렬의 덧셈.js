function solution(arr1, arr2) {
    var answer = [];
    var result = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1[i].length; j++) {
            answer.push(arr1[i][j] + arr2[i][j])
        }
        result.push(answer)
        answer = [];
    }
    return result;
}