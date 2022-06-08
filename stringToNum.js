//숫자 문자열과 영단어
// "one23onetwo3" 처럼  숫자와 숫자영단어로 조합된 input을 123123 과 같은 숫자로 변환하여 return하기

function solution(s) {
  const eng = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "zero",
  ];
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let i = 0; i < eng.length; i++) {
    const regex = new RegExp(eng[i], "gi");
    s = s.replace(regex, `${num[i]}`);
  }
  return Number(s);
}
