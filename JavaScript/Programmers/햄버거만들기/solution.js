const emptyStack = (stack, cnt) => {
    for (let i = 0; i < cnt; i++) {
        stack.pop();
    }
};

const empty = (stack) => {
    while (stack.length !== 0) {
        stack.pop();
    }
};

function solution(ingredient) {
    let answer = 0;
    const stack = [];
    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient[i] === 1) {
            if (stack.length === 0) {
                stack.push(ingredient[i]);
            } else {
                if (stack[stack.length - 1] === 3) {
                    answer += 1;
                    emptyStack(stack, 3);
                } else {
                    stack.push(ingredient[i]);
                }
            }
        } else if (ingredient[i] === 2) {
            if (stack[stack.length - 1] === 1) {
                stack.push(ingredient[i]);
            } else {
                empty(stack);
            }
        } else {
            if (stack[stack.length - 1] === 2) {
                stack.push(ingredient[i]);
            } else {
                empty(stack);
            }
        }
        // console.log(stack);
    }
    // console.log(answer);
    return answer;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
