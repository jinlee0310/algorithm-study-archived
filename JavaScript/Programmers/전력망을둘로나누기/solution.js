function dfs(graph, v, visited, nodes) {
    visited[v] = true;
    nodes.push(v);

    for (let node of graph[v]) {
        if (!visited[node]) {
            dfs(graph, node, visited, nodes);
        }
    }
    return nodes;
}

function solution(n, wires) {
    let answer = Infinity;

    for (let j = 0; j < wires.length; j++) {
        const visited = Array(n + 1).fill(false);
        const splitWires = [...wires.slice(0, j), ...wires.slice(j + 1)];
        const graph = Array.from(Array(n + 1), () => []);
        for (let wire of splitWires) {
            graph[wire[0]].push(wire[1]);
            graph[wire[1]].push(wire[0]);
        }
        const nodes = [];
        for (let i = 1; i < n + 1; i++) {
            if (!visited[i]) {
                const n = [];
                dfs(graph, i, visited, n);
                nodes.push(n.length);
            }
        }
        answer = Math.min(answer, Math.abs(nodes[0] - nodes[1]));
    }

    return answer;
}
