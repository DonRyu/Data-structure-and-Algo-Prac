const reverseString = (str) => {
    let leftIndex = 0;
    let rightIndex = str.length - 1;
    const arr = str.split("");
  
    while (leftIndex < rightIndex) {
      const temp = arr[leftIndex]; 
      arr[leftIndex] = arr[rightIndex]; 
      arr[rightIndex] = temp; 
      leftIndex++;
      rightIndex--;
    }
    return arr.join("");
  }


  console.log('reverseString',reverseString('asdf'))