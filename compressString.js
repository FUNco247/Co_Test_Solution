//https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript#

function solution(s) {
  const stringArr = s.split("");
  const length = stringArr.length;

  function rebinding(stringArr, unit) {
    let bundle = [];
    const groupCount = parseInt(length / unit);
    for (let i = 0; i < groupCount; i++) {
      const start = 0;
      const part = stringArr.splice(start, unit);
      bundle.push(part);
    }

    let pressedCountArr = [];
    let pressedCount = 0;
    for (let k = 1; k < bundle.length; k++) {
      if (bundle[k - 1].join() === bundle[k].join()) {
        pressedCount += 1;
        pressedCountArr.pop();
        pressedCountArr.push(pressedCount);
      } else {
        pressedCount = 0;
        pressedCountArr.push(pressedCount);
      }
    }

    let totalPressedCount = 0;
    pressedCountArr = pressedCountArr.filter((e) => e !== 0);
    console.log(pressedCountArr);
    for (let m = 0; m < pressedCountArr.length; m++) {
      if (pressedCountArr[m] > 0 && pressedCountArr[m] + 1 < 10) {
        //console.log(totalPressedCount);
        totalPressedCount = totalPressedCount + pressedCountArr[m] * unit;
        //console.log("no over");
        //console.log(totalPressedCount);
      } else if (pressedCountArr[m] + 1 >= 10) {
        //console.log(totalPressedCount);
        const num = pressedCountArr[m] + 1;
        totalPressedCount =
          totalPressedCount +
          pressedCountArr[m] * unit -
          (num.toString().length - 1);
        //console.log("over");
        //console.log(totalPressedCount);
      }
    }
    //console.log(totalPressedCount);
    totalPressedCount -= pressedCountArr.length;
    const totalCount = length - totalPressedCount;
    return totalCount;
  }

  let answer = [];
  for (let l = 1; l < length + 1; l++) {
    const newArgument = stringArr.slice();
    answer.push(rebinding(newArgument, l));
  }
  //console.log(answer);
  return Math.min(...answer);
}

console.log(solution("xxxxxxxxxxyyy"));
