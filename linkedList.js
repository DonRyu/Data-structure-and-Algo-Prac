class Node {
  // 노드는 값을 담고 있는 엘리먼트가 있고, 다음 값을 가르키는 포인터가 있다.
  constructor(next, element) {
    this.next = next;
    this.element = element;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(null, element);
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size += 1;
  }

  //0번째로 인서트 할때
  //중간에 인서트 할때
  //리스트에 값이 없을때, 인덱스가 list.length 보다 클때
  insert(index, element) {
    let newNode = new Node(null, element);
    let curr, prev;
    curr = this.head;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    if (this.size === 0 || index > this.size) {
      console.log("Hey man, no values in the List");
      return;
    }

    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = prev.next;
    }

    prev.next = newNode;
    newNode.next = curr;
  }

  // 지울놈, 지울놈-1,지울놈+1을 찾는다
  // 지울놈-1.next = 지울놈+1
  // 지울놈을 지운다
  delete(index) {
    if (index > this.size) {
      console.log("Hey, index is bigger than size ");
    }
    if (index === 0) {
      let curr = this.head;
      this.head = curr.next;
      curr = undefined;
      return;
    }
    let prev, curr, aft;
    curr = this.head;

    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = prev.next;
    }
    aft = curr.next;
    prev.next = aft;
    curr = undefined;
  }

  printList() {
    let curr = this.head;
    let result = "";
    while (curr) {
      result += `${curr.element} `;
      curr = curr.next;
    }
    console.log(result);
  }
}

const LL = new LinkedList();
LL.add(1);
LL.add(2);
LL.add(3);
// LL.insert(2, 9999);
LL.delete(0);
LL.printList();
