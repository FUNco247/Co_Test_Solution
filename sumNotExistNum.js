function solution(numbers) {
  numbers = [...new Set(numbers)];
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    const newNumbers = numbers.filter((e) => e !== i);
    if (newNumbers.length === numbers.length) {
      answer = answer + i;
    }
  }
  return answer;
}
