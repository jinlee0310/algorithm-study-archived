function dfs(str, skill) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (!skill.includes(str[i])) {
            continue;
        } else {
            if (skill[result] === str[i]) {
                result++;
            } else {
                return false;
            }
        }
    }
    return true;
}

function solution(skill, skill_trees) {
    let answer = 0;
    for (let skillTree of skill_trees) {
        if (dfs(skillTree, skill)) {
            console.log(skillTree);
            answer++;
        }
    }
    return answer;
}
