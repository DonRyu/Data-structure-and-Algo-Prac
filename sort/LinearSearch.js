const linearSearch = (arr, value) => {
  let result = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      result = i;
    }
  }

  return result;
};

console.log(linearSearch([10, 15, 20, 25, 30], 15));
