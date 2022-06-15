function solution(numbers, hand) {
  const navi = {
    0: [4, 2],
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    10: [4, 1],
    12: [4, 3],
  };
  let left = 10;
  let right = 12;
  let answer = [];

  for (number of numbers) {
    if (number % 3 === 1 && number !== 0) {
      answer.push("L");
      left = number;
      console.log("왼손" + left);
    } else if (number % 3 === 0 && number !== 0) {
      answer.push("R");
      right = number;
      console.log("오른손" + right);
    } else if (number === 0 || number % 3 === 2) {
      const leftLength =
        Math.abs(navi[left][0] - navi[number][0]) +
        Math.abs(navi[left][1] - navi[number][1]);
      const rightLength =
        Math.abs(navi[right][0] - navi[number][0]) +
        Math.abs(navi[right][1] - navi[number][1]);
      if (leftLength > rightLength) {
        answer.push("R");
        right = number;
        console.log("오른손" + right);
      } else if (leftLength < rightLength) {
        answer.push("L");
        left = number;
        console.log("왼손" + left);
      } else {
        if (hand === "right") {
          answer.push("R");
          right = number;
          console.log("오른손" + right);
        } else if (hand === "left") {
          answer.push("L");
          left = number;
          console.log("왼손" + left);
        }
      }
    }
  }

  //if e % 3 ===1
  // if e%3 ===0
  // if 0 || e%3 ===2

  //1 2 3
  //4 5 6
  //7 8 9
  //* 0 #
  return answer.join("");
}
