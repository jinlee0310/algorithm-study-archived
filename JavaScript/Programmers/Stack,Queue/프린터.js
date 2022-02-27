function solution(priorities, location) {
  let cnt = 0;
  let flag;
  while (priorities.length !== 0) {
    const x = priorities.shift();
    flag = false;

    location -= 1;
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] > x) {
        flag = true;
        priorities.push(x);
        if (location === -1) location += priorities.length;
        break;
      }
    }
    if (!flag) {
      if (location === -1) return cnt + 1;
      else cnt += 1;
    }
  }
  //return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
