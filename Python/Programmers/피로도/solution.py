import itertools
def solution(k, dungeons):
    answer = -1
    arr_dungeons=itertools.permutations(dungeons,len(dungeons))
    possible=[]
    
    for dungeons in list(arr_dungeons):
        cnt=0
        power=k
        # print(dungeons)
        for dungeon in dungeons:
            if(power>=dungeon[0]):
                power-=dungeon[1]
                cnt+=1
            else:
                break
        possible.append(cnt)
    # print(possible)
    return max(possible)