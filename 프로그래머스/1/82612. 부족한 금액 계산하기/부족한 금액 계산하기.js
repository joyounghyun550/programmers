function solution(price, money, count) {
  totalCost = 0;
  for (let i = 1; i <= count; i++) {
    totalCost += price * i;
  }
  return totalCost > money ? totalCost - money : 0;
}