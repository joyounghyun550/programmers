function solution(n, k) {
    let total = n * 12000 + k * 2000;
    let service = Math.floor(n / 10) * 2000;
    let discountTotal = total - service;
    return discountTotal;
}