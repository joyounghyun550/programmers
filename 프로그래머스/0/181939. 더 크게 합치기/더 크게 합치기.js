function solution(a, b) {
    const result = +(String(a) + String(b)) > +(String(b) + String(a)) ? +(String(a) + String(b)) : +(String(b) + String(a));
    return result;
}