// We are looking for a Python script that can process a set of real estate listings,
// each with a unique identifier (like "L4" or "L1"), an address,
//and a year. Given this data, the goal is to identify which listing is the most recent for each unique address.

// For example, from the data provided:

// L4, 123 kings road,2022
// L1, 123 kings road,2020
// L2, 20 queen road,1990
// L3, 20 queen road,1992

// The script should determine that:
// For "123 kings road", the most recent listing is "L4" from 2022.
// For "20 queen road", the most recent listing is "L3" from 1992.
// Thus, the output should be:

// L3,L4 => [ L3 , L4]

// Combine duplicated address
// find the latest date

let dataS = [
  "L4, 123 kings road, 2022",
  "L1, 123 kings road, 2020",
  "L2, 20 queen road, 1990",
  "L3, 20 queen road, 1992",
  "L23, 20 queen road, 2992",
];

let nData = [];
dataS.map((item) => {
  let arr = item.split(",");
  nData.push({
    key: arr[0],
    address: arr[1],
    date: parseInt(arr[2]),
  });
});

const getLatest = (nData) => {
  let result = [];
  nData.map((item) => {
    let { key, address, date } = item;

    if (!result[address] || result[address].date < date) {
      result[address] = { key, date };
    }
  });
  return result;
};

const getReduce = (nData) => {
  let result = [];
  result = nData.reduce((acc, curr) => {
    let { key, address, date } = curr;
    if (!acc[address] || acc[address].date < date) {
      acc[address] = { key, date };
    }
    return acc;
  }, {});

  return result;
};

console.log(getReduce(nData));

// ------------------------------------------------------------------------------------------------

// Email Threads: Given a list of email threads with unique identifiers,
// subject lines, and timestamps, write a script to find
// the email with the latest timestamp for each unique subject line.

let emails = [
  {
    key: 0,
    subject: "so what",
    timeStamp: 2234,
  },
  {
    key: 2,
    subject: "so what",
    timeStamp: 2934,
  },
  {
    key: 5,
    subject: "so what3",
    timeStamp: 3934,
  },
  {
    key: 9,
    subject: "so what3",
    timeStamp: 5934,
  },
];

const getLatestTimeStamp = (emails) => {
  let result = emails.reduce((acc, curr) => {
    let { key, subject, timeStamp } = curr;

    if (!acc[subject] || acc[subject].timeStamp < timeStamp) {
      acc[subject] = { key, timeStamp };
    }
    return acc;
  }, {});
  return result;
};

console.log(getLatestTimeStamp(emails))



// 문제 1: 배열 평균 계산

// 주어진 JSON 데이터에서 숫자로 이루어진 배열을 찾아 해당 배열의 평균값을 계산하세요.



// const jsonData = {
//   "numbers": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// };






// 문제 2: 짝수만 필터링

//     주어진 JSON 데이터에서 짝수로 이루어진 배열을 찾아 출력하세요.



// const jsonData = {
//   "numbers": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// };

// 문제 3: 이름 길이 계산

//     주어진 JSON 데이터에서 이름을 담은 배열을 찾아, 각 이름의 길이를 계산하여 새로운 배열로 출력하세요.



// const jsonData = {
//   "names": ["Alice", "Bob", "Charlie", "David", "Eve"]
// };

// 문제 4: 과일 가격 총합 계산

//     주어진 JSON 데이터에서 과일과 가격으로 이루어진 배열을 찾아, 모든 과일의 가격을 더한 값을 계산하세요.



// const jsonData = {
//   "fruits": [
//     {"name": "Apple", "price": 2},
//     {"name": "Banana", "price": 1},
//     {"name": "Orange", "price": 3},
//     {"name": "Grapes", "price": 4}
//   ]
// };

// 문제 5: 단어 빈도수 계산

//     주어진 JSON 데이터에서 문장을 담은 배열을 찾아, 모든 단어의 빈도수를 계산하여 객체로 출력하세요.



// const jsonData = {
//   "sentences": [
//     "This is a sample sentence.",
//     "Another sentence for practice.",
//     "Sample sentence for the exercise."
//   ]
// };