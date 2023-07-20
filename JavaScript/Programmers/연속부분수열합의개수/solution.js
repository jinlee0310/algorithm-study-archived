// O(N^3)으로 시초
// function solution(elements) {
//     const answer = [];

//     for (let i = 0; i < elements.length; i++) {
//         for (let k = 1; k <= elements.length; k++) {
//             let sum = 0;
//             for (let j = i; j < i + k; j++) {
//                 if (j >= elements.length) {
//                     sum += elements[j - elements.length];
//                 } else {
//                     sum += elements[j];
//                 }
//             }
//             if (!answer.includes(sum)) answer.push(sum);
//         }
//     }
//     return answer.length;
// }

function solution(elements) {
    let answer = [];
    const extend = [...elements, ...elements];

    elements.forEach((element, idx) => {
        if (idx < elements.length) {
            for (let i = 0; i < elements.length; i++) {
                const slice = extend.slice(i, i + 1 + idx);
                answer.push(slice.reduce((acc, cur) => acc + cur));
            }
        }
    });
    const set = new Set(answer);
    // console.log([...set].length);
    return [...set].length;
}

solution([7, 9, 1, 1, 4]);
