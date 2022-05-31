function solution(id_list, report, k) {
  report = [...new Set(report)];
  var mailCount = {};
  // 신고자와 피신고자 구분하기
  let reportPair = [];
  let reporter = [];
  let reportedUser = [];
  let bannedUser = [];
  for (var i = 0; i < report.length; i++) {
    const pairArr = report[i].split(" ");
    reportPair[i] = pairArr;
    reportedUser[i] = report[i].split(" ")[1];
  }
  // 정지당할 유저 구하기
  for (var i = 0; i < id_list.length; i++) {
    mailCount[`${id_list[i]}`] = 0;
    reporter.push(`${id_list[i]}`);
    const count = reportedUser.filter(
      (element) => element === id_list[i]
    ).length;
    if (count >= k) {
      bannedUser.push(id_list[i]);
    }
  }
  // 받을 메일의 수

  for (let i = 0; i < reportPair.length; i++) {
    if (bannedUser.includes(reportPair[i][1])) {
      mailCount[`${reportPair[i][0]}`] += 1;
    }
  }
  //return console.log(report, reportPair,bannedUser)
  //console.log(reporter);
  answer = Object.values(mailCount);
  return answer;
}
