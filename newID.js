function solution(new_id) {
  new_id = new_id.toLowerCase().replace();
  idArr = new_id.split("").filter((a) => /[a-z0-9\-\_\.]/g.test(a));
  for (let i = 0; i < idArr.length - 1; i++) {
    if (idArr[i] === "." && idArr[i + 1] === ".") {
      idArr.splice(i, 1);
      i--;
    }
  }
  if (idArr[idArr.length - 1] === ".") {
    idArr.splice(idArr.length - 1, 1);
  }
  if (idArr[0] === ".") {
    idArr.splice(0, 1);
  }
  if (idArr.length === 0) {
    idArr.push("a");
  }
  if (idArr.length > 15) {
    idArr.length = 15;
    if (idArr[idArr.length - 1] === ".") {
      idArr.splice(idArr.length - 1, 1);
    }
  }
  if (idArr.length === 1) {
    idArr[1] = idArr[0];
    idArr[2] = idArr[0];
  } else if (idArr.length === 2) {
    idArr[2] = idArr[1];
  }
  var answer = idArr.toString().replace(/,/g, "");
  return answer;
}
