
const reversedWord = (str)=>{
    let splitedArr = str.split(" ")
    let nArr = []

    for (let i = splitedArr.length; i > 0; i--) {
        let element = splitedArr[i];
        nArr.push(element)
    }

    return nArr
}

console.log(reversedWord("I am don ryu"))