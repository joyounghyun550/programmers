function solution(seoul) {
    const result = seoul.findIndex((item) => {
        return item === "Kim"
    })
    var answer = `김서방은 ${result}에 있다`;
    return answer;
}