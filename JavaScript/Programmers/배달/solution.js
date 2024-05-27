import { testcase1 } from "./testcase.js";

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

            if (this.#heap[parentIdx].priority > this.#heap[idx].priority) {
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

            const smallerChildIdx =
                rightChildIdx < this.#heap.length &&
                this.#heap[rightChildIdx].priority <
                    this.#heap[leftChildIdx].priority
                    ? rightChildIdx
                    : leftChildIdx;
            if (
                this.#heap[smallerChildIdx].priority < this.#heap[idx].priority
            ) {
                this.#heap[idx] = this.#heap[smallerChildIdx];
                idx = smallerChildIdx;
            } else break;
        }

        this.#heap[idx] = rootNode;
    };

    size = () => this.#heap.length;
}

const dijkstra = (start, graph) => {
    const pq = new PriorityQueue();
    const distance = Array(graph.length).fill(Infinity);
    pq.heappush(0, start);

    while (pq.size() !== 0) {
        const { priority: dist, value: now } = pq.heappop();
        if (distance[now] < dist) {
            continue;
        }
        for (let node of graph[now]) {
            let cost = dist + node[1];
            if (cost < distance[node[0]]) {
                distance[node[0]] = cost;
                pq.heappush(cost, node[0]);
            }
        }
    }
    console.log(distance);
    return distance;
};

const drawGraph = (road, N) => {
    const graph = Array.from(Array(N + 1), () => new Array());
    for (let node of road) {
        const [s, e, d] = node;
        graph[s].push([e, d]);
        graph[e].push([s, d]);
    }
    return graph;
};

export default function solution(N, road, K) {
    const graph = drawGraph(road, N);
    const distance = dijkstra(1, graph);
    let answer = 0;
    for (let i = 2; i < distance.length; i++) {
        if (distance[i] <= K) answer++;
    }
    return answer + 1;
}

solution(testcase1.N, testcase1.road, testcase1.K);
