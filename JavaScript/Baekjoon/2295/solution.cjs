const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : path.join(__dirname, "/input.txt"),
  )
  .toString()
  .trim()
  .split("\n");

const combination = (arr, n) => {
  if (n === 1) return arr.map((v) => [v]);

  const answer = [];
  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(idx + 1)];
    const combinations = combination(rest, n - 1);
    const attach = combinations.map((combination) => [...combination, v]);
    answer.push(...attach);
  });
  return answer;
};

const binarySearch = (numArr, target) => {
  let st = 0,
    en = numArr.length - 1;
  if (numArr[st] === target) return true;
  if (numArr[en] === target) return true;
  while (st < en) {
    const mid = Math.floor((st + en) / 2);
    if (numArr[mid] === target) return true;
    else if (numArr[mid] < target) {
      st = mid + 1;
    } else {
      en = mid - 1;
    }
  }
  return false;
};

const solution = (input) => {
  const n = Number(input[0]);
  const numArr = [];
  for (let i = 1; i <= n; i++) {
    numArr.push(Number(input[i]));
  }
  numArr.sort((a, b) => a - b);
  const sumArr = combination(numArr, 3).map((v) =>
    v.reduce((acc, cur) => acc + cur, 0),
  );
  let maxSum = 0;
  for (let i = 0; i < sumArr.length; i++) {
    if (binarySearch(numArr, sumArr[i])) {
      maxSum = Math.max(maxSum, sumArr[i]);
    }
  }
  return maxSum;
};

console.log(solution(input));
