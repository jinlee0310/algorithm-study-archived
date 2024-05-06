function solution(my_string) {
    const answer = [];
    for (let i = 0; i < my_string.length; i++) {
        const num = Number(my_string[i]);
        if (!isNaN(num)) answer.push(num);
    }
    return answer.sort((a, b) => a - b);
}
