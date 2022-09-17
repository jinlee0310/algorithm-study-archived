// permutations 돌리고
// 가능한 조건인지 확인
function permutation(arr, num) {
  const res = [];
  if (num === 1) {
    return arr.map((v) => [v]);
  }

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutaion) => [v, ...permutaion]);
    res.push(...attach);
  });
  return res;
}
function solution(k, dungeons) {
  let answer = -1;
  const dungeonsPermutations = permutation(dungeons, dungeons.length);
  console.log(dungeonsPermutations);
  for (let i = 0; i < dungeonsPermutations.length; i++) {
    let cnt = 0;
    let health = k;
    for (let j = 0; j < dungeonsPermutations[i].length; j++) {
      if (health >= dungeonsPermutations[i][j][0]) {
        health -= dungeonsPermutations[i][j][1];
        cnt++;
      } else {
        break;
      }
      answer = Math.max(answer, cnt);
    }
  }
  return answer;
}

const arr = solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
