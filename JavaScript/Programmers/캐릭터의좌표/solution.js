function solution(keyinput, board) {
    let x = 0,
        y = 0;
    let [w, h] = board;
    keyinput.forEach((key) => {
        if (key === "up" && Math.floor(h / 2) > y) {
            y++;
        } else if (key === "down" && -1 * Math.floor(h / 2) < y) {
            y--;
        } else if (key === "right" && Math.floor(w / 2) > x) {
            x++;
        } else if (key === "left" && -1 * Math.floor(w / 2) < x) {
            x--;
        }
    });
    return [x, y];
}
