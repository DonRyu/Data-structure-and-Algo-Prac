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

// 20 queen road 2023

let nData = dataS.map((item) => {
  let arr = item.split(",");
  let result = {
    key: arr[0],
    address: arr[1],
    date: parseInt(arr[2]),
  };
  return result;
});

// let result = nData.reduce((acc, curr) => {
//   let { key, address, date } = curr;
//   if (!(acc[address]) || acc[address].date < date) {
//     acc[address] = {key,date};
//   }
//   return acc;
// }, {});

// console.log(Object.values(result).map((item)=>item.key));

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

let result = emails.reduce((acc, curr) => {
  let { subject, timeStamp } = curr;
  if (!acc[subject] || acc[subject] < timeStamp) {
    acc[subject] = timeStamp;
  }
  return acc;
}, {});

// console.log(result);

// 문제 1: 배열 평균 계산
// 주어진 JSON 데이터에서 숫자로 이루어진 배열을 찾아 해당 배열의 평균값을 계산하세요.
// const json = {
//   "numbers": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// };
// let res = 0;
// json.numbers.map((item)=>{
//   res += item;
// })

// console.log(res/(json.numbers.length))

// 문제 2: 짝수만 필터링
// 주어진 JSON 데이터에서 짝수로 이루어진 배열을 찾아 출력하세요.
// const jsonData = {
//   "numbers": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// };

// let res = jsonData.numbers.filter((item)=>{
//     return item%2 === 0;
// })

// console.log(res)

// 문제 3: 이름 길이 계산
// 주어진 JSON 데이터에서 이름을 담은 배열을 찾아, 각 이름의 길이를 계산하여 새로운 배열로 출력하세요.
// const jsonData = {
//   names: ["Alice", "Bob", "Charlie", "David", "Eve"],
// };

// let res = jsonData.names.map((item) => {
//   return item.length;
// });

// console.log(res);

// 문제 4: 과일 가격 총합 계산
const jsonData = {
  fruits: [
    { name: "Apple", count: 2 },
    { name: "Apple", count: 1 },
    { name: "Grapes", count: 3 },
    { name: "Grapes", count: 4 },
  ],
};

// let test = {'jim':0}
// if(!test['jim']){
//   console.log('si')
// }

// if(0){
//   console.log('ryuryulemon')
// }

let res = jsonData.fruits.reduce((acc, curr) => {
  let { name, count } = curr;
  if (!acc[name]) {
    acc[name] = count;
  } else {
    acc[name] += count;
  }
  return acc;
}, {});

 console.log(res);

//문제 5: 단어 빈도수 계산
//주어진 JSON 데이터에서 문장을 담은 배열을 찾아, 모든 단어의 빈도수를 계산하여 객체로 출력하세요.

// const jsonData = {
//   sentences: [
//     "This is a sample sentence.",
//     "This sentence for Sample.",
//     "Sample sentence for the exercise.",
//   ],
// };

// console.log(getCountStr(jsonData));

// 6
// 문자열 리스트를 받아 모든 문자열을 합치는 함수를 작성하세요.
// reduce 함수를 활용하세요.

// 예시
// result = concatenate_strings(strings)
// print(result)  # 출력 결과: Hello World!

let data = ["Hello", " ", "World", "!", " ", " ", "LOL"];

// 리스트의 모든 요소를 곱한 결과를 반환하는 함수를 작성하세요.
// reduce 함수를 활용하세요.

// 예시
let numbers = [2, 3, 4];
// result = multiply_elements(numbers)
// print(result)

// console.log(res)

// 중복제거
let elements = [1, 2, 2, 3, 4, 4, 5];
