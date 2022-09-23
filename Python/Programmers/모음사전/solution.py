def solution(word):
    res=[]
    cnt=0
    def dfs(s,w_list):
        nonlocal cnt

        if len(s)==5:
            return
        for w in w_list:
            p=s+w
            print(p)
            cnt+=1
            if p==word:
                res.append(cnt)
                break
            dfs(p,w_list)
    dfs('',['A','E','I','O','U'])
    return res[0]
solution('I')