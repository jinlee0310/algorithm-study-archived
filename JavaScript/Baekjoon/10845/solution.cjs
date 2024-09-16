const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// class Queue {
//   constructor() {
//     this.queue = [];
//     this.head = 0;
//     this.tail = 0;
//   }
//   push = (value) => {
//     this.queue.push(value);
//     this.tail++;
//   };
//   pop = () => {
//     if (this.isEmpty()) {
//       this.queue = [];
//       this.head = 0;
//       this.tail = 0;
//       return;
//     }
//     const head = this.queue[this.head];
//     this.head++;
//     return head;
//   };
//   size = () => {
//     if (this.isEmpty()) {
//       this.queue = [];
//       this.head = 0;
//       this.tail = 0;
//       return this.queue.length;
//     }
//     return this.tail - this.head;
//   };
//   isEmpty = () => {
//     return this.queue.length === 0 || this.head === this.tail;
//   };
//   empty = () => {
//     if (this.isEmpty()) {
//       this.queue = [];
//       this.head = 0;
//       this.tail = 0;
//       return 1;
//     } else {
//       return 0;
//     }
//   };
//   front = () => {
//     if (this.isEmpty()) {
//       this.queue = [];
//       this.head = 0;
//       this.tail = 0;
//       return -1;
//     } else {
//       return this.queue[this.head];
//     }
//   };
//   back = () => {
//     if (this.isEmpty()) {
//       this.queue = [];
//       this.head = 0;
//       this.tail = 0;
//       return -1;
//     } else {
//       return this.queue[this.tail - 1];
//     }
//   };
// }
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
      return this.tail - this.head + 1;
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
    return temp;
  }
}

const solution = (input) => {
  const n = Number(input[0]);
  const queue = new Queue();
  for (let i = 1; i <= n; i++) {
    const [op, num] = input[i].split(" ");
    if (op === "push") {
      queue.add(Number(num));
    } else if (op === "pop") {
      if (queue.size() === 0) {
        console.log(-1);
      } else {
        console.log(queue.popleft());
      }
    } else if (op === "size") {
      console.log(queue.size());
    } else if (op === "empty") {
      console.log(queue.size() === 0 ? 1 : 0);
    } else if (op === "front") {
      console.log(queue.storage[queue.head] ?? -1);
    } else if (op === "back") {
      console.log(queue.storage[queue.tail] ?? -1);
    }
  }
};
solution(input);
