from collections import deque


def solution(priorities, location):
    q = deque(priorities)
    cnt = 0
    while q:
        q = deque(priorities)
        cnt = 0
        while q:
            print(q, location, cnt)
            x = q.popleft()
            # 앞으로 한칸 나오기
            location -= 1
            flag = False
            # x보다 큰 요소 있는지 확인
            for i in range(len(q)):
                # 있으면
                if q[i] > x:
                    flag = True
                    q.append(x)
                    # 찾는 값이 맨 앞일때
                    if location == -1:
                        location += len(q)
                    break

            if not flag:
                if location == -1:
                    return cnt+1
                else:
                    cnt += 1


print(solution([2, 1, 3, 2], 2))
print(solution([1, 1, 9, 1, 1, 1], 0))
