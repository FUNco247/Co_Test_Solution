function solution(absolutes, signs) {
  plusOrMinus = signs.map((a) => (a === true ? 1 : -1));
  result = 0;
  for (let i = 0; i < plusOrMinus.length; i++) {
    result = result + plusOrMinus[i] * absolutes[i];
  }
  var answer = result;
  return answer;
}
