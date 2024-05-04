function solution(name, yearning, photo) {
    const answer = [];
    for (let i = 0; i < photo.length; i++) {
        let sum = 0;
        for (let j = 0; j < photo[i].length; j++) {
            const idx = name.findIndex((v) => v === photo[i][j]);
            sum += idx !== -1 ? yearning[idx] : 0;
        }
        answer.push(sum);
    }
    return answer;
}
