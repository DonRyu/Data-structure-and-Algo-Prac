//Array Random access o(1), Insert/Delete o(N)

class ArrayPrac {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    this.data[this.length] = undefined;
    this.length--;
  }

  print() {
    for (let i = 0; i < this.length; i++) {
      console.log(this.data[i]);
    }
  }

  deleteAt(index) {
    this.data[index] = undefined;
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
  }

  // 하나 삽입 할때마다 나머지 애들을 죄다 이동해야 된다, 어레이가 클수록 많이 이동 됨으로 o(n)
  insertAt(index, element) {
   for(let i = this.length; i>=index; i--){
        this.data[i+1] = this.data[i]
   }
   this.data[index] = element
   this.length++;
  }

  // 바로 찾으면 됨으로 o(1) 이다. 링크드 리스트는 전부 순회 해야되서 o(n)
  find(index){
    console.log(this.data[index])
  }
}

let arr = new ArrayPrac();
arr.push(3);
arr.push(5);
arr.push("부엉");

arr.insertAt(0,'sibar')

arr.find(3)
// arr.print();
