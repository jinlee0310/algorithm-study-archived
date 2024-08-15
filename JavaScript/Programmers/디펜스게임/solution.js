class Heap {
  constructor() {
    this.heap = [];
  }

  #getLeftChildIdx = (parentIdx) => parentIdx * 2 + 1;

  #getRightChildIdx = (parentIdx) => parentIdx * 2 + 2;

  #getParentIdx = (childIdx) => Math.floor((childIdx - 1) / 2);

  peek = () => this.heap[0];

  insert = (value) => {
    this.heap.push(value);
    this.#heapifyUp();
  };

  getHeapLength = () => this.heap.length;

  #heapifyUp = () => {
    let idx = this.heap.length - 1;
    const lastInsertedNode = this.heap[idx];

    while (idx > 0) {
      const parentIdx = this.#getParentIdx(idx);

      if (this.heap[parentIdx] > lastInsertedNode) {
        this.heap[idx] = this.heap[parentIdx];
        idx = parentIdx;
      } else break;
    }

    this.heap[idx] = lastInsertedNode;
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.#heapifyDown();
    }

    return rootNode;
  };

  #heapifyDown = () => {
    let idx = 0;
    const count = this.heap.length;
    const rootNode = this.heap[idx];

    while (this.#getLeftChildIdx(idx) < count) {
      const leftChildIdx = this.#getLeftChildIdx(idx);
      const rightChildIdx = this.#getRightChildIdx(idx);

      const smallerChildIdx =
        rightChildIdx < count &&
        this.heap[rightChildIdx] < this.heap[leftChildIdx]
          ? rightChildIdx
          : leftChildIdx;

      if (this.heap[smallerChildIdx] <= rootNode) {
        this.heap[idx] = this.heap[smallerChildIdx];
        idx = smallerChildIdx;
      } else break;
    }

    this.heap[idx] = rootNode;
  };
}

export default function solution(n, k, enemy) {
  if (k >= enemy.length) return enemy.length;
  else {
    const heap = new Heap();
    for (let i = 0; i < enemy.length; i++) {
      heap.insert(enemy[i]);
      if (heap.getHeapLength() > k) {
        const last = heap.remove();
        if (last > n) return i;
        n -= last;
      }
    }
    return enemy.length;
  }
}
