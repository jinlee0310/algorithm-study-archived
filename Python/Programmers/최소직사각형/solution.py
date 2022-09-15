def solution(sizes):
    max_arr=[]
    min_arr=[]
    for size in sizes:
        max_arr.append(max(size))
        min_arr.append(min(size))
        
    return max(max_arr)*max(min_arr)