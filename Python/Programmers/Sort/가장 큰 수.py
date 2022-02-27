def solution(numbers):
    num = list(map(str, numbers))
    num.sort(reverse=True, key=lambda x: x*3)
    if sum(list(map(int, num))) == 0:
        return '0'
    return ''.join(num)
