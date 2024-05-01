function solution(dots) {
    const [dot1, dot2, ...rest] = dots;
    const [x1, y1] = dot1;
    const [x2, y2] = dot2;
    let width = 0,
        height = 0;
    for (let i = 0; i < dots.length; i++) {
        const [x, y] = dots[i];
        if (x === x1 && y !== y1) {
            height = Math.abs(y - y1);
        }
        if (y === y2 && x !== x2) {
            width = Math.abs(x - x2);
        }
    }
    return width * height;
}
