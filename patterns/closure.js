// A closure in JavaScript is a function that remembers and can access variables
// from outside its own scope,even after the function has finished running

// ex1
function AddModule(initial) {
  function Add(number) {
    return initial + number;
  }
  return Add;
}

let add1 = AddModule(1);
//console.log(add1(1)); // initial 값을 기억하고 있음 그래서 2가 출력됨

// ex2
function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
console.log(closureExample()); // 이걸로 하면 undefine이 같이 뜬다
closureExample(); // 이렇게 하면 undefine이 함께 뜨지 않는다 
