function solution(s) {
    const arr = s.split(" ");
    let answer = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === "Z") {
            i--;
        } else {
            answer += Number(arr[i]);
        }
    }
    return answer;
}
