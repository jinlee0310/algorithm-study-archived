from collections import deque
n, k = map(int, input().split())
MAX = 100000
dist = [0]*(MAX+1)


def solution(n, k):
    q = deque([n])
    while q:
        current_loc = q.popleft()
        #print(current_loc, sec)
        if current_loc == k:
            print(dist[current_loc])
            break
        for j in (current_loc-1, current_loc+1, current_loc*2):
            if 0 <= j <= MAX and not dist[j]:
                dist[j] = dist[current_loc]+1
                q.append(j)


solution(n, k)
