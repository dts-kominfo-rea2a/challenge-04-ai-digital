// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const sortDate = (arr) => {
  let data = []
  for (let i = 0; i < arr.length; i++) {
    // data Looping
    let loop = ''
    loop += arr[i]
    // add to array
    data.push(Math.round(Date.parse(loop) / 1000))
  }
  let sortedData = data.sort().join('-')
  return sortedData
}
const createDate = (arr, arrI) => {
  let date = 0
  if (arrI === undefined) {
    return sortDate(arr)
  } else {
    date = Math.round(Date.parse(arr[arrI]) / 1000)
    dateString = date.toString()
    return dateString
  }
}

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
