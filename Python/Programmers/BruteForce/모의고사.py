def solution(answers):
    answer = []
    student1 = [1, 2, 3, 4, 5]*(len(answers)//5+1)
    student2 = [2, 1, 2, 3, 2, 4, 2, 5]*(len(answers)//8+1)
    student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]*(len(answers)//10+1)
    correct = [0, 0, 0]
    for i in range(len(answers)):
        if answers[i] == student1[i]:
            correct[0] += 1
        if answers[i] == student2[i]:
            correct[1] += 1
        if answers[i] == student3[i]:
            correct[2] += 1

    for i in range(3):
        if correct[i] == max(correct):
            answer.append(i+1)

    answer.sort()
    return answer
