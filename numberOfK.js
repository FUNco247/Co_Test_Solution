// 문제링크 -> https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let arr1 = [];
    for (let j = 0; j < array.length; j++) {
      arr1.push(array[j]);
    }

    const command = commands[i];
    const start = command[0] - 1;
    const end = Math.abs(command[0] - command[1]) + 1;
    const pick = command[2] - 1;
    const arr2 = arr1.splice(start, end).sort((a, b) => a - b);

    answer.push(arr2[pick]);
  }
  return answer;
}

// 코드 간소화 하기

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let arr1 = [];
    for (let j = 0; j < array.length; j++) {
      arr1.push(array[j]);
    }
    const command = commands[i];
    const [start, end, pick] = command;
    const arr2 = arr1
      .splice(start - 1, Math.abs(start - end) + 1)
      .sort((a, b) => a - b);
    console.log(arr2);
    answer.push(arr2[pick - 1]);
  }
  return answer;
}
