function solution(answers) {
  const answer = [];
  const arr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const student1 = [];
  const student2 = [];
  const student3 = [];
  for (let i = 0; i < answers.length; i++) {
    student1.push(arr[0][i % 5]);
  }
  console.log(student1);
  return answer;
}
solution([1, 2, 3, 4, 5, 1]);
