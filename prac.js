// const reverseString = (str) => {
//     let leftIndex = 0;
//     let rightIndex = str.length - 1;
//     const arr = str.split("");

//     while (leftIndex < rightIndex) {
//       const temp = arr[leftIndex];
//       arr[leftIndex] = arr[rightIndex];
//       arr[rightIndex] = temp;
//       leftIndex++;
//       rightIndex--;
//     }
//     return arr.join("");
//   }

//   console.log('reverseString',reverseString('asdf'))

class Node {
  constructor(next, value) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  constructor(head, size) {
    this.head = head;
    this.size = 0;
  }

  //size is 0
  //size is not 0
  Add(value) {
    let node = new Node(null, value);
    if (this.size < 1) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  InsertAt() {
    let node = new Node();
    
  }

  Delete() {
    if(this.size <1){
      return console.log('LL empty')
    }else{
     let curr = this.head
     this.head = curr.next
     curr = null
    }
  }

  // (3, 2) => (2,1) => (1,null)
  Print() {
    let curr = this.head;
    let result = "";
    while (curr) {
      result += ` ${curr.value}`;
      curr = curr.next;
    }
    console.log("===>", result);
  }
}

let LL = new LinkedList();
// LL.Add(2);
LL.Add(3);
LL.Add(4);
LL.Delete();
// LL.Delete();

LL.Print();
