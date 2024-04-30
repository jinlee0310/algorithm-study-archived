function solution(quiz) {
    const answer = [];
    for (let i = 0; i < quiz.length; i++) {
        const arr = quiz[i].split(" ");
        let result = Number(arr[0]);
        const ans = Number(arr[arr.length - 1]);
        for (let j = 1; j < arr.length - 1; j++) {
            if (arr[j] === "-") {
                result -= Number(arr[j + 1]);
            } else if (arr[j] === "+") {
                result += Number(arr[j + 1]);
            }
        }
        if (result === ans) {
            answer.push("O");
        } else {
            answer.push("X");
        }
    }
    return answer;
}
