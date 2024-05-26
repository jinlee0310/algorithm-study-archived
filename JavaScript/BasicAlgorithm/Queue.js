class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }
    size() {
        if (this.storage[this.tail] === undefined) {
            return 0;
        } else {
            return this.tail - this.tail + 1;
        }
    }
    add(value) {
        if (this.size() === 0) {
            this.storage["0"] = value;
        } else {
            this.tail += 1;
            this.storage[this.tail] = value;
        }
        // console.log(this.storage, this.head, this.tail);
    }

    popleft() {
        let temp;
        if (this.head === this.tail) {
            temp = this.storage[this.head];
            delete this.storage[this.head];
            // 같으면 0으로 초기화
            this.head = 0;
            this.tail = 0;
        } else {
            temp = this.storage[this.head];
            delete this.storage[this.head];
            this.head++;
        }
        // console.log(this.storage, this.head, this.tail);
        return temp;
    }
}

const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.popleft();
queue.popleft();
queue.popleft();
queue.popleft();
queue.add(4);
