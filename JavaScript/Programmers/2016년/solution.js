function solution(a, b) {
    const mon = a - 1;
    let date = 0;
    const mDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const yoil = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

    for (let i = 0; i < mon; i++) {
        date += mDate[i];
    }
    date += b - 1;
    return yoil[date % 7];
}
