import { testcase1 } from "./testcase.js";

function drawGraph(n, vertex) {
    const graph = Array.from(Array(n + 1), () => new Array());

    for (let node of vertex) {
        const [s, e] = node;
        graph[s].push(e);
        graph[e].push(s);
    }

    return graph;
}

class PriorityQueue {
    #heap;
    constructor() {
        this.#heap = [];
    }

    #getLeftChildIdx = (parentIdx) => parentIdx * 2 + 1;

    #getRightChildIdx = (parentIdx) => parentIdx * 2 + 2;

    #getParentIdx = (childIdx) => Math.floor((childIdx - 1) / 2);

    heappush = (priority, value) => {
        const node = { priority, value };
        this.#heap.push(node);
        this.#heapifyUp();
    };

    #heapifyUp = () => {
        let idx = this.#heap.length - 1;
        const lastInsertedNode = this.#heap[idx];

        while (idx > 0) {
            const parentIdx = this.#getParentIdx(idx);

            if (this.#heap[parentIdx].priority < this.#heap[idx].priority) {
                this.#heap[idx] = this.#heap[parentIdx];
                idx = parentIdx;
            } else break;
        }

        this.#heap[idx] = lastInsertedNode;
    };

    heappop = () => {
        const rootNode = this.#heap[0];

        if (this.#heap.length <= 0) return undefined;
        if (this.#heap.length === 1) this.#heap = [];
        else {
            this.#heap[0] = this.#heap.pop();
            this.#heapifyDown();
        }

        return rootNode;
    };

    #heapifyDown = () => {
        let idx = 0;
        const rootNode = this.#heap[idx];

        while (this.#getLeftChildIdx(idx) < this.#heap.length) {
            const leftChildIdx = this.#getLeftChildIdx(idx);
            const rightChildIdx = this.#getRightChildIdx(idx);

            const largerIdx =
                rightChildIdx < this.#heap.length &&
                this.#heap[rightChildIdx].priority >
                    this.#heap[leftChildIdx].priority
                    ? rightChildIdx
                    : leftChildIdx;

            if (this.#heap[largerIdx].priority > this.#heap[idx].priority) {
                this.#heap[idx] = this.#heap[largerIdx];
                idx = largerIdx;
            } else break;
        }

        this.#heap[idx] = rootNode;
    };

    size = () => this.#heap.length;

    getHeap = () => this.#heap;
}

function dijkstra(graph) {
    const start = 1;
    const distance = Array(graph.length).fill(Infinity);
    const pq = new PriorityQueue();

    pq.heappush(0, start);
    distance[start] = 0;

    while (pq.size() !== 0) {
        const { priority: dist, value: now } = pq.heappop();

        if (distance[now] < dist) {
            continue;
        }
        for (let node of graph[now]) {
            const cost = dist + 1;
            if (cost < distance[node]) {
                distance[node] = cost;
                pq.heappush(cost, node);
            }
        }
    }
    // console.log(distance);
    return distance;
}

export default function solution(n, vertex) {
    const graph = drawGraph(n, vertex);
    // console.log(graph);
    const distance = dijkstra(graph);
    const maxDist = Math.max(...distance.filter((v) => v !== Infinity));
    return distance.filter((v) => v === maxDist).length;
}

solution(testcase1.n, testcase1.vertex);
