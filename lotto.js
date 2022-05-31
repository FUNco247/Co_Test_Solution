function solution(lottos, win_nums) {
  const unknownNum = lottos.filter((a) => a === 0);
  const knownNum = lottos.filter((a) => a != 0);
  let matchCount = 0;
  for (num of win_nums) {
    if (knownNum.includes(num)) {
      matchCount += 1;
    }
  }
  const maxCount = matchCount + unknownNum.length;
  const minCount = matchCount;
  function getRank(count) {
    if (count != 0) {
      const rank = 7 - count;
      return rank;
    } else {
      const rank = 6;
      return rank;
    }
  }
  const maxRank = getRank(maxCount);
  const minRank = getRank(minCount);
  var answer = [maxRank, minRank];
  return answer;
}
