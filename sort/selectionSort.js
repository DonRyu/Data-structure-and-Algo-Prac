// [78,4,3]

// find the the lowest value
// compare to other value is it the lowest
// iterate at the end of the array, switch the current value to lowest value

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[lowest] > array[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let tmp = array[i];
      array[i] = array[lowest];
      array[lowest] = tmp;
    }
  }
  return array;
};

console.log(selectionSort([78, 4, 3]));
