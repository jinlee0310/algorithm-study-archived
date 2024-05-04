function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const queue = [];
    while (truck_weights.length !== 0 || queue.length !== 0) {
        answer++;
        if (queue.length !== 0) {
            if (queue[0][1] >= bridge_length) queue.shift();
        }
        if (
            queue.reduce((acc, cur) => acc + cur[0], 0) + truck_weights[0] <=
                weight &&
            queue.length < bridge_length
        ) {
            const now = truck_weights.shift();
            queue.push([now, 0]);
        }
        queue.forEach((v) => v[1]++);
        // console.log(answer,queue)
    }
    return answer;
}
