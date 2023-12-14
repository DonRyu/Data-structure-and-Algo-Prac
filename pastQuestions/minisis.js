// part 1
// error func, regular func 차이
// === , == 차이
// Rest api가 머냐?
// database 가 머냐?
// 그냥 text file과 database의 차이가 머냐?


// toUppercase가 머냐고 인터뷰어 한테 물었는데, 사장이 인터뷰 보는 사람 누구냐고 이야기함, 내가 잘못한건가?


// part 2
// 1a.) Obesverations: We have a string an initial string and need to have it changed.
// Look at the original string (abcAEBCCfg) and it needs to morph/change to (A2B2C3E1F1G1).
// What do you notice about the differences between the two strings??

// 1b.) Write and talk us through some pseudo code, a function to change
// string from “abcAECCfg” to “A2B2C3E1F1G1”. Use any programming language you are most comfortable with.

//abcAEBCCfg => A2B2C3E1F1G1

// abcAEBCCfg => abcaebccfg
// MAP {a:2, b:1, c:1 }
// objevt.Value() => [2,1,1]

let test = { a: 1, b: 2 };

let str = "abcAEBCCfg";

// console.log(JSON.stringify(test)); // {"a":1,"b":2} // split(':')

const ChangeString = (str) => {
  let lowerStr = str.toLowerCase();
  let keyArr = [];
  let valueArr = [];
  let result = [];
  let map = {};

  for (let i = 0; i < lowerStr.length; i++) {
    if (map[lowerStr[i]]) {
      map[lowerStr[i]] += 1;
    } else {
      map[lowerStr[i]] = 1;
    }
  }

  //   let map = str.reduce((acc, curr) => {
  //     if (acc[curr]) {
  //       acc[curr] += 1;
  //     } else {
  //       acc[curr] = 1;
  //     }
  //     return acc;
  //   }, {});

  keyArr = Object.keys(map); // [a,b,c,d]
  valueArr = Object.values(map); // [1,2,3]

  for (let i = 0; i < str.length - 4; i++) {
    result.push(`${keyArr[i]}${valueArr[i]}`);
  }

  let answer = "";
  for (let i = 0; i < str.length - 4; i++) {
    answer += result[i];
  }

  return answer.toUpperCase();
};

// console.log(ChangeString(str));






//--------------------------------------------------------------------------------------------


let test2 = 'asdfb'


test2.reduce((acc,curr)=>{
    console.log(curr)
},{})