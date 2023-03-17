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

 
  insertAt(index, element) {
   for(let i = this.length; i>=index; i--){
        this.data[i+1] = this.data[i]
   }
   this.data[index] = element
   this.length++;
  }
}

let arr = new ArrayPrac();
arr.push(3);
arr.push(5);
arr.push("부엉");

arr.insertAt(0,'sibar')
arr.print();
