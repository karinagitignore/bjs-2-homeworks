"use strict"
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value > max) max = value;
    if (value < min) min = value;
    sum += value;
  }
  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }
  return sum;

}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;

}

function differenceEvenOddWorker(...arr) {
   if (arr.length === 0) return 0;
  
  let sumEven = 0;
  let sumOdd = 0;
  
  for (let value of arr) {
    if (value % 2 === 0) {
      sumEven += value;
    } else {
      sumOdd += value;
    }
  }
  
  return sumEven - sumOdd;
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sumEven = 0;
  let countEven = 0;
  
  for (let value of arr) {
    if (value % 2 === 0) {
      sumEven += value;
      countEven++;
    }
  }
  return countEven === 0 ? 0 : sumEven / countEven;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    const result = func(...arr);

  if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
   }

  return maxWorkerResult;

}
