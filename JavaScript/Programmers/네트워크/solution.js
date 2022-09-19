const convertGraph = (n, computers) => {
  const graph = Array.from(Array(n + 1), () => new Array(0));
  for (let j = 1; j < computers.length; j++) {
    for (let i = 0; i < j; i++) {
      if (computers[j][i] === 1) {
        graph[j + 1].push(i + 1);
        graph[i + 1].push(j + 1);
      }
    }
  }
  return graph;
};

const dfs = (graph, visited, start) => {
  visited[start] = true;
  for (let i = 0; i < graph[start].length; i++) {
    if (!visited[graph[start][i]]) {
      visited[graph[start][i]] = true;
      dfs(graph, visited, graph[start][i]);
    }
  }
};

const solution = (n, computers) => {
  const graph = convertGraph(n, computers);
  const visited = new Array(n + 1).fill(false);
  let cnt = 0;
  for (let i = 1; i < visited.length; i++) {
    if (!visited[i]) {
      cnt++;
      dfs(graph, visited, i);
    }
  }
  console.log(cnt);
  return cnt;
};

solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
