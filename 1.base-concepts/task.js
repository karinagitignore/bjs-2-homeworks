"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;
   if (d < 0) {
  return arr;
}
if (d === 0) {
    arr.push(-b / (2 * a));
    return arr;
}
const root1 = (-b + Math.sqrt(d)) / (2 * a);
const root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
    return arr;
}
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = (percent / 100) / 12;
  const S = amount - contribution;

  if (S <= 0) {
    return 0;
  }

  const payment = S * (P + (P / ((1 + P) ** countMonths - 1)));

  const totalPayment = payment * countMonths;

  return Number(totalPayment.toFixed(2));
}