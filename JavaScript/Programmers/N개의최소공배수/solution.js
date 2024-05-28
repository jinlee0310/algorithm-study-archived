function solution(arr) {
    let i = 1;
    while (true) {
        let flag = false;
        let cnt = 0;
        arr.forEach((num) => {
            if (i % num === 0) cnt++;
        });
        if (cnt === arr.length) flag = true;
        if (flag) break;
        else i++;
    }

    return i;
}
