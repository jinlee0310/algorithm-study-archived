const calcTime = (startTime, endTime) => {
    let [startH, startM] = startTime.split(":").map((v) => Number(v));
    let [endH, endM] = endTime.split(":").map((v) => Number(v));

    if (startM <= endM) {
        return (endH - startH) * 60 + (endM - startM);
    } else {
        return (endH - 1 - startH) * 60 + (60 + endM - startM);
    }
};

const calcFee = (fees, totalTime) => {
    const [defaultTime, defaultFee, unitTime, unitFee] = fees;
    if (totalTime - defaultTime <= 0) return defaultFee;
    return (
        Math.ceil((totalTime - defaultTime) / unitTime) * unitFee + defaultFee
    );
};

function solution(fees, records) {
    const parking = [];
    const arr = [];
    records.forEach((record) => {
        const [time, number, op] = record.split(" ");
        if (op === "IN") parking.push(record.split(" "));
        else {
            const idx = parking.findIndex((v) => v[1] === number);
            const startTime = parking[idx][0];
            parking.splice(idx, 1);
            const totalTime = calcTime(startTime, time);

            // 중복 차량
            const _idx = arr.findIndex((v) => v[0] === number);
            if (_idx !== -1) {
                const [_number, _totalTime] = arr[_idx];
                arr.splice(_idx, 1);
                arr.push([_number, _totalTime + totalTime]);
            } else {
                arr.push([number, totalTime]);
            }
        }
    });
    if (parking.length !== 0) {
        parking.forEach((v) => {
            const [time, number, ...rest] = v;
            const totalTime = calcTime(time, "23:59");

            const _idx = arr.findIndex((v) => v[0] === number);
            if (_idx !== -1) {
                const [_number, _totalTime] = arr[_idx];
                arr.splice(_idx, 1);
                arr.push([_number, _totalTime + totalTime]);
            } else {
                arr.push([number, totalTime]);
            }
        });
    }
    console.log(arr);
    const answer = arr
        .map((v) => {
            const [number, totalTime] = v;
            const fee = calcFee(fees, totalTime);
            return [number, fee];
        })
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map((v) => v[1]);
    console.log(answer);
    return answer;
}

solution([1, 461, 1, 10], ["00:00 1234 IN"]);
