function solution(participant, completion) {
  //음 어캐풀징
  let answer = '';
  const hash = {};
  participant.forEach(entry => {
    hash[entry] = hash[entry] ? hash[entry] + 1 : 1;
  });
  completion.forEach(entry => {
    hash[entry] -= 1;
  });

  for (let key in hash) {
    if (hash[key] >= 1) return key;
  }
}
solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']);
solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']);
