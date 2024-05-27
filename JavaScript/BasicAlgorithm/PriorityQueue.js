class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    #getLeftChildIdx = (parentIdx) => parentIdx * 2 + 1;

    #getRightChildIdx = (parentIdx) => parentIdx * 2 + 2;

    #getParentIdx = (childIdx) => Math.floor((childIdx - 1) / 2);

    peek = () => this.heap[0];

    insert = (priority, value) => {
        const node = { priority, value };

        this.heap.push(node);
        this.#heapifyUp();
        console.log(this.heap);
    };

    #heapifyUp = () => {
        let idx = this.heap.length - 1;
        const lastInsertedNode = this.heap[idx];

        while (idx > 0) {
            const parentIdx = this.#getParentIdx(idx);
            if (this.heap[parentIdx].priority > lastInsertedNode.priority) {
                this.heap[idx] = this.heap[parentIdx];
                idx = parentIdx;
            } else break;
        }

        this.heap[idx] = lastInsertedNode;
    };

    remove = () => {
        const rootNode = this.heap[0];

        if (this.heap.length <= 0) return undefined;
        if (this.heap.length === 1) this.heap = [];
        else {
            this.heap[0] = this.heap.pop();
            this.#heapifyDown();
        }

        console.log(this.heap);
        return rootNode;
    };

    #heapifyDown = () => {
        let idx = 0;
        const rootNode = this.heap[idx];

        while (this.#getLeftChildIdx(idx) < this.heap.length) {
            const leftChildIdx = this.#getLeftChildIdx(idx);
            const rightChildIdx = this.#getRightChildIdx(idx);

            const smallerChildIdx =
                rightChildIdx < this.heap.length &&
                this.heap[rightChildIdx].priority <
                    this.heap[leftChildIdx].priority
                    ? rightChildIdx
                    : leftChildIdx;

            if (this.heap[smallerChildIdx].priority < this.heap[idx].priority) {
                this.heap[idx] = this.heap[smallerChildIdx];
                idx = smallerChildIdx;
            } else break;
        }

        this.heap[idx] = rootNode;
    };
}

const pq = new PriorityQueue();

pq.insert(1, 3);
pq.insert(4, 3);
pq.insert(3, 3);
pq.insert(8, 3);
pq.insert(5, 3);
pq.insert(2, 3);
pq.remove();
pq.remove();
