// 문제링크 https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

function solution(board, moves) {
  const boxSize = board.length;
  const verticalLine = [];
  for (let i = 0; i < boxSize; i++) {
    verticalLine[i] = [];
    for (let j = 0; j < boxSize; j++) {
      const dollNumber = board[j][i];
      if (dollNumber != 0) {
        verticalLine[i].push(dollNumber);
      }
    }
  }
  let basket = [0];
  let popCount = 0;
  for (let i = 0; i < moves.length; i++) {
    const pickLine = moves[i];
    const pickDoll = verticalLine[pickLine - 1][0];
    if (pickDoll != undefined) {
      if (basket[basket.length - 1] === pickDoll) {
        popCount += 2;
        basket.pop();
      } else {
        basket.push(pickDoll);
      }
      verticalLine[pickLine - 1].shift();
    }
  }
  return popCount;
}
