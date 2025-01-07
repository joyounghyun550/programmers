function solution(x, n) {
    var answer = [];
    var count = 0;
    while(true) {
        if(n !== answer.length) {
            count += x;
            answer.push(count);
        } else {
            break;
        }
    }
    return answer;
}