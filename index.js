// code your solution here
const superbowlWin = (record) => {
  const result = record.find((obj) => obj.result === "W");
  if (result) {
    return result.year;
  } else {
    return undefined;
  }
};
