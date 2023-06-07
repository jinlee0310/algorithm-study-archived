function solution(survey, choices) {
  var answer = "";

  const obj1 = { R: 0, C: 0, J: 0, A: 0 };
  const obj2 = { T: 0, F: 0, M: 0, N: 0 };

  choices.forEach((v, idx) => {
    if (v > 4) {
      const key = survey[idx][1];
      if (Object.keys(obj1).includes(key)) obj1[key] += v - 4;
      else obj2[key] += v - 4;
    } else if (v < 4) {
      const key = survey[idx][0];
      if (Object.keys(obj1).includes(key)) obj1[key] += 4 - v;
      else obj2[key] += 4 - v;
    }
  });
  console.log(obj1, obj2);
  for (let i = 0; i < 4; i++) {
    const arr1 = Object.keys(obj1);
    const arr2 = Object.keys(obj2);

    const key1 = arr1[i];
    const key2 = arr2[i];

    if (obj1[key1] > obj2[key2]) answer += key1;
    else if (obj1[key1] === obj2[key2]) {
      answer += [key1, key2].sort()[0];
    } else answer += key2;
  }
  return answer;
}

const answer = solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);
console.log(answer);
