function solution(numbers) {
  const num = numbers.map(el => el.toString());
  num.sort((a, b) => {
    const numA = a.repeat(4).slice(0, 4);
    const numB = b.repeat(4).slice(0, 4);
    //console.log(numA,numB)
    return numB - numA;
  });
  //console.log(num)
  const sum = parseInt(num.reduce((acc, cur) => acc + cur));
  //console.log(sum)
  if (sum === 0) return '0';
  return num.join('');
}
