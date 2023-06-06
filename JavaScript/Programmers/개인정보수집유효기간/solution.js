function solution(today, terms, privacies) {
  const _terms = terms.map((v) => {
    const [term, month] = v.split(" ");
    const y = Math.floor(Number(month) / 12);
    const m = Number(month) % 12;
    return [term, y, m];
  });
  const answer = [];
  privacies.map((v, idx) => {
    const [date, term] = v.split(" ");
    const [_, y, m] = _terms.find((v) => term === v[0]);
    const [todayYY, todayMM, todayDD] = today.split(".").map((v) => Number(v));
    const [yy, mm, dd] = date.split(".").map((v) => Number(v));
    let newYY = yy + y;
    let newMM = mm + m;
    if (newMM > 12) {
      newYY += 1;
      newMM -= 12;
    }
    // console.log(newYY, newMM, dd, todayYY, todayMM, todayDD);
    // today>새로 계산한 날짜 answer.push
    if (newYY < todayYY) answer.push(idx + 1);
    else if (newYY === todayYY) {
      if (newMM < todayMM) answer.push(idx + 1);
      else if (newMM === todayMM) {
        if (dd <= todayDD) answer.push(idx + 1);
      }
    }
  });
  return answer;
}

const answer = solution(
  "2020.01.01",
  ["Z 3", "D 5"],
  [
    "2019.01.01 D",
    "2019.11.15 Z",
    "2019.08.02 D",
    "2019.07.01 D",
    "2018.12.28 Z",
  ]
);

console.log(answer);
