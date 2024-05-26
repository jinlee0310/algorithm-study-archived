// class MinHeap {
//     constructor() {
//         this.heap = [null];
//     }

//     size() {
//         return this.heap.length - 1;
//     }
//     getMin() {
//         return this.heap[1] ? this.heap[1] : null;
//     }
//     swap(a, b) {
//         [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
//     }
//     heappush(value) {
//         this.heap.push(value);
//         let curIdx = this.heap.length - 1;
//         let parIdx = (curIdx / 2) >> 0;

//         while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
//             this.swap(parIdx, curIdx);
//             curIdx = parIdx;
//             parIdx(curIdx / 2) >> 0;
//         }
//     }
// }

class MinHeap {
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
        console.log(this.heap);
    };

    #heapifyUp = () => {
        let idx = this.heap.length - 1; // 계속 변한다. 초기값은 맨 마지막 인덱스
        const lastInsertedNode = this.heap[idx];

        // 루트 노드가 되기 전까지
        while (idx > 0) {
            const parentIdx = this.#getParentIdx(idx); // 현재 idx의 부모 인덱스

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
            this.heap[0] = this.heap.pop(); // 마지막 노드를 루트로 올리고
            this.#heapifyDown(); // 힙 정렬
        }

        console.log(this.heap);
        return rootNode;
    };

    #heapifyDown = () => {
        let idx = 0;
        const count = this.heap.length;
        const rootNode = this.heap[idx];

        // left child가 있을 때까지 검사
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

const heap = new MinHeap();
heap.insert(1);
heap.insert(4);
heap.insert(5);
heap.insert(2);
heap.insert(9);
heap.insert(3);
heap.insert(7);
heap.insert(6);

heap.remove();

console.log("--------------");
class MaxHeap {
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
        console.log(this.heap);
    };

    #heapifyUp = () => {
        let idx = this.heap.length - 1;
        const lastInsertedNode = this.heap[idx];

        while (idx > 0) {
            const parentIdx = this.#getParentIdx(idx);

            if (this.heap[parentIdx] < lastInsertedNode) {
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
        console.log(this.heap);
        return rootNode;
    };

    #heapifyDown = () => {
        let idx = 0;
        const count = this.heap.length;
        const rootNode = this.heap[idx];

        while (this.#getLeftChildIdx(idx) < count) {
            const leftChildIdx = this.#getLeftChildIdx(idx);
            const rightChildIdx = this.#getRightChildIdx(idx);

            const largerChildIdx =
                rightChildIdx < count &&
                this.heap[rightChildIdx] > this.heap[leftChildIdx]
                    ? rightChildIdx
                    : leftChildIdx;

            if (this.heap[largerChildIdx] >= rootNode) {
                this.heap[idx] = this.heap[largerChildIdx];
                idx = largerChildIdx;
            } else break;
        }

        this.heap[idx] = rootNode;
    };
}

const maxHeap = new MaxHeap();
maxHeap.insert(1);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(2);
maxHeap.insert(9);
maxHeap.insert(3);
maxHeap.insert(7);
maxHeap.insert(6);
maxHeap.remove();
maxHeap.remove();
