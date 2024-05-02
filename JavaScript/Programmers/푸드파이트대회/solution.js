function solution(food) {
    const arr = [];
    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            arr.push(i);
        }
    }
    return `${arr.join("")}0${arr.reverse().join("")}`;
}
