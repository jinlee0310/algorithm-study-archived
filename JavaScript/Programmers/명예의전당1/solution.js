export default function solution(k, score) {
    const answer = [];
    const hallOfFame = [];
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            const minScore = Math.min(...score.slice(0, i + 1));
            hallOfFame.push(score[i]);
            answer.push(minScore);
        } else {
            if (answer[i - 1] < score[i]) {
                const idx = hallOfFame.findIndex((v) => v === answer[i - 1]);
                hallOfFame.splice(idx, 1);
                hallOfFame.push(score[i]);
                const minScore = Math.min(...hallOfFame);
                answer.push(minScore);
            } else {
                const minScore = Math.min(...hallOfFame);
                answer.push(minScore);
            }
        }
    }
    return answer;
}
