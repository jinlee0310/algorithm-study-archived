from collections import deque
f, s, g, u, d = map(int, input().split())
# 총 층수, 현재 위치, 목표 위치, 올라가기, 내려가기


def solution(f, s, g, u, d):
    dist = [0]*(f+1)
    q = deque([s])
    dist[s] = 1
    while q:
        current = q.popleft()
        # print(dist)
        if current == g:
            return dist[current]-1
        for j in (current+u, current-d):
            if 0 < j <= f and not dist[j]:
                dist[j] = dist[current]+1
                q.append(j)

    return 'use the stairs'


answer = solution(f, s, g, u, d)
print(answer)
