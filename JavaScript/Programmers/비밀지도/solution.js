function compileBinary(arr, n) {
    const binaryArr = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        const numArr = [];
        while (num !== 0) {
            if (num % 2 === 1) numArr.push(1);
            else numArr.push(0);

            num = Math.floor(num / 2);
        }
        if (numArr.length < n) {
            const additionalLength = n - numArr.length;
            for (let j = 0; j < additionalLength; j++) {
                numArr.push(0);
            }
        }
        binaryArr.push(numArr.reverse());
    }
    return binaryArr;
}

function solution(n, arr1, arr2) {
    var answer = [];

    const answerMap = Array.from(Array(n), () => Array(n).fill(""));

    console.log(answerMap);

    const binaryArr1 = compileBinary(arr1, n);
    const binaryArr2 = compileBinary(arr2, n);
    console.log(binaryArr1);
    console.log(binaryArr2);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (binaryArr1[j][i] === 0 && binaryArr2[j][i] === 0) {
                answerMap[j][i] = " ";
            } else {
                answerMap[j][i] = "#";
            }
        }
    }
    console.log(answerMap);
    return answerMap.map((v) => v.join(""));
}

const answer = solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
console.log(answer);
