const findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);

export const findDupes = (arr) => {
  const num_suite = [];

  for (let i = 0; i < 5; i++) {
    let comb_num_suite = arr[i][0] + arr[i][1];
    num_suite.push(comb_num_suite);
  }

  const dupliCheck = findDuplicates(num_suite);

  if (dupliCheck.length !== 0) {
    return true;
  }

  return false;
};
