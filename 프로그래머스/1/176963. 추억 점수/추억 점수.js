function solution(name, yearning, photo) {
    var answer = [];
    var score = 0;
    for(let i = 0; i < photo.length; i++) {
        for(let j = 0; j < name.length; j++) {
            if(photo[i].includes(name[j])) {
                score += yearning[j];
            }
        }
        answer.push(score);
        score = 0;
    }
    return answer;
}