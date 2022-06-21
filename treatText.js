// 문제링크 https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  var answer = true;
  const arr = s.split("").filter((e) => e !== "-");
  if ((arr.length === 4 || arr.length === 6) && s.match(/^[+-]?\d*$/)) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

// solution using regex
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
